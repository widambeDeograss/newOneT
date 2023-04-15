import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./pages/Account/Navbar";
import App from "./App";
import { store } from "./api/store/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
