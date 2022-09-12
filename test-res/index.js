document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    var done = document.createElement("div");
    done.innerText = "Ready";
    document.body.appendChild(done)

    var button = document.getElementById("getlocation");
    button.onclick = function() {
        wingeolocation.getCurrentPosition((position) => {
             /** @type {GeolocationPosition} */
            var pos = position;
            var text = document.getElementById("location");
            text.innerText = `lat: ${pos.coords.latitude}, long: ${pos.coords.longitude}`;
        }, (e) => {
            var text = document.getElementById("location");
            text.innerText = `Error occured.`;
        });
    }
}
