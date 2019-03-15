import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div className="App">
             Hello React Redux
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
