import Maincss from "./main.module.css";
import { useState, useEffect,useContext, useRef } from "react";
import Aboutcss from "./about.module.css";
import Testimonialcss from "./testimonial.module.css";
import TestimonialFrame from "./img/testimonailFrame.svg";
import FooterMain from "../FooterMain/footer";
import TestimonialImg from "./img/testimonails/testimonial.jpeg";
import Testimonials from "./testimonials.jsx";
import Throwcss from "./throw.module.css";
import Slider from "../Slider/Slider";
import kylogo from "./kylogo.svg";
import { Link,useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import peopleImg from "./img/Group.svg";
import trophyImg from "./img/Trophy.svg";
import hutImg from "./img/Frame.svg";
import AuthContext from "../../context/AuthContext";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } },
  hidden: { opacity: 0, scale: 0 },
};

function Main() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null)
  const [navdisplay, setNavDisplay] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const cont = useRef(null);

  // useEffect(()=>{
  //   gsap.registerPlugin(ScrollTrigger);

  //   let sections = [sec1.current, sec2.current, sec3.current];
  //   let container = cont.current;
    // console.log(container.offsetWidth);
    // console.log(sections);
    // let tl=gsap.timeline({scrollTrigger: {
    //   trigger: container,
    //   pin: cont.current,
    //   scrub: 0.1,
    //   markers:true,
      
    //   //snap: directionalSnap(1 /(sections.length - 1)),
    //   end: `+=${4608}`
    // }});
    //  tl.to(sections, {
    //   xPercent: -100 * (sections.length - 1),
    //   ease: "none", // <-- IMPORTANT!
      
      
    // });
  //   let tl=gsap.timeline();
  //   tl.to(sections, {
      
  //     scrollTrigger: {
  //       // start:"top top",
  //       trigger:container,
  //       pin: true,
  //       invalidateOnRefresh: true,
  //       anticipatePin: 1,
  //       scrub: 1.23,
  //       markers:true,
  //       end:`+=${container.offsetWidth}` 
  //     }
  //   }).to(sections,{
  //     // xPercent: -100 * (sections.length - 1),
  //     // ease: "none",
  //   },">");
    
  // }, [])


  useEffect(() => {
    if (!vantaEffect){
      setVantaEffect(
        NET({
          el: vantaRef.current,
          points: 20,
          maxDistance: 10,
          spacing: 20,
          color: 0x75640141,
          backgroundColor: 0x06122E,
          THREE
        })
      )
    }
    return ()=>{
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const deadline = "January, 20, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  // useEffect(() => {
  //   if(userInfo && userInfo.ca_id){
  //     navigate("/ca/leaderboard")
  //   } else {
  //     navigate("/ca");
  //   }
  // }, [])
  
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const control = useAnimation();
  const [ref, inView] = useInView();
  const [startPeopleCount, setStartPeopleCount] = useState(0);
  const [endPeopleCount, setEndPeopleCount] = useState(0);
  const [startHutCount, setStartHutCount] = useState(0);
  const [endHutCount, setEndHutCount] = useState(0);
  const [startTrophyCount, setStartTrophyCount] = useState(0);
  const [endTrophyCount, setEndTrophyCount] = useState(0);
  useEffect(() => {
    if (inView) {
      setStartPeopleCount(0);
      setEndPeopleCount(70000);
      setStartHutCount(0);
      setEndHutCount(350);
      setStartTrophyCount(0);
      setEndTrophyCount(60);
      control.start("visible");
    } else {
      // setStartPeopleCount(0);
      // setEndPeopleCount(0);
      // control.start("hidden");
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
      <div className={Maincss.main} ref={vantaRef}>
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
            <li onClick={closeNav}>
              <Link to="/">TEAM</Link>
            </li>
            <li onClick={closeNav}>
              <Link to="/events">EVENTS</Link>
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
              <div className={Maincss.kylogo}></div>
            </Link>
            <div className={Maincss.navlist}>
              <ul className={Maincss.navlistul}>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/team">TEAM</Link>
                </li>
                <li onClick={closeNav} className={Maincss.navitem}>
                  <Link to="/events">EVENTS</Link>
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
        <div className={Maincss.maincontent}>
          <div className={Maincss.timebox}>
            <div className={Maincss.timeboxwrap}>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{days}</div>
                <div className={Maincss.textbox}>Days</div>
              </div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{hours}</div>
                <div className={Maincss.textbox}>Hours</div>
              </div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{minutes}</div>
                <div className={Maincss.textbox}>Minutes</div>
              </div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{seconds}</div>
                <div className={Maincss.textbox}>Seconds</div>
              </div>
            </div>
          </div>
          <div className={Maincss.register}>
            <Link to="/login"><button className={Maincss.kyregister}>Register Now</button></Link>
          </div>
        </div>
      </div>
      <div className={Aboutcss.aboutSectionBody}>
        <div className={Aboutcss.aboutTitle}>
          <div className={Aboutcss.aboutBorder1}></div>
          <div
            className={Aboutcss.aboutPageHeading}
            style={{ color: "#F74061" }}
          >
            About
          </div>
          <div
            className={Aboutcss.aboutPageHeading}
            style={{ color: "#F74061" }}
          >
            Us
          </div>
          <div className={Aboutcss.aboutBorder2}></div>
        </div>
        <div className={Aboutcss.aboutContent}>
          <div className={Aboutcss.aboutContentText} style={{ color: "white" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="flex justify-evenly">
            {/* <div className={Aboutcss.aboutContentCard}> */}
            <div className={Aboutcss.aboutContentCard}>
              <div className="flex justify-center">
                <div className={Aboutcss.aboutContentPeopleImg}>
                  <img src={peopleImg} alt="people" />
                </div>
              </div>
              <div>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={control}
                  variants={boxVariant}
                >
                  <div>
                    <CountUp start={startPeopleCount} end={endPeopleCount}>
                      {({ countUpRef }) => (
                        <div className={Aboutcss.aboutContentNumberSection}>
                          <span
                            className={Aboutcss.aboutContentNumber}
                            ref={countUpRef}
                          />
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
                  <img src={hutImg} alt="people" />
                </div>
              </div>
              <div>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={control}
                  variants={boxVariant}
                >
                  <div>
                    <CountUp start={startHutCount} end={endHutCount}>
                      {({ countUpRef }) => (
                        <div className={Aboutcss.aboutContentNumberSection}>
                          <span
                            className={Aboutcss.aboutContentNumber}
                            ref={countUpRef}
                          />
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
                  <img src={trophyImg} alt="people" />
                </div>
              </div>
              <div>
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={control}
                  variants={boxVariant}
                >
                  <div>
                    <CountUp start={startTrophyCount} end={endTrophyCount}>
                      {({ countUpRef }) => (
                        <div className={Aboutcss.aboutContentNumberSection}>
                          <span
                            className={Aboutcss.aboutContentNumber}
                            ref={countUpRef}
                          />
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
      <div className={Throwcss.throwSectionBody}>
        <div className={Throwcss.throwTitle}>
          <div className={Throwcss.throwBorder3}></div>
          <div
            className={Throwcss.throwSliderHeading}
            style={{ color: "#F75440" }}
          >
            Throwback
          </div>
          <div className={Throwcss.throwBorder4}></div>
        </div>
        <Slider />
        <div className={Throwcss.blank}> </div>
      </div>
      <div className={Testimonialcss.testimonialSectionBody} >
        <div className={Testimonialcss.testimonialTitle}>
          <div className={Testimonialcss.testimonialBorderLeft}></div>
          <div
            className={Testimonialcss.testimonialHeading}
            style={{ color: "#F79840" }}
          >
            Testimonails
          </div>
          <div className={Testimonialcss.testimonialBorderRight}></div>
        </div>
        <Testimonials/>
        {/* <div className={Testimonialcss.blank}> </div> */}
        
      </div>
      <FooterMain/>
    </>
  );
}

export default Main;
