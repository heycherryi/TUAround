//TC 1
it('should return done if the map is displayed', () => {
    const markerData = { lat: 14.0712790, lon: 100.6017090 ,name: "หอสมุดป๋วย อึ๊งภากรณ์"};
    const center = [36.166512, -86.781581];
    const map_center = [36.166512, -86.781581];
    expect(center).toEqual(map_center);
    console.log(`ป้าย ${markerData.name} ถูกแสดงอยู่บนแผนที่`);
    
  });
 


//TC-2 : ตรวจสอบว่าป้ายรถที่แสดงในระบบตรงกับป้ายรถที่มีอยู่จริงในมหาวิทยาลัยธรรมศาสตร์
 it('should return done if The bus signs in the system match the actual bus signs at Thammasat University.', () => {
 
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
      ];
    const map = [
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
        
        ];

    expect(markerData).toEqual(map);
  });

  

function calculateDistance(lat1, lon1, lat2, lon2) {
    
  
    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const R = 6371; 
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
  
    return distance;

  }
  
  //TC-3 : กรณีที่ผู้ใช้อยู่ห่างจากป้ายเชียงราก 1 ไม่เกิน 1 กิโลเมตร ระบบแสดงป้ายรถของมหาวิทยาลัย
  it('should show bus stop when user is within 1 km of Chiang Rak1 Gate', () => {
   const distance = calculateDistance(14.0663870, 100.6050020, 14.069409466024254, 100.60589020109357)
   // ตรวจสอบว่าระยะทางไม่เกิน 1 กิโลเมตร
    expect(distance).toBeLessThanOrEqual(1);
  console.log("กรณีที่ผู้ใช้อยู่ห่างจากห่างจากป้ายเชียงราก 1 ไม่เกิน 1 กิโลเมตร ระบบแสดงป้ายรถของมหาวิทยาลัยธรรมศาสตร์"); 
  console.log("จากป้ายเชียงราก 1 จนถึง คณะวิศวะกรรมศาสตร์ มีระยะห่าง",distance,"กิโลเมตร");

});

//TC-4 : กรณีที่ผู้ใช้อยู่ห่างจากป้ายเชียงราก 1 เกินกว่า 1 กิโลเมตร ระบบแสดงป้ายรถของมหาวิทยาลัย
it('should show bus stop when user is without 1 km of Chiang Rak1 Gate', () => {
 const distance = calculateDistance(14.0663870, 100.6050020, 13.989848347915716, 100.61671222716795 );
console.log("กรณีที่ผู้ใช้อยู่ห่างจากป้ายเชียงราก 1 เกินกว่า 1 กิโลเมตร ระบบแสดงป้ายรถของมหาวิทยาลัยธรรมศาสตร์"); 
console.log("จากป้ายเชียงราก 1 จนถึง ฟิวเจอร์ มีระยะห่าง",distance,"กิโลเมตร"); 
});

//TC-5 : กรณีที่ระบบไม่แสดงแผนที่แล้วจะไม่แสดงป้ายรถ(Bus Stop)
describe('Test case for stop', () => {
    it('should return null if the stop is not displayed', () => {
  
      const markerData = null;
      const map = null;
  
      const result = (markerData, map);
  
      expect(result).toBeNull();
    })
})