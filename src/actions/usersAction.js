import { FETCH_USER_LIST } from "./types";

export const getUsers = () => {
  return {
    type: FETCH_USER_LIST
  };
};
