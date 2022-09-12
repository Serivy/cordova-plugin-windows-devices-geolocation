const fs = require('fs');

const ver = "0.1.3";
function updatePath(path) {
    var j = JSON.parse(fs.readFileSync(path).toString());
    j.version = ver;
    fs.writeFileSync(path, JSON.stringify(j, null, 4));
}

function updateXml(path) {
    var xml = fs.readFileSync(path).toString();
    const regex = xml.replace(/version="([^\"]*)">/i, "version=\""+ ver +"\">");
    fs.writeFileSync(path, regex);
}

async function main() {
    let path = `${__dirname}\\..\\package.json`;
    updatePath(path);
    
    path = `${__dirname}\\..\\src\\electron\\package.json`;
    updatePath(path);

    path = `${__dirname}\\..\\plugin.xml`;
    updateXml(path);
}

main();