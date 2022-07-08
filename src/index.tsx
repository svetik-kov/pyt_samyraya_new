import State, {addPost, changeNewText, RootStateType, subscribe} from "./redux/State";
import {createRoot} from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const RenderTree = () => {
    debugger

    const container = document.getElementById('root') as any;
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App state={State} addPost={addPost} changeNewText={changeNewText}/>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

RenderTree()
subscribe(RenderTree)