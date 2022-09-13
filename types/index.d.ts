// Type definitions for cordova-plugin-windows-devices-geolocation

interface WinGeoLocation {
    getCurrentPosition: (success, error, options) => void;

    watchPosition: (success, error, options) => number;
    
    clearWatch: (id) => void;
}

declare var wingeolocation: WinGeoLocation;
