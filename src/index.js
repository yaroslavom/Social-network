import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  Date for Posts
let postsData = [
  {id: 1, message: "Hi, how are you?", likesCount: 2},
  {id: 2, message: "It's my new post", likesCount: 17},
];

//  Date for Dialogs
let messagesData = [
  { message: "Where did you work last time?", id: 1 },
  { message: "I have a question", id: 2 },
  { message: "Hi!", id: 3 },
];
let dialogsData = [
  { name: "Oleg", id: 1 },
  { name: "Andrey", id: 2 },
  { name: "Nikita", id: 3 },
  { name: "Olesya", id: 4 },
  { name: "Yana", id: 5 },
  { name: "Dima", id: 6 },
  { name: "Egor", id: 7 },
  { name: "Joshua", id: 8 },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
