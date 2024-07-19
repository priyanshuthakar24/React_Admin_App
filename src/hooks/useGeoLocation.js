import React, { useEffect, useState } from 'react'

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        isLoading: false,
        coordinates: { lat: "", lng: "" }
    });


    const onSuccess = (location) => {
        setLocation({
            isLoading: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        })
    }

    const onError = (error) => {
        setLocation({
            isLoading: true,
            error,
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not Supported"
            },
            )
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location;
}

export default useGeoLocation