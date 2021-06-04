import React from 'react';
import "./Map.css";
import { Map as MapContainer, TileLayer} from "react-leaflet";
import { showDataOnMap } from "./util";

const Map = ({ countries, casesType, center, zoom }) => {
    return (
        <div className="map">
            <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            >
                <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"        
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                
                />
                { showDataOnMap(countries, casesType) }
            </MapContainer>
        </div>
    )
}

export default Map
