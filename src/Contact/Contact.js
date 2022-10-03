import React from 'react';
// import './index.css';
import FloatingText from './FloatingText';
import Buttons from './Buttons'
import Footer from './Footer'

export default function Contact(){

    setTimeout(()=>{
        document.getElementById("contacts").classList.remove("hidden");
    }, 5000)

    return(
        <div id="contacts" class="hidden" style={{backgroundColor: "#0a0a0a"}}>
            <FloatingText />
            <Buttons />
            <Footer />
        </div>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
