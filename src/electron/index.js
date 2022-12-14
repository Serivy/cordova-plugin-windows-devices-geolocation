const { Geolocator } = require('./nodert')

module.exports = {
    getCurrentPosition: async (options) => {
        const locator = new Geolocator()
        const timeout = options?.timeout ?? 60000;
        const maximumAge = options?.maximumAge ?? 0;

        if (options.desiredAccuracy) {
            locator.desiredAccuracy = options.desiredAccuracy;
        }

        if (options.desiredAccuracyInMeters) {
            locator.desiredAccuracyInMeters = options.desiredAccuracyInMeters;
        }

        // Option that comes from web api options.
        if (options.enableHighAccuracy) {
            locator.desiredAccuracy = 1;
            locator.desiredAccuracyInMeters = 1;
        }

        // https://docs.microsoft.com/en-us/uwp/api/windows.devices.geolocation.geolocator.getgeopositionasync?view=winrt-22621
        var result = await new Promise((resolve, reject) => locator.getGeopositionAsync(maximumAge, timeout, (error, result) => { if (error) { reject(error); } else { resolve(result); } }));
        
        // Result is https://docs.microsoft.com/en-us/uwp/api/windows.devices.geolocation.geoposition?view=winrt-22621
        const { coordinate } = result
        var obj = {
            accuracy: coordinate.accuracy,
            // altitude: coordinate.altitude,
            altitudeAccuracy: coordinate.altitudeAccuracy,
            heading: coordinate.heading,
            IsRemoteSource: coordinate.accuracy,
            // latitude: coordinate.latitude,
            // longitude: coordinate.longitude,

            altitude: coordinate.point.position.altitude,
            latitude: coordinate.point.position.latitude,
            longitude: coordinate.point.position.longitude,

            point: {
                position: {
                    altitude: coordinate.point.position.altitude,
                    latitude: coordinate.point.position.latitude,
                    longitude: coordinate.point.position.longitude
                }
            },
            positionSource: coordinate.positionSource,
            // positionSourceTimestamp: coordinate.positionSourceTimestamp,
            // satelliteData: coordinate.satelliteData,
            speed: coordinate.speed,
            timestamp: coordinate.timestamp
        }

        return {
            coords: {
                latitude: obj.latitude,
                longitude: obj.longitude,
                altitude: obj.altitude,
                accuracy: obj.accuracy, 
                altitudeAccuracy: obj.altitudeAccuracy,
                heading: obj.heading,
                speed: obj.speed
            },
            timesamp: obj.timestamp
        }
    }
};
