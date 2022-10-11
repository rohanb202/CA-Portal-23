import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Contact from './Contact/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";
// import Login from './components/navbar/Login/Login'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>
// );


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      </Routes>
  </BrowserRouter>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
