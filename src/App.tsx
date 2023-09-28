import Form from "./pages/Form";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import * as React from "react";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/form' element={<Form />} />
                <Route path='/*' element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
