import { housesInfoReducer } from './housesInfoReducer';
import * as actions from '../../actions';
import { mockHouseInfo } from '../../mockData/mockHouseInfo';

describe('houseInfoReducer', () => {
  test('should return the inital state if the action.type is not matched', () => {
    const expected = [];
    const result = housesInfoReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  test('should return state with the correct hosue information', () => {
    const expected = mockHouseInfo;
    const result =   housesInfoReducer([], actions.addHousesToStore(mockHouseInfo));

    expect(result).toEqual(expected);
  });
});
