import "./App.css";
import LoginMain from "./components/LoginMain/LoginMain";
import ForgotPass from "./components/ForgotPass/forgotPass";
import Main from "./components/KY Main/main";

import "aos/dist/aos.css";

import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Profile from "./Pages/Profile/Profile";
import AmbassadorApplyForm from "./Pages/Ambassodor/Application/ApplicationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./utils/RequireAuth";
import GoogleMiddleware from "./Pages/GoogleLogin/GoogleMiddleware";
import CompleteProfile from "./Pages/CompleteProfile/CompleteProfile"
import TestPage from "./Pages/TestPage";
import Signup from "./components/Signup/signup";
import Dance from "./components/Dance/Dance";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dance" element={<Dance/>} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path='/api/google/callback' element={<GoogleMiddleware />}/>
        {/* <Route path="/complete-profile" element={<CompleteProfile />} /> */}
        <Route path="/test" element={<TestPage />} />
        {/* CA Specific Pages */}
        <Route path="/ca" element={<Home />}></Route>
        <Route path="/ca/ambassador-apply" element={<AmbassadorApplyForm />} />
        <Route path="/ca/leaderboard" element={<RequireAuth><LeaderBoard /></RequireAuth>}></Route>

      </Routes>
    </>
  );
}

export default App;
