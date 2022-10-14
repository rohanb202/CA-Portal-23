import './App.css';
// import Brownie from "./components/New_brownie/Brownie_point";
// import Nduty from "./components/New_Duty/Nduty"

// import Contact from './Contact/Contact';
// import Main from './components/main/main';
// import Login from './components/Login/Login';

import "aos/dist/aos.css";

// import { useEffect, useState } from 'react';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import LeaderBoard from './components/leaderboard/LeaderBoard';

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route> 
      <Route path="/leaderboard" element={<LeaderBoard />}></Route>
    </Routes>
      
    </>
  )
  
}

export default App;
