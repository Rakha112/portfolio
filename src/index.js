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
  homeStatus: null,
  navKiri: false,
  navKanan: false,
  navMobileAktif: false,
  fullstack: false,
  fotografer: false,
  footer: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "HEIGH":
      return {
        ...state,
        heigth: action.payload,
      };
    case "Y":
      return {
        ...state,
        y: action.payload,
      };
    case "X":
      return {
        ...state,
        x: action.payload,
      };
    case "HOMESTATUS":
      return {
        ...state,
        homeStatus: action.payload,
      };
    case "NAVKIRI":
      return {
        ...state,
        navKiri: action.payload,
      };
    case "NAVKANAN":
      return {
        ...state,
        navKanan: action.payload,
      };
    case "NAVMOBILEAKTIF":
      return {
        ...state,
        navMobileAktif: action.payload,
      };
    case "FOTOGRAFER":
      return {
        ...state,
        fotografer: action.payload,
      };
    case "FULLSTACK":
      return {
        ...state,
        fullstack: action.payload,
      };
    case "FOOTER":
      return {
        ...state,
        footer: action.payload,
      };
    default:
      return state;
  }
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
