// import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Citydata } from '../data/dummy';
import useCurrentLocation from '../hooks/useCurrentLocation';
import Button from './Button';

import { MdMyLocation } from "react-icons/md";

// import { CiLocationOn } from "react-icons/ci";
import { useStateContext } from '../contexts/ContextProvider';

// get currentlocation button defenation 
const CurrentLocationButton = ({ coordinates, zoomLevel }) => {
    const map = useMap();
    const { currentColor } = useStateContext();
    const handleClick = () => {
        map.setView([coordinates.lat, coordinates.lng], zoomLevel, {
            animate: true,
            duration: 3,
        });
    };

    return <button button onClick={handleClick} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }
    }> <Button icon={<MdMyLocation />} bgColor={currentColor} borderRadius='50%' color='white' 
    size='3xl' /></button >
};

// marker icon ------
const markerIcon = new L.Icon({
    iconUrl: require("../assets/img/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});

// main function -----
export default function LeafletContainer() {
    const { isLoading, coordinates } = useCurrentLocation();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} icon={markerIcon}>
                <TileLayer attribution='serpent cs' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={[coordinates.lat, coordinates.lng]} icon={markerIcon} >
                    <Popup>
                        <b>
                            ME,Pinku
                        </b>
                    </Popup>
                </Marker>

                {/* <Marker position={centerl} icon={markerIcon}></Marker> */}
                {Citydata.map((city, idx) => (
                    <Marker
                        position={[city.lat, city.lng]}
                        icon={markerIcon}
                        key={idx}
                    >
                        <Popup>
                            <b>
                                {city.city}, {city.country}
                            </b>
                        </Popup>
                    </Marker>
                ))}
                {/* <Marker position={[23.2030208, 72.6335488]}></Marker> */}
                <CurrentLocationButton coordinates={coordinates} zoomLevel={14} />
            </MapContainer>
        </div>

    )
}