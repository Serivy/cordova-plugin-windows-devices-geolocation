const fs = require('fs');
const childProcess = require('child_process');
const nodertbuilder = require('./nodertbuilder/package.json');

async function main() {
    var package = fs.readFileSync(__dirname + "/nodertbuilder/package.json").toString();
    var j = nodertbuilder;

    var electronVersions = ["30.0.3"];
    for (var version of electronVersions) {
        j.devDependencies["electron"] = version;
        fs.writeFileSync("nodertbuilder/package.json", JSON.stringify(j, null, 4));
        childProcess.execSync(`npm i`, {stdio:[0,1,2], cwd: `${__dirname}/nodertbuilder`});
        childProcess.execSync(`npx electron-rebuild`, {stdio:[0,1,2], cwd: `${__dirname}/nodertbuilder`});
        const binRoot = `${__dirname}\\nodertbuilder\\node_modules\\@nodert-win10-rs3\\windows.devices.geolocation\\bin`;
        var binVersions = fs.readdirSync(binRoot);
        for (var ver of binVersions) {
            const file = `${binRoot}\\${ver}\\windows.devices.geolocation.node`;
            fs.copyFileSync(file, `${__dirname}\\${ver}.node`);
        }


    }

    // electron@14.2.9 
}

main();