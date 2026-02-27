const fs = require('fs');
const path = require('path');

try {
    const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    
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
        console.log("Could not find the target link string in index.html to replace.");
    }

    if (injected) {
        fs.writeFileSync(path.join(__dirname, 'index.html'), html);
        console.log("Styles successfully injected back into index.html!");
    }

} catch (e) {
    console.error("Error doing CSS injection:", e.message);
}
