import Main from "./pages/Main";
import Authorization from "./pages/Authorization";
import Personal from "./pages/Personal";
import Photo from "pages/Photo";
import Skills from "pages/Skills";
import Footer from "components/Footer";
import Header from "components/Header";
import Step from "components/Step";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { FC } from "react";

const App: FC = () => {
    const { profile } = useSelector((state: any) => state.profileReducer);

    const isAuthorization = profile.email.length > 0;

    return (
        <div>
            <Header />
            <Step />
            <Routes>
                {isAuthorization ? (
                    <>
                        <Route path='/personal' element={<Personal />} />
                        <Route path='/photo' element={<Photo />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/*' element={<Main />} />
                    </>
                ) : (
                    <Route path='/*' element={<Authorization />} />
                )}
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
