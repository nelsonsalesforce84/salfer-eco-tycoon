const fs = require('fs');
const path = require('path');

try {
    const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
    const copiaPath = path.join(__dirname, '../copia/index.html');
    let html = fs.readFileSync(copiaPath, 'utf8');

    // Check if the link exists
    const searchString = '    <link rel="stylesheet" href="styles.css">    <style>';
    const fallbackSearch = '    <link rel="stylesheet" href="styles.css">\r\n    <style>';
    const fallbackSearch2 = '    <link rel="stylesheet" href="styles.css">\n    <style>';

    let injected = false;

    if (html.includes(searchString)) {
        html = html.replace(searchString, '    <style>\n' + css + '\n');
        injected = true;
    } else if (html.includes(fallbackSearch)) {
        html = html.replace(fallbackSearch, '    <style>\n' + css + '\n');
        injected = true;
    } else if (html.includes(fallbackSearch2)) {
        html = html.replace(fallbackSearch2, '    <style>\n' + css + '\n');
        injected = true;
    } else {
        console.log("Could not find the target link string in copia/index.html to replace.");
    }

    if (injected) {
        fs.writeFileSync(copiaPath, html);
        console.log("Styles successfully injected back into copia/index.html!");
    }

} catch (e) {
    console.error("Error doing CSS injection:", e.message);
}
