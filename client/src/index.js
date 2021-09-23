import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// we are renaming BrowserRoute to Router
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import AuthProvider from "./providers/AuthProvider";
import { initMiddleware } from 'devise-axios';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <Router>
    <App />
    </Router>
  </AuthProvider>,  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
