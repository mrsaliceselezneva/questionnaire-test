import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./pages/Form";
import Main from "./pages/Main";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/form' element={<Form />} />
                <Route exact path='/*' element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
