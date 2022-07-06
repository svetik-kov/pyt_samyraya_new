import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from "./redux/State";

/*let dialogsData = [
    {id: 1, name: 'Nina'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Tanya'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Zlata'},
    {id: 6, name: 'Ira'},
    {id: 7, name: 'Marina'},
    {id: 8, name: 'Yulya'},
]
let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hi!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo!'},
]

let postsData = [
    {id: 1,message: 'Hi, how are you?',  likesCount: 14},
    {id: 2, message: 'It is my first post!!!', likesCount: 30},
    {id: 3, message: 'It is my second post!!!', likesCount: 130},
]*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App state={State} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
