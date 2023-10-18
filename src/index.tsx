import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import GlobalStyle from "styles/GlobalStyle";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
}
