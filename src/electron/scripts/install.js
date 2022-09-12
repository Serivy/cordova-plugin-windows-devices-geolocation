const childProcess = require('child_process');
const fs = require('fs');
const package = require('../package.json');

async function main() {
    // Install if we have to.
    console.log(package);
    childProcess.execSync(`npm install @nodert-win10-rs3/windows.devices.geolocation`, {stdio:[0,1,2]});
}

main();