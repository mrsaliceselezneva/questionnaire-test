import Main from "./pages/Main";
import Form from "./pages/Form";
import Footer from "components/Footer";
import Header from "components/Header";
import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";

const App: FC = () => {
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
