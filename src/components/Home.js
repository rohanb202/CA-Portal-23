import React,{useState} from "react";

import Contact from "../Contact/Contact";
// import Contact from './Contact/Contact';
import Main from "./main/main";
// import Main from './components/main/main';
import Brownie_point from "./New_brownie/Brownie_point";
// import Brownie from "./components/New_brownie/Brownie_point";
// import Nduty from "./New_Duty/Nduty";
// import Nduty from "./components/New_Duty/Nduty"

export default function Home (){

    const [animeOver, setAnimeOver] = useState(0);

    return(
      <Main>
        <Brownie_point/>
        <Contact />
      </Main>
    );
}