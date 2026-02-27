// ===== TUTORIAL SYSTEM =====
const TUTORIAL_STEPS = [
    {
        id: 'welcome',
        icon: '🌍',
        title: {
            pt: 'Bem-vindo ao Salfer Eco-Tycoon!',
            en: 'Welcome to Salfer Eco-Tycoon!',
            es: '¡Bienvenido a Salfer Eco-Tycoon!',
            fr: 'Bienvenue à Salfer!',
            de: 'Willkommen bei Salfer!'
        },
        text: {
            pt: 'Vamos construir o império de energia limpa mais potente do planeta. Senta-te e aprende os controlos!',
            en: 'Let\'s build the most powerful clean energy empire on the planet. Sit back and learn the controls!',
            es: '¡Vamos a construir el imperio de energía limpia más potente del planeta!',
            fr: 'Construisons l\'empire d\'énergie propre le plus puissant de la planète!',
            de: 'Lass uns das mächtigste Imperium für saubere Energie auf dem Planeten aufbauen!'
        },
        highlight: null
    },
    {
        id: 'core',
        icon: '⚡',
        title: {
            pt: 'Geração Manual',
            en: 'Manual Generation',
            es: 'Generación Manual',
            fr: 'Génération Manuelle',
            de: 'Manuelle Erzeugung'
        },
        text: {
            pt: 'Este é o teu Núcleo Manual. Clica nele para gerar os teus primeiros Watts! É aqui que tudo começa.',
            en: 'This is your Manual Core. Click it to generate your first Watts! This is where it all starts.',
            es: '¡Haz clic aquí para generar tus primeiros Watts!',
            fr: 'Clique ici pour générer tes premiers Watts!',
            de: 'Klicke hier um deine ersten Watt zu erzeugen!'
        },
        highlight: '#coreBtn'
    },
    {
        id: 'energy',
        icon: '🔋',
        title: {
            pt: 'Monitor de Energia',
            en: 'Energy Monitor',
            es: 'Monitor de Energía',
            fr: 'Moniteur d\'Énergie',
            de: 'Energie-Monitor'
        },
        text: {
            pt: 'Aqui podes ver as tuas reservas de energia acumulada e a tua taxa de produção atual.',
            en: 'Here you can see your accumulated energy reserves and your current production rate.',
            es: '¡Aquí ves tu energía y taxa de producción!',
            fr: 'Ici tu vois ton énergie et ton taux de production!',
            de: 'Hier siehst du deine Energie und Produktionsrate!'
        },
        highlight: '#energyCard'
    },
    {
        id: 'shop',
        icon: '🏗️',
        title: {
            pt: 'Loja de Edifícios',
            en: 'Building Shop',
            es: 'Tienda de Edificios',
            fr: 'Magasin de Bâtiments',
            de: 'Gebäude-Shop'
        },
        text: {
            pt: 'Neste painel podes comprar infraestruturas como Painéis Solares e Turbinas Eólicas. Elas geram energia por ti!',
            en: 'In this panel you can buy infrastructures like Solar Panels and Wind Turbines. They generate energy for you!',
            es: '¡Compra edificios para automatizar la producción!',
            fr: 'Achète des bâtiments pour automatiser la production!',
            de: 'Kaufe Gebäude um die Produktion zu automatisieren!'
        },
        highlight: '.right-panel'
    },
    {
        id: 'hub',
        icon: '🏠',
        title: {
            pt: 'Hub Central Salfer',
            en: 'Salfer Central Hub',
            es: 'Hub Central Salfer',
            fr: 'Hub Central',
            de: 'Zentraler Hub'
        },
        text: {
            pt: 'O coração da tua operação. Melhora o Hub para aumentar globalmente a tua eficiência e elevar o teu prestígio.',
            en: 'The heart of your operation. Upgrade the Hub to globally increase efficiency and raise your prestige.',
            es: '¡El corazón de tu operação. Mejora el Hub!',
            fr: 'Le cœur de ton opération. Améliore le Hub!',
            de: 'Das Herz deiner Operation. Verbessere den Hub!'
        },
        highlight: '#mainHouseContainer'
    },
    {
        id: 'rank',
        icon: '🎖️',
        title: {
            pt: 'Carreira e XP',
            en: 'Career and Rank',
            es: 'Carrera y Rango',
            fr: 'Carrière et Rang',
            de: 'Karriere und Rang'
        },
        text: {
            pt: 'Ganha XP para subir de Rank. Ranks mais altos desbloqueiam tecnologias potentes como a Energia Nuclear!',
            en: 'Earn XP to level up your Rank. Higher ranks unlock powerful technologies like Nuclear Power!',
            es: '¡Gana XP para subir de Rango y desbloquear tecnología!',
            fr: 'Gagne de l\'XP pour monter de Rang et débloquer des technologies!',
            de: 'Verdiene XP um aufzusteigen und Technologien freizuschalten!'
        },
        highlight: '.rank-container'
    },
    {
        id: 'report',
        icon: '📸',
        title: {
            pt: 'Relatório Eco',
            en: 'Eco Report',
            es: 'Relatório Eco',
            fr: 'Rapport Eco',
            de: 'Eco-Bericht'
        },
        text: {
            pt: 'Tira uma "fotografia" do teu progresso! Gera um relatório detalhado do teu impacto ambiental positivo.',
            en: 'Take a "snapshot" of your progress! Generate a detailed report of your positive environmental impact.',
            es: '¡Gera un relatório de tu impacto ambiental!',
            fr: 'Génère un rapport de ton impact environnemental!',
            de: 'Erstelle einen Bericht über deine Umweltauswirkungen!'
        },
        highlight: '#reportBtn'
    },
    {
        id: 'achievements',
        icon: '🏅',
        title: {
            pt: 'Conquistas',
            en: 'Achievements',
            es: 'Logros',
            fr: 'Succès',
            de: 'Erfolge'
        },
        text: {
            pt: 'Consulta as tuas metas alcançadas. Cada conquista demonstra o teu crescimento como magnata sustentável.',
            en: 'Check your reached goals. Each achievement demonstrates your growth as a sustainable tycoon.',
            es: '¡Consulta tus logros y metas!',
            fr: 'Consulte tes succès et tes objectifs!',
            de: 'Sieh dir deine Erfolge und Ziele an!'
        },
        highlight: '#trophyBtn'
    },
    {
        id: 'missions',
        icon: '🎯',
        title: {
            pt: 'Missões Diárias',
            en: 'Daily Missions',
            es: 'Misiones Diarias',
            fr: 'Missions Quotidiennes',
            de: 'Tägliche Missionen'
        },
        text: {
            pt: 'Completa estes desafios diários para ganhares bónus extra, créditos e pontos de experiência rapidamente.',
            en: 'Complete these daily challenges to earn extra bonuses, credits, and experience points quickly.',
            es: '¡Completa desafios para bónus extra!',
            fr: 'Complète des défis pour des bonus!',
            de: 'Schließe Herausforderungen für Boni ab!'
        },
        highlight: '#dailyMissionsBtn'
    },
    {
        id: 'tech',
        icon: '🔬',
        title: {
            pt: 'Tech Tree',
            en: 'Tech Tree',
            es: 'Árbol Tecnológico',
            fr: 'Arbre Technologique',
            de: 'Technologiebaum'
        },
        text: {
            pt: 'Investe em pesquisa para melhorar o rendimento dos teus edifícios através da árvore tecnológica.',
            en: 'Invest in research to improve the performance of your buildings through the tech tree.',
            es: '¡Investiga para mejorar tu infraestrutura!',
            fr: 'Recherche pour améliorer ton infrastructure!',
            de: 'Erforsche Technologien um deine Infrastruktur zu verbessern!'
        },
        highlight: '#techTreeBtn'
    },
    {
        id: 'premium',
        icon: '💎',
        title: {
            pt: 'Loja Premium',
            en: 'Premium Shop',
            es: 'Tienda Premium',
            fr: 'Boutique Premium',
            de: 'Premium-Shop'
        },
        text: {
            pt: 'Queres turbinar o teu império? Aqui podes adquirir bónus permanentes e créditos especiais Salfer.',
            en: 'Want to boost your empire? Here you can acquire permanent bonuses and special Salfer credits.',
            es: '¡Bónus permanentes para acelerar tu progresso!',
            fr: 'Des bonus permanents pour accélérer ta progression!',
            de: 'Permanente Boni um deinen Fortschritt zu beschleunigen!'
        },
        highlight: '.premium-btn'
    },
    {
        id: 'ready',
        icon: '🚀',
        title: {
            pt: 'Missão Autorizada!',
            en: 'Mission Authorized!',
            es: '¡Misión Autorizada!',
            fr: 'Mission Autorisée!',
            de: 'Mission Autorisiert!'
        },
        text: {
            pt: 'Estás agora pronto para liderar a revolução sustentável. O planeta conta contigo, Eco-Tycoon!',
            en: 'You are now ready to lead the sustainable revolution. The planet is counting on you, Eco-Tycoon!',
            es: '¡Estás listo para liderar la revolução!',
            fr: 'Tu es prêt à mener la révolution!',
            de: 'Du bist bereit die Revolution anzuführen!'
        },
        highlight: null
    }
];

