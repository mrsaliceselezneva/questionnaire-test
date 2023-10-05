import Form from "./pages/Form";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import React, { FC } from "react";

const App: FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/form' element={<Form />} />
                <Route path='/*' element={<Main />} />
            </Routes>
        </div>
    );
};

export default App;
