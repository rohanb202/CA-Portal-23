import Maincss from "./main.module.css"
import { useState } from "react";
import kylogo from "./kylogo.svg"
import { Link } from "react-router-dom";

function Main(){
    const [navdisplay, setNavDisplay] = useState(0);

  function showNav() {
    document.getElementById("mobilenavdropdown").style.display = "flex";
    setNavDisplay(1);
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }
  function closeNav() {
    // console.log("HI")
    document.getElementById("mobilenavdropdown").style.display = "none";
    setNavDisplay(0);
    window.onscroll = function () {};
  }

    return (
        <div className={Maincss.main}>
            <div className={Maincss.mobilenav}>
                <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
                <button onClick={showNav}></button>
                <img src={kylogo} alt="ky-23"></img>
            </div>
            <div id="mobilenavdropdown" className={Maincss.mobilenavdropdown}>
                <button onClick={closeNav} className={Maincss.backicon}></button>
                <div className={Maincss.title}>
                    <img src={kylogo} alt="kashiyatra"></img>
                </div>
                <ul className={Maincss.nav}>
                    <li><Link to="/">TEAM</Link></li>
                    <li><Link to="/">EVENTS</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                </ul>
            </div>
            <div className={Maincss.outernav}>
                <div className={Maincss.navbar}>
                    <Link to="/"><div className={Maincss.kylogo}></div></Link>
                    <div className={Maincss.navlist}>
                        <ul>
                            <li className={Maincss.navitem}><Link to="/">TEAM</Link></li>
                            <li className={Maincss.navitem}><Link to="/">EVENTS</Link></li>
                            <li className={Maincss.navitem}><Link to="/">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className={Maincss.kyprofile}></div>
                </div>
            </div>
            <div className={Maincss.maincontent}>
                <div className={Maincss.timebox}>
                    <div className={Maincss.timeboxwrap}>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                59
                            </div>
                            <div className={Maincss.textbox}>
                                Days
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                59
                            </div>
                            <div className={Maincss.textbox}>
                                Hours
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                59
                            </div>
                            <div className={Maincss.textbox}>
                                Minutes
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                59
                            </div>
                            <div className={Maincss.textbox}>
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Maincss.register}>
                    <button className={Maincss.kyregister}>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default Main;