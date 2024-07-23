import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useStateContext } from '../contexts/ContextProvider';

const userTimeline = [
    { lat: 51.505, lng: -0.09, timestamp: '2024-07-21T08:00:00Z' },
    { lat: 51.51, lng: -0.1, timestamp: '2024-07-21T10:00:00Z' },
    { lat: 51.51, lng: -0.12, timestamp: '2024-07-21T12:00:00Z' },
    // Add more location data as needed
];
const markerIcon = new L.Icon({
    iconUrl: require("../assets/img/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

const UserTimelineMap = () => {
    const { currentColor } = useStateContext();
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const waypoints = userTimeline.map(location => L.latLng(location.lat, location.lng));

        L.Routing.control({
            waypoints: waypoints,
            createMarker: function (i, waypoint, n) {
                return L.marker(waypoint.latLng, { icon: markerIcon }).bindPopup(new Date(userTimeline[i].timestamp).toLocaleString());
            },
            routeWhileDragging: true,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            lineOptions: {
                styles: [{ color: currentColor, width: 50 }]
            }
        }).addTo(map);
    }, [map]);

    return null;
};

const TimeLine = () => (
    < MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }} icon={markerIcon}  >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <UserTimelineMap Icon={markerIcon} />
    </MapContainer >
)
export default TimeLine