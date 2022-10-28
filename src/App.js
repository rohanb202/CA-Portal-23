import "./App.css";
// import Brownie from "./components/New_brownie/Brownie_point";
// import Nduty from "./components/New_Duty/Nduty"

// import Contact from './Contact/Contact';
import LoginMain from "./components/LoginMain/LoginMain";
import ForgotPass from "./components/ForgotPass/forgotPass";
// import Main from './components/main/main';

import "aos/dist/aos.css";

// import { useEffect, useState } from 'react';
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Profile from "./Pages/Profile/Profile";
import AmbassadorApplyForm from "./Pages/Ambassodor/Application/ApplicationForm";
import EventRegistration from "./components/EventsRegistration/EventRegistration";
// import Login from './components/Login/Login';

// import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/leaderboard" element={<RequireAuth><LeaderBoard /></RequireAuth>}></Route>
        <Route path="/ambassador-apply" element={<AmbassadorApplyForm />} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/eventRegistration" element={<EventRegistration/>} />
      </Routes>
    </>
  );
}

export default App;
