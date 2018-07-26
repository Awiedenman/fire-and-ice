import { addHousesToStore } from '../../actions';
import { mockHouseInfo } from '../../mockData/mockHouseInfo';
import { mapDispatchToProps } from '../../components/App/App';

describe('App', () => {
  test('should should call dispatch when addHousesToStore is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addHousesToStore(mockHouseInfo);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.addHousesToStore(mockHouseInfo);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

