import Main from "./pages/Main";
import Authorization from "./pages/Authorization";
import Personal from "./pages/Personal";
import Photo from "pages/Photo";
import Skills from "pages/Skills";
import About from "pages/About";
import Footer from "components/Footer";
import Header from "components/Header";
import Step from "components/Step";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "api/hooks";
import React, { FC } from "react";

const App: FC = () => {
    const { profile } = useAppSelector((state) => state.profileReducer);
    const { nowStep } = useAppSelector((state) => state.stepReducer);

    const isAuthorization = profile.email.length > 0;

    return (
        <div>
            <Header />
            <Step />
            <Routes>
                {isAuthorization ? (
                    <>
                        {nowStep != "/" && (
                            <>
                                <Route path='/personal' element={<Personal />} />
                                <Route path='/photo' element={<Photo />} />
                                <Route path='/skills' element={<Skills />} />
                                <Route path='/about' element={<About />} />
                            </>
                        )}
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
