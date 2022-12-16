import React from 'react';
// import './index.css';
import FloatingText from './FloatingText';
// import Buttons from './Buttons'
import Footer from './Footer'
// import Info from "./Info"
import {lazy,Suspense} from "react";
const Info = lazy(() => import('./Info'));

export default function Contact(){

    return(
        <div id="contacts" style={{backgroundColor: "#F6F5E9"}}>
            <FloatingText />
            <Suspense fallback={<div style={{color:"#F74061",fontSize:"2rem",display:"flex",justifyContent:"center",padding:"2rem"}}>Loading...</div>}>
             <Info />
            </Suspense>
            {/* <Buttons /> */}
            <Footer />
        </div>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
