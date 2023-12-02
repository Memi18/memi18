import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAeAnOUWYVWBzg0_9S7K59Bp3npoeA7CTw",
  authDomain: "debcomics-991cc.firebaseapp.com",
  projectId: "debcomics-991cc",
  storageBucket: "debcomics-991cc.appspot.com",
  messagingSenderId: "643341854289",
  appId: "1:643341854289:web:ce4080dae5286412a2ba70",
  measurementId: "G-9XFB0H8CDY"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

