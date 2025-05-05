import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./class.css";
import MyHello from "./MyHello";
import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";
import books from "./books";
import ForList from "./ForList";
import ForNest from "./ForNest";
import ForFilter from "./ForFilter";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<ForFilter src={books} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
