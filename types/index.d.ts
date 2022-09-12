// Type definitions for cordova-plugin-windows-devices-geolocation

interface WinGeoLocation {
    getCurrentPosition: (success, error, options) => void;
}

declare var wingeolocation: WinGeoLocation;