let tutorialStep = 0;
let tutorialActive = false;

function initTutorial() {
    const urlParams = new URLSearchParams(window.location.search);
    const forceTutorial = urlParams.get('tutorial') === 'force';
    const tutorialDone = localStorage.getItem('salfer_tutorial_v2_done');

    console.log('🌱 Tutorial Init - Done:', tutorialDone, 'Force:', forceTutorial);

    if (tutorialDone && !forceTutorial) return;

    tutorialActive = true;
    tutorialStep = 0;
    console.log('🌱 Starting Tutorial Step 0');
    showTutorialStep();
}

function showTutorialStep() {
    console.log('🌱 Showing Tutorial Step:', tutorialStep);
    const overlay = document.getElementById('tutorialOverlay');
    const card = document.getElementById('tutorialCard');
    const icon = document.getElementById('tutorialIcon');
    const title = document.getElementById('tutorialTitle');
    const text = document.getElementById('tutorialText');
    const progress = document.getElementById('tutorialProgress');
    const btn = document.getElementById('tutorialBtn');
    const prevBtn = document.getElementById('tutorialPrevBtn');
    const highlight = document.getElementById('tutorialHighlight');
    const pointer = document.getElementById('tutorialPointer');

    const step = TUTORIAL_STEPS[tutorialStep];
    const lang = window.currentLang || 'pt';

    icon.textContent = step.icon;
    title.textContent = step.title[lang] || step.title['en'];
    text.textContent = step.text[lang] || step.text['en'];

    // Update Progress Dots
    progress.innerHTML = '';
    TUTORIAL_STEPS.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'tutorial-dot' + (i < tutorialStep ? ' completed' : '') + (i === tutorialStep ? ' active' : '');
        progress.appendChild(dot);
    });

    // Buttons Text & Visibility
    const prevLabels = { pt: 'Anterior', en: 'Back', es: 'Anterior', fr: 'Précédent', de: 'Zurück' };
    const nextLabels = { pt: 'Próximo', en: 'Next', es: 'Siguiente', fr: 'Suivant', de: 'Weiter' };
    const startLabels = { pt: 'Começar!', en: 'Start!', es: '¡Empezar!', fr: 'Commencer!', de: 'Starten!' };

    btn.textContent = tutorialStep === TUTORIAL_STEPS.length - 1
        ? (startLabels[lang] || startLabels['en'])
        : (nextLabels[lang] || nextLabels['en']);

    if (tutorialStep > 0) {
        prevBtn.style.display = 'block';
        prevBtn.textContent = prevLabels[lang] || prevLabels['en'];
    } else {
        prevBtn.style.display = 'none';
    }

    if (step.highlight) {
        const target = document.querySelector(step.highlight);
        if (target) {
            const rect = target.getBoundingClientRect();
            highlight.style.display = 'block';
            highlight.style.left = (rect.left - 5) + 'px';
            highlight.style.top = (rect.top - 5) + 'px';
            highlight.style.width = (rect.width + 10) + 'px';
            highlight.style.height = (rect.height + 10) + 'px';

            pointer.style.display = 'flex';
            const isTopHalf = rect.top < window.innerHeight * 0.4;
            pointer.style.left = (rect.left + rect.width / 2 - 25) + 'px';

            if (isTopHalf) {
                pointer.style.top = (rect.bottom + 20) + 'px';
                pointer.className = 'tutorial-pointer pointer-down';
            } else {
                pointer.style.top = (rect.top - 65) + 'px';
                pointer.className = 'tutorial-pointer pointer-up';
            }
        } else {
            highlight.style.display = 'none';
            pointer.style.display = 'none';
        }
    } else {
        highlight.style.display = 'none';
        pointer.style.display = 'none';
    }

    overlay.classList.add('active');
}

