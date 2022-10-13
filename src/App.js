import logo from './logo.svg';
import './App.css';
import Brownie from "./components/New_brownie/Brownie_point";
import Nduty from "./components/New_Duty/Nduty"
import { useContext } from "react";
import { themeContext } from "./Context";
import Title from './components/Title/Title';
import Header from './components/header/header';
import Contact from './Contact/Contact';
import Main from './components/main/main';
import aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';

function App() {
  const [animeOver, setAnimeOver] = useState(0);
  
  // if(animeOver===0)setTimeout(setAnimeOver(1), 5000);

  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setAnimeOver(1);
  //   }, 5000);
  //   // aos.init({duration: 3000});
  // }, []);

  return (
    <>
      <Main>
      <Nduty/>
          <Brownie/>
          <Contact />
      </Main>
    </>
  )
  // if (animeOver===1){
  //   return (
  //     <>
  //       <Header />
  //      {/* <Duties/> */}
  //       {/* <Services /> */}
  //         <Nduty/>
  //         <Brownie/>
  //         <Contact />
  //     </>
  //   );
  // }
  // else{
  //   return (
  //     <Title/>
  //   )
  // }
}

export default App;
