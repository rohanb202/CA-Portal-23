import Maincss from "./main.module.css"
import Aboutcss from "./about.module.css"
import { useState } from "react";
import kylogo from "./kylogo.svg"
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion,useAnimation } from "framer-motion";
import peopleImg from "./img/Group.svg"
import trophyImg from "./img/Trophy.svg"
import hutImg from "./img/Frame.svg"

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } },
    hidden: { opacity: 0, scale: 0 }
};

function Main(){
    const [navdisplay, setNavDisplay] = useState(0);

    const control = useAnimation();
    const [ref, inView] = useInView();
    const [startPeopleCount,setStartPeopleCount]=useState(0);
    const [endPeopleCount,setEndPeopleCount]=useState(70000);
    const [startHutCount,setStartHutCount]=useState(0);
    const [endHutCount,setEndHutCount]=useState(350);
    const [startTrophyCount,setStartTrophyCount]=useState(0);
    const [endTrophyCount,setEndTrophyCount]=useState(60);
    useEffect(() => {
      if (inView) {
        setStartPeopleCount(0);
        setEndPeopleCount(70000)
        setStartHutCount(0);
        setEndHutCount(350)
        setStartTrophyCount(0);
        setEndTrophyCount(60)
        control.start("visible");
      } else {
        setStartPeopleCount(0);
        setEndPeopleCount(0)
        setStartHutCount(0);
        setEndHutCount(0)
        setStartTrophyCount(0);
        setEndTrophyCount(0)
        control.start("hidden");
      }
    }, [control, inView]);

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
        <>
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
                    <li><Link to="/eventRegistration">EVENTS</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                </ul>
            </div>
            <div className={Maincss.outernav}>
                <div className={Maincss.navbar}>
                    <Link to="/"><div className={Maincss.kylogo}></div></Link>
                    <div className={Maincss.navlist}>
                        <ul>
                            <li className={Maincss.navitem}><Link to="/">TEAM</Link></li>
                            <li className={Maincss.navitem}><Link to="/eventRegistration">EVENTS</Link></li>
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
        <div className={Aboutcss.aboutSectionBody}>
            <div className={Aboutcss.aboutTitle}>
            <div className={Aboutcss.aboutBorder1}></div>
            <div className={Aboutcss.aboutPageHeading} style={{color:"#F74061"}}>
                About
            </div>
            <div className={Aboutcss.aboutPageHeading} style={{color:"#F74061"}}>
                Us
            </div>
            <div className={Aboutcss.aboutBorder2}></div>
            </div>
            <div className={Aboutcss.aboutContent}>
                <div className={Aboutcss.aboutContentText} style={{color:"white"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="flex justify-evenly">
                    {/* <div className={Aboutcss.aboutContentCard}> */}
                <div className={Aboutcss.aboutContentCard}>
                    <div className="flex justify-center">
                        <div className={Aboutcss.aboutContentPeopleImg}>
                            <img src={peopleImg} alt="people"/>
                        </div>
                    </div>
                    <div>
                    <motion.div ref={ref} initial="hidden" animate={control} variants={boxVariant}>
                        <div>
                        <CountUp start={startPeopleCount} end={endPeopleCount} >
                          {({ countUpRef }) => (
                            <div className={Aboutcss.aboutContentNumberSection}>
                              <span className={Aboutcss.aboutContentNumber} ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                        </div>
                        
                    </motion.div>
                    <h5 className={Aboutcss.aboutContentSubHeading}>Footfall</h5>
                    </div>
                </div>
                {/* </div> */}
                
                <div className={Aboutcss.aboutContentCard}>
                    <div className="flex justify-center">
                        <div className={Aboutcss.aboutContentHutImg}>
                            <img src={hutImg} alt="people"/>
                        </div>
                    </div>
                    <div>
                    <motion.div ref={ref} initial="hidden" animate={control} variants={boxVariant}>
                        <div>
                        <CountUp start={startHutCount} end={endHutCount} >
                          {({ countUpRef }) => (
                            <div className={Aboutcss.aboutContentNumberSection}>
                              <span className={Aboutcss.aboutContentNumber} ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                        </div>
                        
                    </motion.div>
                    <h5 className={Aboutcss.aboutContentSubHeading}>Colleges</h5>
                    </div>
                </div>
                <div className={Aboutcss.aboutContentTrophyCard}>
                    <div className="flex justify-center">
                        <div className={Aboutcss.aboutContentTrophyImg}>
                            <img src={trophyImg} alt="people"/>
                        </div>
                    </div>
                    <div>
                    <motion.div ref={ref} initial="hidden" animate={control} variants={boxVariant}>
                        <div>
                        <CountUp start={startTrophyCount} end={endTrophyCount} >
                          {({ countUpRef }) => (
                            <div className={Aboutcss.aboutContentNumberSection}>
                              <span className={Aboutcss.aboutContentNumber} ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                        </div>
                        
                    </motion.div>
                    <h5 className={Aboutcss.aboutContentSubHeading}>Events</h5>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        </>
        
    )
}

export default Main;