import React,{useState} from "react";
import Main from "./main/main";
import {lazy,Suspense} from "react";

const Brownie_point = lazy(() => import('./New_brownie/Brownie_point'));
const Contact = lazy(() => import('../Contact/Contact'));


export default function Home (){

    const [animeOver, setAnimeOver] = useState(0);

    return(
      <Main>
        <Suspense fallback={<div style={{color:"#F74061",fontSize:"2rem",display:"flex",justifyContent:"center",padding:"2rem"}}>Loading...</div>}>
        <Brownie_point/>
        </Suspense>
        <Suspense fallback={<div style={{color:"#F74061",fontSize:"2rem",display:"flex",justifyContent:"center",padding:"2rem"}}>Loading...</div>}>
        <Contact />
        </Suspense>
        
        
      </Main>
    );
}