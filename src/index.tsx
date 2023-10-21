import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "styles/GlobalStyle";
import { persistor, store } from "./redux/store";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <BrowserRouter>
                            <GlobalStyle />
                            <App />
                        </BrowserRouter>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        </GoogleOAuthProvider>,
    );
}
