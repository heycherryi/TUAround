// **** กรณี Map ไม่ขึ้น **** //
describe('Test case for Marker', () => {
    it('should return null if the map is not displayed', () => {
  
      const cityMaxBounds = [
        [14.083551, 100.60797], 
        [14.066234,100.608141] ];
  
      const map = null;
  
      const result = (cityMaxBounds, map);
  
      expect(result).toBeNull();
    });
  
  
  })
  
  
  
  
  