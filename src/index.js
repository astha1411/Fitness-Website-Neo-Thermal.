import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import plankvideo from "./asset/plank.mp4";
import pushupvideo from "./asset/pushup.mp4";
import squatsvideo from "./asset/squats.mp4";
import FirstPage from "./Landing";
import Home from "./Home";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Links from "./App.js";

ReactDOM.render(
  <React.StrictMode>
    {/* <Home vid={squatsvideo} /> */}

    <BrowserRouter>
      <Links />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
