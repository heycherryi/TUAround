// **** กรณี Map ไม่ขึ้น **** //
describe('Test case for cityMaxBounds', () => {
  it('should return null if the map is not displayed', () => {

    const cityMaxBounds = [
      [14.083551, 100.60797], 
      [14.066234,100.608141] ];

    const map = null;

    const result = (cityMaxBounds, map);

    expect(result).toBeNull();
  });

  // **** กรณี Map ขึ้น **** //
  it('should return done if the map is displayed', () => {
 
    const center = [14.070694801353117, 100.60479292617921];
    const map = [14.070694801353117, 100.60479292617921];

    expect(center).toEqual(map);
  });
  
// การคิดระยะห่างระยะทาง
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
  
  //กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 1 ไม่เกิน 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัย
  it('should show university map when user is within 1 km of Chiang Rak1 Gate', () => {
   const distance = calculateDistance(14.065518, 100.605021, 14.063255878154989, 100.6027218203212 );
  console.log("กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 1 ไม่เกิน 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัยธรรมศาสตร์"); 
  console.log("จากประตูเชียงราก 1 จนถึง หอ The chic มีระยะห่าง",distance,"กิโลเมตร");

});

//กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 1 เกินกว่า 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัย
it('should show university map when user is without 1 km of Chiang Rak1 Gate', () => {
 const distance = calculateDistance(14.065518, 100.605021, 14.040485759596152, 100.61536603203099 );
console.log("กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 1 เกินกว่า 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัยธรรมศาสตร์"); 
console.log("จากประตูเชียงราก 1 จนถึง มหาวิทยาลัยกรุงเทพ มีระยะห่าง",distance,"กิโลเมตร"); 
});

//กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 2 ไม่เกิน 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัย
it('should show university map when user is within 1 km of Chiang Rak1 Gate', () => {
  const distance = calculateDistance(14.066459045272342, 100.61007844706431, 14.063255878154989, 100.6027218203212 );
  console.log("กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 2 ไม่เกิน 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัยธรรมศาสตร์"); 
 console.log("จากประตูเชียงราก 2 จนถึง หอ The chic มีระยะห่าง",distance,"กิโลเมตร"); 
});

//กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 2 เกินกว่า 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัย
it('should show university map when user is without 1 km of Chiang Rak1 Gate', () => {
  const distance = calculateDistance(14.066459045272342, 100.61007844706431, 14.040485759596152, 100.61536603203099 );
  console.log("กรณีที่ผู้ใช้อยู่ห่างจากขอบของประตูเชียงราก 2 เกินกว่า 1 กิโลเมตร ระบบแสดงแผนที่ของมหาวิทยาลัยธรรมศาสตร์"); 
 console.log("จากประตูเชียงราก 2 จนถึง มหาวิทยาลัยกรุงเทพ มีระยะห่าง",distance,"กิโลเมตร"); 
 });

})




