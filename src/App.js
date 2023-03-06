import "./App.css";
import LoginMain from "./components/LoginMain/LoginMain";
import ForgotPass from "./components/ForgotPass/forgotPass";
import Main from "./components/KY Main/main";
import Payment from "./Pages/Payment/Payment";
import PreEvents from "./components/Pre_Events/preevents";
import "aos/dist/aos.css";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Profile from "./Pages/Profile/Profile";
import AmbassadorApplyForm from "./Pages/Ambassodor/Application/ApplicationForm";
// import Login from './components/Login/Login';

// import Login from './components/Login/Login';
import Team from "./components/team/team";
// import { AuthProvider } from './context/AuthContext'
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./utils/RequireAuth";
import GoogleMiddleware from "./Pages/GoogleLogin/GoogleMiddleware";
import CompleteProfile from "./Pages/CompleteProfile/CompleteProfile";
import TestPage from "./Pages/TestPage";
import Signup from "./components/Signup/signup";

import Events from "./components/Events/Events";
import Sponsors from "./components/sponsors/sponsors";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./Pages/Dashboard/Dashboard";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.146.0/three.min.js")
    console.log(document.getElementsByTagName("head")[0].appendChild(threeScript));
    return () => {
      if (threeScript){
        threeScript.remove();
      }
    }

  }, [])

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginMain />} />
//         <Route path="/register" element={<Signup />} />

        <Route path="/events" element={<Events/>} />

        {/*<Route path="/team" element={<Team />} />*/}
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/preevents" element={<PreEvents />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/api/google/callback' element={<GoogleMiddleware />}/>
        {/* <Route path="/complete-profile" element={<CompleteProfile />} /> */}
        <Route path="/test" element={<TestPage />} />
        {/* CA Specific Pages */}
        <Route path="/ca" element={<Home />}></Route>
        <Route path="/ca/ambassador-apply" element={<AmbassadorApplyForm />} />
        <Route
          path="/ca/leaderboard"
          element={
            <RequireAuth>
              <LeaderBoard />
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
              <Dashboard />
            </RequireAuth>
        } />
        <Route path="/payment" element={
          <RequireAuth>
              <Payment />
            </RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
