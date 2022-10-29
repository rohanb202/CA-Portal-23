import Maincss from "./main.module.css"
import { useState, useEffect } from "react";
import kylogo from "./kylogo.svg"
import { Link } from "react-router-dom";

function Main(){
    const [navdisplay, setNavDisplay] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "January, 20, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, []);

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
                        <ul className={Maincss.navlistul}>
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
                                {days}
                            </div>
                            <div className={Maincss.textbox}>
                                Days
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                {hours}
                            </div>
                            <div className={Maincss.textbox}>
                                Hours
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                {minutes}
                            </div>
                            <div className={Maincss.textbox}>
                                Minutes
                            </div>
                        </div>
                        <div className={Maincss.outerbox}>
                            <div className={Maincss.numbox}>
                                {seconds}
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