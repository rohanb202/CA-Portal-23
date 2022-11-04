import React,{useState,useEffect,useContext} from "react";
import Teamcss from "./team.module.css"
import { Link,useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import kylogo from "./img/kylogo.svg"

export default function Team(){

    const [navdisplay, setNavDisplay] = useState(0);

  const { userInfo } = useContext(AuthContext);
  

  function showNav() {
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

    return(
        <div>
        <div className={Teamcss.mobilenav}>
          <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
          <button onClick={showNav}></button>
          <img src={kylogo} alt="ky-23"></img>
        </div>
        <div id="mobilenavdropdown" className={Teamcss.mobilenavdropdown}>
          <button onClick={closeNav} className={Teamcss.backicon}></button>
          <div className={Teamcss.title}>
            <img src={kylogo} alt="kashiyatra"></img>
          </div>
          <ul className={Teamcss.nav}>
            <li>
              <Link to="/">TEAM</Link>
            </li>
            <li>
              <Link to="/eventRegistration">EVENTS</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/ca">CA</Link>
            </li>
            {
              userInfo?(
                <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
              ):(
                <li>
                <Link to="/login">Login</Link>
                </li>
              )
            }
          </ul>
        </div>
        <div className={Teamcss.outernav}>
          <div className={Teamcss.navbar}>
            <Link to="/">
              <div className={Teamcss.kylogo}></div>
            </Link>
            <div className={Teamcss.navlist}>
              <ul className={Teamcss.navlistul}>
                <li className={Teamcss.navitem}>
                  <Link to="/team">TEAM</Link>
                </li>
                <li className={Teamcss.navitem}>
                  <Link to="/eventRegistration">EVENTS</Link>
                </li>
                <li className={Teamcss.navitem}>
                  <Link to="/">FAQ</Link>
                </li>
                <li className={Teamcss.navitem}>
                <Link to="/ca">CA</Link>
                </li>
                {
                  userInfo?(
                    <li className={Teamcss.navitem}>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                  ):(
                    <li className={Teamcss.navitem}>
                    <Link to="/login">Login</Link>
                    </li>
                  )
                }
              </ul>
            </div>
            <div className={Teamcss.kyprofile}></div>
          </div>
        </div>
        <div className={Teamcss.TeamPage}>

        </div>
        </div>
    )
}