// CustomMarkers.js

import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';// แทน path-to-marker-icon.png ด้วยที่อยู่ที่ถูกต้อง

const CustomMarkers = ({ markers }) => {
  return (
    <>
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={new L.Icon({ iconUrl: markerIcon, iconSize: [32, 32] })}>
          <Popup>{marker.popupContent}</Popup>
        </Marker>
      ))}
    </>
  );
};

export default CustomMarkers;
