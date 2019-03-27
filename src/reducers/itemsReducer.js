import { FETCH_ITEMS_LIST } from "../actions/types";
import { fromJS } from "immutable";
const initialState = fromJS({
  pages: {
    usersPage: {
      loading: false,
      isFetched: false,
      list: [
        { name: "Mobile", description: "Mobile Description" },
        { name: "Laptop", description: "Laptop Description" }
      ]
    },
    companiesPage: {
      loading: false,
      isFetched: false,
      list: []
    }
  }
});
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_LIST:
      return state.getIn(["pages"]);
    default:
      return state;
  }
}
