// App.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import { markersData } from './TUMarkers'; // นำเข้าข้อมูลจาก markers.js

const MyMap = () => {
  useEffect(() => {
    const mymap = L.map('mapid').setView([14.073711460493374, 100.60274741498985], 13);

    // เพิ่ม Tile Layer หรือแผนที่พื้นหลังตามต้องการ
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);

    // ใช้ลูปสร้าง Marker จากข้อมูลใน markersData
    markersData.forEach(markerInfo => {
      const marker = L.marker([markerInfo.lat, markerInfo.lon]).addTo(mymap);
    });
  }, []); // ใน useEffect จะทำงานเมื่อคอมโพเนนต์ถูก render เท่านั้น

  return (
    <div id="mapid" style={{ height: '400px' }}></div>
  );
};

export default MyMap;

