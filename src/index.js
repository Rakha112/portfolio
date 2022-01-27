import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  width: 0,
  heigth: 0,
  y: 0,
  x: 0,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "WIDTH") {
    return {
      ...state,
      width: action.payload,
    };
  }
  if (action.type === "HEIGTH") {
    return {
      ...state,
      heigth: action.payload,
    };
  }
  if (action.type === "Y") {
    return {
      ...state,
      y: action.payload,
    };
  }
  if (action.type === "X") {
    return {
      ...state,
      x: action.payload,
    };
  }
  return state;
};
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
