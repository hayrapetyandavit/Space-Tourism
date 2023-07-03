import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LinkProvider from "./context/LinkProvider.tsx";
import App from "./App.tsx";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <LinkProvider>
        <App />
      </LinkProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
