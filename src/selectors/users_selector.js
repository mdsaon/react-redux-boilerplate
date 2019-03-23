import { createSelector } from 'reselect';


export const usersSelector = state => state.users;

export const usersNameSelector = state =>state.users.name;

export const usersWithName = createSelector([usersSelector], users => {
    return users.filter(user => user.name.includes('Saidur'));
  });