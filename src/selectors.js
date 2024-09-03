// selectors.js
export const getUsers = (state) => state.users;
export const getActiveUserId = (state) => state.activeUserId;

export const getActiveUser = (state) => {
  console.log('Calculating active user...');
  return state.users.find(user => user.id === state.activeUserId);
};