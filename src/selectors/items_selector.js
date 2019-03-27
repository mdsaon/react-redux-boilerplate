import { createSelector } from 'reselect';


export const pagesSelector = state => state.getIn(["pages", "usersPages", "list"]);
console.log(pagesSelector)