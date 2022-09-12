
var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var exec = require('cordova/exec');
var cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

function WinGeoLocationb () {
    // this.available = false;
    // this.platform = null;
    // this.version = null;
    // this.uuid = null;
    // this.cordova = null;
    // this.model = null;
    // this.manufacturer = null;
    // this.isVirtual = null;
    // this.serial = null;
    // this.isiOSAppOnMac = null;

    // var me = this;

    // channel.onCordovaReady.subscribe(function () {
    //     me.getInfo(
    //         function (info) {
    //             // ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
    //             // TODO: CB-5105 native implementations should not return info.cordova
    //             var buildLabel = cordova.version;
    //             me.available = true;
    //             me.platform = info.platform;
    //             me.version = info.version;
    //             me.uuid = info.uuid;
    //             me.cordova = buildLabel;
    //             me.model = info.model;
    //             me.isVirtual = info.isVirtual;
    //             // isiOSAppOnMac is iOS specific. If defined, it will be appended.
    //             if (info.isiOSAppOnMac !== undefined) {
    //                 me.isiOSAppOnMac = info.isiOSAppOnMac;
    //             }
    //             me.manufacturer = info.manufacturer || 'unknown';
    //             me.serial = info.serial || 'unknown';

    //             // SDK Version is Android specific. If defined, it will be appended.
    //             if (info.sdkVersion !== undefined) {
    //                 me.sdkVersion = info.sdkVersion;
    //             }

    //             channel.onCordovaInfoReady.fire();
    //         },
    //         function (e) {
    //             me.available = false;
    //             console.error('[ERROR] Error initializing cordova-plugin-windows-devices-geolocation: ' + e);
    //         }
    //     );
    // });
}

// /**
//  * Get device info
//  *
//  * @param {Function} successCallback The function to call when the heading data is available
//  * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
//  */
// Device.prototype.getInfo = function (successCallback, errorCallback) {
//     argscheck.checkArgs('fF', 'Device.getInfo', arguments);
//     exec(successCallback, errorCallback, 'Device', 'getDeviceInfo', []);
// };

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
        exec((pos) => { success(pos); }, error, 'WinGeoLocation', 'getCurrentPosition', []);
    }
}

module.exports = new WinGeoLocation();

