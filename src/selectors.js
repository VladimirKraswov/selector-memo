import { createSelector } from 'reselect';

export const getUsers = (state) => state.users;
export const getActiveUserId = (state) => state.activeUserId;

export const getActiveUser = createSelector(
  [getUsers, getActiveUserId],
  (users, activeUserId) => {
    console.log('Calculating active user...');
    return users.find(user => user.id === activeUserId);
  }
);