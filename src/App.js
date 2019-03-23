import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
import Hook from "./components/Hook";
import Users from "./components/users";
import UserList from "./components/users/UserList";
import UserListsWithReselect from "./components/users/UserListsWithReselect";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserListsWithReselect />
          <Users />
          <UserList />
          <Posts />
          <Hook />
        </div>
      </Provider>
    );
  }
}

export default App;
