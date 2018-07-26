import { combineReducers } from 'redux';
import { housesInfoReducer } from './housesInfoReducer';

const rootReducer = combineReducers({
  housesInfo: housesInfoReducer
});


export default rootReducer;
