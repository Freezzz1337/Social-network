import './app.css';
import Header from "../header";
import Footer from "../footer";
import Authorization from "../authorization";
import Registration from "../registration";
import {Route, Routes} from "react-router-dom"
import Start from "../start";
import {useAuth} from "../../context/auth-context";
import UserProfile from "../user-profile";
import PostCreate from "../post-create";

function App() {
    const {token}= useAuth();
    // const token = true; //todo : Temporary stub!!!!!!!!!!!!!!


    return (
        <>
            {token && <Header/>}

            <Routes>

                {token ? (
                    <>
                        <Route path="/userProfile" element={<UserProfile/>}/>
                        <Route path="/createPost" element={<PostCreate/>}/>
                    </>
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
