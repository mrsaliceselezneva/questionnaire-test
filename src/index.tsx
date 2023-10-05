import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as React from "react";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
);
