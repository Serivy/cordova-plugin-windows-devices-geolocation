// const childProcess = require('child_process');
// const fs = require('fs');
// const request = require('request');
// const package = require('../package.json');
// const fetchn = require('node-fetch');

// const src = `http://github.com/Serivy/cordova-plugin-windows-devices-geolocation/releases/download/0.0.0/win32-x64-97.node`;
// const targetLoc = `${__dirname}\\..\\bin\\binding.node`;

// async function download() {
//     try {
        
//         console.log(`downloading to ${targetLoc}`);
        
//         return fetch(src)
//           .then(x => x.arrayBuffer())
//           .then(x => writeFilePromise(targetLoc, Buffer.from(x)));

//         const res = await request(src, { timeout: 60000 }); // await fetch(url);
//         const files = fs.createWriteStream(targetLoc);
//         await new Promise((resolve, reject) => { res.body.pipe(files); res.body.on("error", reject); files.on("finish", resolve); });
//         // request(src, { timeout: 60000 }, function(err, response, buffer) {
//         // if (err) {
//         //       throw err;
//         //     } else if (!(response.statusCode >= 200 && response.statusCode < 300)) {
//         //       throw response.statusCode;
//         //     } else {
//         //       if (response.statusCode >= 200 && response.statusCode < 300) {
//         //         var res = new Promise((resolve, reject) => { fs.createWriteStream(targetLoc).on('error', reject).end(buffer, resolve); })
//         //         if (res.err) {
//         //             throw res.err;
//         //         }
//         //       }
//         //     }
//         //   });
//     } catch (e) {
//         throw e;
//     }
// }

// async function main() {
//     // Install if we have to.

//     if (!fs.existsSync(targetLoc)) {
//         if (!fs.existsSync(`bin`)) {
//             fs.mkdirSync(`bin`, {  });
//         }
//         await download();
//     }
// }

// main();