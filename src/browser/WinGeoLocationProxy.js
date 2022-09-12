var browser = require('cordova/platform');

module.exports = {
    getCurrentPosition: function (success, error) {
        setTimeout(function () {
            success({
                coords: {
                    latitude: 0,
                    longitude: 0,
                    altitude: 0,
                    accuracy: 0, 
                    altitudeAccuracy: 0,
                    heading: 0,
                    speed: 0
                },
                timesamp: new Date()
            });
        }, 0);
    }
};

require('cordova/exec/proxy').add('WinGeoLocation', module.exports);
