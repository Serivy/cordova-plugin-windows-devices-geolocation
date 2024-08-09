const fs = require('fs');
const childProcess = require('child_process');

var buildjson = { "electron": { "windows": { "package": ["dir"] } } };

async function main() {
    childProcess.execSync(`pwsh -c Copy-Item test-res\\* temptest\\www -Force`, {stdio:[0,1,2]});
    fs.writeFileSync("temptest/build.json", JSON.stringify(buildjson, null, 4));

    const package = JSON.parse(fs.readFileSync("temptest/package.json"));
    package.overrides = {
        "cordova-electron": {
            "electron": "30.0.3"
        }
    };
    fs.writeFileSync("temptest/package.json", JSON.stringify(package, null, 4));

    childProcess.execSync(`npm install`, {stdio:[0,1,2], cwd: `${__dirname}/../temptest`});
}

main();