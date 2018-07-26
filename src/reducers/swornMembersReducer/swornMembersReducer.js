export const swornMembersReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SWORN_MEMBERS_TO_STORE':
    return action.swornMemberInfo;
  default:
    return state;
  }
};