import './app.css';
import Header from "../header";
import Footer from "../footer";
import Authorization from "../authorization";
import Registration from "../registration";
import {Route, Routes} from "react-router-dom"
import Start from "../start";
import {useAuth} from "../../context/auth-context";

function App() {
    const {token}= useAuth();

    return (
        <>
            {token && <Header/>}

            <Routes>

                {token ? (
                    <Route path="/test" element={<Header/>}/>
                ) : (
                    <>
                        <Route path="/" element={<Start/>}/>
                        <Route path="/authorization" element={<Authorization/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </>
                )}

            </Routes>

            {token && <Footer/>}

        </>
    );

}

export default App;
