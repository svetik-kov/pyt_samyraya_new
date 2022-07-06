import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import s from "./components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

type AppPropsType = {
    dialogs: Array<DialogsDataType>
    messages:Array<MessageDataType>
    posts: Array<postsDataProps>
}
export type DialogsDataType = {
    id: number,
    name: string
}
export type MessageDataType = {
    id: number,
    message: string
}
export type postsDataProps = {
    id: number
    message: string
    likesCount: number
}
const App = ( props:AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                        <Route path="/profile/*" element={<Profile posts={props.posts}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
