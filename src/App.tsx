import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/State";

type AppPropsType = {
    state:RootStateType
}

const App = ( props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs messagePage={props.state.MessagePage} profilePage={props.state.ProfilePage} />}/>
                        <Route path="/profile/*" element={<Profile postPage={props.state.ProfilePage}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
