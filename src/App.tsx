import Main from "./pages/Main";
import Personal from "./pages/Personal";
import Photo from "pages/Photo";
import Skills from "pages/Skills";
import About from "pages/About";
import Footer from "components/Footer";
import Header from "components/Header";
import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";

const App: FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/personal' element={<Personal />} />
                <Route path='/photo' element={<Photo />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
