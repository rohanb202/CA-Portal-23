import logo from './logo.svg';
import './App.css';
import Brownie from "./components/New_brownie/Brownie_point";
import { useContext } from "react";
import { themeContext } from "./Context";
import Header from './components/header/header';
import Contact from './Contact/Contact';
import Duties from './components/Duties/Card';
import aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  // useEffect(() => {
  //   aos.init({duration: 3000});
  // }, []);

  return (
    <>
      <Header />
     {/* <Duties/> */}
      {/* <Services /> */}
      <Brownie/>
    

      <Contact />
    </>
  );
}

export default App;
