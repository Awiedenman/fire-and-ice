import { mapStateToProps } from '../CardContainer/CardContainer';
import { mockHouseInfo } from '../../mockData/mockHouseInfo';

describe('CardContainer', () => {
  describe('mapStateToProps', () => {
    test('should return an object with the houses array', () => {
      const mockState = {
        housesInfo: mockHouseInfo,
        testinfo: 'this is a test to maske sure we are only grabbing the part of state we want'
      };

      const expected = { 
        housesInfo: mockHouseInfo
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });  
  });
  
  
});

