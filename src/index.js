import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLGKEg1JTKI_tEbTLPRXG8BaK7EFEmDDo",
  authDomain: "luceromates-tardellafederico.firebaseapp.com",
  projectId: "luceromates-tardellafederico",
  storageBucket: "luceromates-tardellafederico.appspot.com",
  messagingSenderId: "370183304197",
  appId: "1:370183304197:web:a3f5deeb4e631f3284586c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
