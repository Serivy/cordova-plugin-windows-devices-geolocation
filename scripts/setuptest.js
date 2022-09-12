const fs = require('fs');
const childProcess = require('child_process');

var buildjson = {
    "electron": {
        "windows": {
            "package": [
                "dir"
            ]
        }
    }
}

async function main() {
    childProcess.execSync(`pwsh -c Copy-Item test-res\\* temptest\\www -Force`, {stdio:[0,1,2]});
    fs.writeFileSync("temptest/build.json", JSON.stringify(buildjson, null, 4));
}

main();