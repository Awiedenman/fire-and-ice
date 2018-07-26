import { combineReducers } from 'redux';
import { housesInfoReducer } from './houseInfoReducer/housesInfoReducer';
import { swornMembersReducer } from './swornMembersReducer/swornMembersReducer';

const rootReducer = combineReducers({
  housesInfo: housesInfoReducer,
  swornMembers: swornMembersReducer
});


export default rootReducer;
