import React, { useState, useEffect } from 'react';
const useCurrentLocation = () => {
    const [location, setLocation] = useState({
        isLoading: true,
        coordinates: { lat: "", lng: "" },
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
            return;
        }

        const handlePosition = (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({
                isLoading: false,
                coordinates: { lat: latitude, lng: longitude },
            });
        };

        const errorCallback = () => {
            setLocation((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
        };

        const watchId = navigator.geolocation.watchPosition(handlePosition, errorCallback);

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return location;
};

export default useCurrentLocation;