function prevTutorialStep() {
    if (tutorialStep > 0) {
        tutorialStep--;
        showTutorialStep();
    }
}

function nextTutorialStep() {
    tutorialStep++;
    if (tutorialStep >= TUTORIAL_STEPS.length) {
        closeTutorial();
    } else {
        showTutorialStep();
    }
}

function closeTutorial() {
    const overlay = document.getElementById('tutorialOverlay');
    const highlight = document.getElementById('tutorialHighlight');
    const pointer = document.getElementById('tutorialPointer');

    overlay.classList.remove('active');
    highlight.style.display = 'none';
    pointer.style.display = 'none';

    tutorialActive = false;
    localStorage.setItem('salfer_tutorial_v2_done', 'true');
    console.log('🌱 Tutorial Closed and Flagged v2');
}

function skipTutorial() {
    closeTutorial();
}

// Event bindings
document.addEventListener('DOMContentLoaded', () => {
    const tutorialBtn = document.getElementById('tutorialBtn');
    const tutorialPrevBtn = document.getElementById('tutorialPrevBtn');
    const tutorialSkip = document.getElementById('tutorialSkip');

    if (tutorialBtn) {
        tutorialBtn.addEventListener('click', nextTutorialStep);
    }
    if (tutorialPrevBtn) {
        tutorialPrevBtn.addEventListener('click', prevTutorialStep);
    }
    if (tutorialSkip) {
        tutorialSkip.addEventListener('click', skipTutorial);
    }

    // Reposition highlight on resize
    window.addEventListener('resize', () => {
        if (tutorialActive) showTutorialStep();
    });
});

