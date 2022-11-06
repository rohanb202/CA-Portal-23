import React from 'react'
import Maincss from "./main.module.css";
import { useState, useEffect,useContext, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../svgs/Logo.svg"


function Nav() {
    const { userInfo } = useContext(AuthContext);
    const [navdisplay, setNavDisplay] = useState(0);


    function showNav() {
        console.log("hi")
        document.getElementById("mobilenavdropdown").style.height = "100%";
        setNavDisplay(1);
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () {
          window.scrollTo(x, y);
        };
      }
      function closeNav() {
        // console.log("HI")
        document.getElementById("mobilenavdropdown").style.height = "0";
        setNavDisplay(0);
        window.onscroll = function () {};
      }

  return (
    <div>
        <div className={Maincss.mobilenav}>
          <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
          
          <button onClick={showNav}></button>
          <img src={logo} alt="ky-23"></img>
          
        </div>
        <div id="mobilenavdropdown" className={Maincss.mobilenavdropdown}>
          
          <div className={Maincss.title}>
          <button onClick={closeNav} className={Maincss.backicon}></button>
            <img src={logo} alt="kashiyatra"></img>
          </div>
          <ul className={Maincss.nav}>
            <li onClick={closeNav}>
              <Link to="/">TEAM</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="/Dance">EVENTS</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="/">FAQ</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="/ca">CA</Link>
            </li>
            {
              userInfo?(
                <li onClick={closeNav}>
                <Link to="/dashboard">Dashboard</Link>
                </li>
              ):(
                <li onClick={closeNav}>
                <Link to="/login">Login</Link>
                </li>
              )
            }
          </ul>
        </div>
        <div className={Maincss.outernav}>
          <div className={Maincss.navbar}>
            <Link to="/">
              <img src={logo} className={Maincss.kylogo}></img>
            </Link>
            <div className={Maincss.navlist}>
              <ul className={Maincss.navlistul}>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/team">TEAM</Link>
                </li>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/Dance">EVENTS</Link>
                </li>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/">FAQ</Link>
                </li>
                <li onClick={closeNav} className={Maincss.navitem}>
                <Link to="/ca">CA</Link>
                </li>
                {
                  userInfo?(
                    <li onClick={closeNav} className={Maincss.navitem}>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                  ):(
                    <li onClick={closeNav} className={Maincss.navitem}>
                    <Link to="/login">Login</Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className={Maincss.kyprofile}></div>
          </div>
        </div>
    </div>
  )
}

export default Nav