import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import colors from "styles/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
`;

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
