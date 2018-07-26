export const housesInfoReducer = (state=[], action) => {
  switch (action.type) {
  case 'ADD_HOUSES_TO_STORE':
    return action.housesInfo;
  default:
    return state;
  }
};
