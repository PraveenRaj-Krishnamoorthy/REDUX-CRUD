import React from "react";
import ReactDom from "react-dom/client"
import { App } from "./App";
import "./index.css"
import { Provider } from "react-redux";
import { store } from "./redux/Store";

const rootElement = document.getElementById("root")
const root = ReactDom.createRoot(rootElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)