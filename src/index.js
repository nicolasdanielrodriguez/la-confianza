import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5l_fr8FSdqaH82YzDxqdwojEU7bNGkGk",
  authDomain: "la-confianza123.firebaseapp.com",
  projectId: "la-confianza123",
  storageBucket: "la-confianza123.appspot.com",
  messagingSenderId: "1054826820822",
  appId: "1:1054826820822:web:e1725db5d3dcb3b75dc577"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
