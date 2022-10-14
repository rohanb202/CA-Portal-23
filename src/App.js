import './App.css';
import Brownie from "./components/New_brownie/Brownie_point";
import Nduty from "./components/New_Duty/Nduty"

import Contact from './Contact/Contact';
import Main from './components/main/main';
// import Login from './components/Login/Login';

import "aos/dist/aos.css";


function App() {
 
  return (
    <>
      <Main>
      <Nduty/>
          <Brownie/>
          <Contact />
      </Main> 
     {/* <Login/> */}
    </>
  )
  
}

export default App;
