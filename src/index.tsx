import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EmployeeContextProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeContextProvider>
        <App />
      </EmployeeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
