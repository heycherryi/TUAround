const markerData = [
    { lat: 14.0712790, lon: 100.6017090 ,name: "หอสมุดป๋วย อึ๊งภากรณ์"},
    { lat: 14.0732220, lon: 100.6016780 ,name: "ตรงข้ามโรงกรีน"},
    { lat: 14.06748049943805, lon: 100.60584068418476 ,name: "คณะวิศวกรรมศาสตร์"},
    { lat: 14.072234299205956, lon: 100.60823757850223 ,name: "อาคารบรรยายรวม 4 (บร.4)"},
    { lat: 14.075580067130574, lon: 100.60159737296796 ,name: "สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)"},
    { lat: 14.0727120, lon: 100.6015510 ,name: "โรงกรีน"},
    { lat: 14.0675271, lon: 100.6048515 ,name: "JC"},
    { lat: 14.0674360, lon: 100.6047150 ,name: "ยิม6"},
    { lat: 14.0663870, lon: 100.6050020 ,name: "เชียงราก1"},
    { lat: 14.072283951051723, lon: 100.61182335572653 ,name: "อาคารเรียนและปฏิบัติการรวม(อาคารปิยชาติ 2)"},
    { lat: 14.073713878660206, lon: 100.61566808355656 ,name: "โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ"},
    { lat: 14.073713878660206, lon: 100.61566808355656 ,name: "อาคารบรรยายรวม 3 (บร.3)"},
    { lat: 14.07079638674725,  lon: 100.60451651078853 ,name: "อาคารเรียนรวมสังคมศาสตร์ 3 (SC3)"},
    { lat: 14.066057289381122, lon: 100.6005788640772 ,name: "ตรงข้าม TU DOME"},
    { lat: 14.072189979692334, lon: 100.60214426488974 ,name: "อาคารบรรยายรวม 1 (บร.1)"},
    { lat: 14.075479340863774, lon: 100.60158362308212 ,name: "ท่ารถตู้"},
    { lat: 14.067482402741447, lon: 100.60732376809244 ,name: "SIIT"},
    { lat: 14.068634182199508, lon: 100.60166325573678 ,name: "ลานพญานาค"},
    { lat: 14.0772640, lon: 100.5952860 ,name: "หอ B"},
    { lat: 14.0768349, lon: 100.5991224 ,name: "โรงเรียนสาธิตแห่งมหาวิทยาลัยธรรมศาสตร์"},
    { lat: 14.0752730, lon: 100.5967180 ,name: "ป้ายรถ C2"},
    { lat: 14.0743220, lon: 100.5967720 ,name: "ป้ายรถ C5"},
    { lat: 14.0764420, lon: 100.5963020 ,name: "Tops Markets"},
    { lat: 14.0761400, lon: 100.5984510 ,name: "ตลาดนัดอินเตอร์โซน"},
    { lat: 14.0711880, lon: 100.5977401 ,name: "หอพัก14ชั้น"},
    
    // เพิ่มตำแหน่งอื่น ๆ ตามต้องการ
  ];


const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([14.071896310770885, 100.6029928476175], 13);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Adding Marker


markerData.forEach(markData => {
    const marker = L.marker([markData.lat, markData.lon]).addTo(mymap);
    marker.bindPopup(`<h3>${markData.name || 'Marker'}</h3>`);
});


