import { useState, useEffect } from 'react';

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

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    isLoading: false,
                    coordinates: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                });
            },
            () => {
                setLocation((prevState) => ({
                    ...prevState,
                    isLoading: false,
                }));
            }
        );
    }, []);

    return location;
};

export default useCurrentLocation;
