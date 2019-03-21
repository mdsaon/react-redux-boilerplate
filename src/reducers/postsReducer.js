import { FETCH_POSTS_LIST } from "../actions/types";

const initialState = {
  posts: [
    { id: 1, name: "Test Post 1" },
    { id: 2, name: "Test Post 2" },
    { id: 3, name: "Test Post 3" },
    { id: 4, name: "Test Post 4" },
    { id: 5, name: "Test Post 5" },
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_LIST:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
