import './App.css';
// import Brownie from "./components/New_brownie/Brownie_point";
// import Nduty from "./components/New_Duty/Nduty"

// import Contact from './Contact/Contact';
import Login1 from './components/Login1/Login1';
import ForgotPass from './components/ForgotPass/forgotPass';
// import Login from './components/Login/Login';
// import Main from './components/main/main';



import "aos/dist/aos.css";

// import { useEffect, useState } from 'react';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Profile from './Pages/Profile/Profile';
import AmbassadorApplyForm from './Pages/Ambassodor/Application/ApplicationForm';
// import Login from './components/Login/Login';
import LoginPage from './Pages/LoginPage';
import { AuthProvider } from './context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <>
    <ToastContainer />
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        <Route path='/ambassador-apply' element={<AmbassadorApplyForm />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login1' element={<Login1 />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
      </Routes>
    </AuthProvider>
    </>
  )
  

}

export default App;
