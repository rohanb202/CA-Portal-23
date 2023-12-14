import React from 'react'
import Maincss from "./main.module.css";
import { useState, useEffect,useContext, useRef } from "react";
import { Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../svgs/Logo.svg"
import BasicMenu from './dropdown.jsx';
// import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Nav() {
    const { userInfo, logoutUser } = useContext(AuthContext);
    const [navdisplay, setNavDisplay] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


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
          <a href="www.kashiyatra.org">
          <img src={logo} alt="ky-23" className={Maincss.kyLogoMobileScreen}></img>
          </a>
          
        </div>
        <div id="mobilenavdropdown" className={Maincss.mobilenavdropdown}>
          
          <div className={Maincss.title}>
          <button onClick={closeNav} className={Maincss.backicon}></button>
            <img src={logo} alt="kashiyatra"></img>
          </div>
          <ul className={Maincss.nav}>
            <li onClick={closeNav}>
              <Link to="">TEAM</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="">SPONSORS</Link>
            </li>
            {<li onClick={closeNav}>
              <Link to="/preevents" className={Maincss.navitem}>PRE-EVENTS</Link>
            </li>}
            <li onClick={closeNav}>
              <Link to="/events">EVENTS</Link>
            </li>
            {/* <li onClick={closeNav}>
              <Link to="/">FAQ</Link>
            </li> */}
            <li onClick={closeNav}>
              <a href="ca.kashiyatra.org">CA</a>
            </li>
            {
              userInfo?(
                <li onClick={closeNav}>
                <a href="www.kashiyatra.org/kydashboard">Dashboard</a>
                </li>
              ):(
                <li onClick={closeNav}>
                <a href="www.kashiyatra.org/kylogin">Login</a>
                </li>
              )
            }
          </ul>
        </div>
        <div className={Maincss.outernav}>
          <div className={Maincss.navbar}>
            <a href="www.kashiyatra.org">
              <img src={logo} className={Maincss.kylogo} alt="logo"></img>
            </a>
            <div className={Maincss.navlist}>
              <ul className={Maincss.navlistul}>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="">TEAM</Link>
                </li>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="">SPONSORS</Link>
                </li>
                {<li onClick={closeNav}>
              <Link to="/preevents" className={Maincss.navitem}>PRE-EVENTS</Link>
            </li>}
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/events">EVENTS</Link>
                </li>
                {/* <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/">FAQ</Link>
                </li> */}
                <li onClick={closeNav} className={Maincss.navitem}>
                <a href="ca.kashiyatra.org">CA</a>
                </li>
                
                <li>
                {/* </div> */}
                {/* <Link to="/login"> */}
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <div className={Maincss.kyprofile}></div>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {/* <Link to="/login"><MenuItem onClick={handleClose}>Login</MenuItem></Link> */}
                        {
                            userInfo?(
                                <>
                                <a href="www.kashiyatra.org/kydashboard"><MenuItem onClick={handleClose}>Dashboard</MenuItem></a>
                                <a href="www.kashiyatra.org"><MenuItem onClick={()=>{handleClose(); logoutUser();}}>Logout</MenuItem></a>
                                </>
                            ):(
                                <a href="www.kashiyatra.org/kylogin"><MenuItem onClick={handleClose}>Login</MenuItem></a>
                            )
                        }
                        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    </Menu>
                    </div>
                    </li>
                </ul>
                </div>
            {/* </Link> */}
          </div>
        </div>
    </div>
  )
}

export default Nav
