import * as actions from './index';
import { mockHouseInfo } from '../mockData/mockHouseInfo';

describe('Actions', () => {
  test('should haver a type of ADD_HOUSES_TO_STORE', () => {
    const mockPayload = mockHouseInfo;
    const expectedAction = {
      type: 'ADD_HOUSES_TO_STORE',
      mockPayload
    };
    const result = actions.addHousesToStore(mockHouseInfo);

    expect(result).toEqual(expectedAction);
  });
  
});
