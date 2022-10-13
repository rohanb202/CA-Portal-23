import React from 'react';
// import './index.css';
import FloatingText from './FloatingText';
import Buttons from './Buttons'
import Footer from './Footer'
import Info from "./Info"

export default function Contact(){

    return(
        <div id="contacts" style={{backgroundColor: "#FFF5E4"}}>
            <FloatingText />
            <Info />
            <Buttons />
            <Footer />
        </div>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
