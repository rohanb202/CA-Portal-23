import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   aos.init({duration: 3000});
  // }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
