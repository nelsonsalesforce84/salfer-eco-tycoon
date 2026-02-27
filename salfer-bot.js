const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');
const path = require('path');

// --- CONFIGURAÇÃO ---
const REQUIRED_ENV_VARS = [
    'TWITTER_APP_KEY',
    'TWITTER_APP_SECRET',
    'TWITTER_ACCESS_TOKEN',
    'TWITTER_ACCESS_SECRET'
];

function getTwitterClient() {
    const missing = REQUIRED_ENV_VARS.filter((name) => !process.env[name]);
    if (missing.length > 0) {
        console.error('❌ Variáveis de ambiente em falta:', missing.join(', '));
        console.error('Define as variáveis e volta a correr o bot.');
        return null;
    }

    const client = new TwitterApi({
        appKey: process.env.TWITTER_APP_KEY,
        appSecret: process.env.TWITTER_APP_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_SECRET
    });

    return client.readWrite;
}

const TWEETS_FILE = process.env.TWEETS_FILE || path.join(__dirname, 'tweets.md');
const LOG_FILE = path.join(__dirname, 'bot-log.json');

async function postNextTweet() {
    try {
        const rwClient = getTwitterClient();
        if (!rwClient) return;

        console.log('🤖 Verificando tweets em: ' + TWEETS_FILE);

        if (!fs.existsSync(TWEETS_FILE)) {
            console.error('❌ Ficheiro de tweets não encontrado!');
            return;
        }

        const content = fs.readFileSync(TWEETS_FILE, 'utf8');

        // Dividir por ## e limpar espaços
        const tweets = content.split(/## ───────────+/).filter(t => t.trim().length > 10);

        if (tweets.length === 0) {
            console.error('❌ Nenhum tweet encontrado no ficheiro.');
            return;
        }

        let lastIndex = -1;
        if (fs.existsSync(LOG_FILE)) {
            try {
                const log = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
                lastIndex = log.lastIndex ?? -1;
            } catch (e) {
                console.warn('⚠️ bot-log.json inválido, a reiniciar histórico.');
            }
        }

        const nextIndex = (lastIndex + 1) % tweets.length;
        const rawTweet = tweets[nextIndex];

        // Remover o título (ex: TWEET 1 — ...) e deixar apenas o conteúdo
        let lines = rawTweet.split('\n');
        let finalTweet = lines.filter(line => !line.includes('TWEET') && !line.includes('────')).join('\n').trim();

        console.log('📤 Preparando tweet (' + (nextIndex + 1) + '/' + tweets.length + '):');
        console.log('-------------------');
        console.log(finalTweet);
        console.log('-------------------');

        await rwClient.v2.tweet(finalTweet);

        fs.writeFileSync(LOG_FILE, JSON.stringify({ lastIndex: nextIndex, lastDate: new Date() }));
        console.log('✅ Tweet publicado com sucesso!');

    } catch (error) {
        console.error('❌ Erro no Bot:', JSON.stringify(error, null, 2));
    }
}

postNextTweet();
