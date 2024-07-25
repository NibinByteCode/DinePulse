import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import App from "./App";
import { ToastContainer } from "react-toastify"; // for toast notification
import "react-toastify/dist/ReactToastify.css";
import NotificationProvider from "./components/pages/NotificationHandler";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
      <ToastContainer position="bottom-right" />
    </NotificationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
