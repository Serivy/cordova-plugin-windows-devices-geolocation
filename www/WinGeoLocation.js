
var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var exec = require('cordova/exec');
var cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

const defaultWatchTimer = 5000;

/**
 * When this file changes, you need to run npm run reinstallplugin as the sym link doesnt update the platform/www files.
 */
class WinGeoLocation {
    constructor() {
        channel.onCordovaReady.subscribe(function () {
            channel.onCordovaInfoReady.fire();
        });
    }

    /**
     * 
     * @param {*} success When complete the {GeolocationPosition} of the location.
     * @param {*} error And error.
     * @param {*} options Options https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
     * @returns Not much.
     */
    getCurrentPosition(success, error, options) {
        argscheck.checkArgs('fF', 'WinGeoLocation.getCurrentPosition', arguments);
        exec((pos) => { success(pos); }, error, 'WinGeoLocation', 'getCurrentPosition', [options]);
    }
    
    /**
     * 
     * @param {*} success Success callback.
     * @param {*} error Error callback.
     * @param {*} options Any options.
     * @returns The id for clearing the watch.
     */
    watchPosition(success, error, options) {
        argscheck.checkArgs('fF', 'WinGeoLocation.watchPosition', arguments);

        this.getCurrentPosition(success, error, options);
        var id = setInterval(() => {
            this.getCurrentPosition(success, error, options);
        }, defaultWatchTimer);

        return id;
    }

    clearWatch(id) {
        clearInterval(id);
    }
}

module.exports = new WinGeoLocation();

