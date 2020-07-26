import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserContainer from "./components/UserContainer";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
