import logo from './logo.svg';
import './App.css';
import Services from "./components/Services/Services";
import { useContext } from "react";
import { themeContext } from "./Context";
import Header from './components/header/header';
import Contact from './Contact/Contact';
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
     
        <Services />
    

      <Contact />
    </>
  );
}

export default App;
