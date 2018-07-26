import { combineReducers } from 'redux';
import { housesInfoReducer } from './houseInfoReducer/housesInfoReducer';

const rootReducer = combineReducers({
  housesInfo: housesInfoReducer
});


export default rootReducer;
