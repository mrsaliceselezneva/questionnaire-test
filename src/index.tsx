import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as React from "react";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement as HTMLElement)!;

root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <App />,
    </BrowserRouter>,
    // </React.StrictMode>,
);
