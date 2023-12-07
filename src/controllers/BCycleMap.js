// BCycleMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const bcycleStations = [
  {
    name: 'Commerce & 2nd Ave N',
    lat: 14.07252088539769,
    lon: 100.60239319778908,
    is_returning: 1,
    is_renting: 1,
    is_installed: 1,
    num_docks_available: 7,
    num_bikes_available: 8,
    last_reported: 1658600403,
    num_bikes_available_types: { electric: 8, smart: 0, classic: 0 },
    station_id: 'bcycle_nashville_2162',
  },
  {
    name: 'Church St between 4th & 5th Ave N',
    lat: 14.07208379728031,
    lon: 100.60094480499288,
    is_returning: 1,
    is_renting: 1,
    is_installed: 1,
    num_docks_available: 2,
    num_bikes_available: 7,
    last_reported: 1658600403,
    num_bikes_available_types: { electric: 7, smart: 0, classic: 0 },
    station_id: 'bcycle_nashville_2165',
  },
  // เพิ่มสถานีเพิ่มเติมตามต้องการ
];

function BCycleMap() {
  return (
    <MapContainer center={[14.0725, 100.601]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {bcycleStations.map((station) => (
        <Marker key={station.name} position={[station.lat, station.lon]}>
          <Popup>
            <div>
              <h3>{station.name}</h3>
              <p>Latitude: {station.lat}</p>
              <p>Longitude: {station.lon}</p>
              {/* เพิ่มข้อมูลเพิ่มเติมตามต้องการ */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BCycleMap;
