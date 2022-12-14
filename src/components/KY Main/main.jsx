import Maincss from "./main.module.css";
import {lazy,Suspense} from "react";
import { useState, useEffect, useContext, useRef } from "react";
import Aboutcss from "./about.module.css";
import Testimonialcss from "./testimonial.module.css";
import TestimonialFrame from "./img/testimonailFrame.svg";
// import ThrowbacksidePattern from "./img/throwbackSidePattern.svg";
import FooterMain from "../FooterMain/footer";
// import TestimonialImg from "./img/testimonails/testimonial.jpeg";
// import Testimonials from "./testimonials.jsx";

import Throwcss from "./throw.module.css";
import Slider from "../Slider/Slider";
import kylogo from "./kylogo.svg";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import peopleImg from "./img/Group.svg";
import trophyImg from "./img/Trophy.svg";
import hutImg from "./img/Frame.svg";
import AuthContext from "../../context/AuthContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import logo from "../../svgs/Logo.svg";
import line from "../../svgs/themeline.svg";
import mouse from "../../svgs/mouse.svg";
import { Link as ScrollLink } from "react-scroll";
import Nav from "../KY nav/nav";

const Testimonials = lazy(() => import('./testimonials.jsx'));


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } },
  hidden: { opacity: 0, scale: 0 },
};

function Main() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
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

  // useEffect(() => {
  //   if (!vantaEffect){
  //     setVantaEffect(
  //       CLOUDS({
  //         el: vantaRef.current,
  //         mouseControls: true,
  // touchControls: true,
  // gyroControls: false,
  // minHeight: 200.00,
  // minWidth: 200.00,
  // scale: 1.00,
  // speed: 3,
  // skyColor: 0x06122E,
  // cloudColor: 0xFEE3E8,
  // cloudShadowColor: 0x06122E,
  // texturePath: "./noise.png",
  //         THREE
  //       })
  //     )
  //   }
  //   return ()=>{
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const deadline = "January, 20, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    // setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    if (Math.floor(time / (1000 * 60 * 60 * 24)) < 10) {
      setDays("0" + Math.floor(time / (1000 * 60 * 60 * 24)));
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
    // console.log(hours.toString().length)
    if (Math.floor((time / (1000 * 60 * 60)) % 24) < 10) {
      setHours("0" + Math.floor((time / (1000 * 60 * 60)) % 24));
    } else {
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    }

    if (Math.floor((time / 1000 / 60) % 60) < 10) {
      setMinutes("0" + Math.floor((time / 1000 / 60) % 60));
    } else {
      setMinutes(Math.floor((time / 1000 / 60) % 60));
    }

    if (Math.floor((time / 1000) % 60) < 10) {
      setSeconds("0" + Math.floor((time / 1000) % 60));
    } else {
      setSeconds(Math.floor((time / 1000) % 60));
    }
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
      setEndHutCount(360);
      setStartTrophyCount(0);
      setEndTrophyCount(60);
      control.start("visible");
    } else {
      // setStartPeopleCount(0);
      // setEndPeopleCount(0);
      // control.start("hidden");
    }
  }, [control, inView]);

  // function showNav() {
  //   document.getElementById("mobilenavdropdown").style.height = "100%";
  //   setNavDisplay(1);
  //   var x = window.scrollX;
  //   var y = window.scrollY;
  //   window.onscroll = function () {
  //     window.scrollTo(x, y);
  //   };
  // }
  // function closeNav() {
  //   // console.log("HI")
  //   document.getElementById("mobilenavdropdown").style.height = "0";
  //   setNavDisplay(0);
  //   window.onscroll = function () {};
  // }

  return (
    <>
      <div id="main" className={Maincss.main}>
        <Nav />
        <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/FVEh1Jf.mp4"
          ></source>
        </video>
        <div className={Maincss.maincontent}>
          <div className={Maincss.blurbg}></div>
          <div className={Maincss.themebox}>
            <div className={Maincss.themetext}>SAFARNAMA</div>
            <div className={Maincss.themefont}>
              <span>
                <img src={line}></img>
              </span>
              A Mystical Voyage
              <span>
                <img src={line}></img>
              </span>
            </div>
            {/* <div className={Maincss.in}>IN</div> */}
          </div>
          <div className={Maincss.timebox}>
            <div className={Maincss.timeboxwrap}>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{days}</div>
                <div className={Maincss.textbox}>Days</div>
              </div>
              <div className={Maincss.colon}>:</div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{hours}</div>
                <div className={Maincss.textbox}>Hours</div>
              </div>
              <div className={Maincss.colon}>:</div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{minutes}</div>
                <div className={Maincss.textbox}>Minutes</div>
              </div>
              <div className={Maincss.colon}>:</div>
              <div className={Maincss.outerbox}>
                <div className={Maincss.numbox}>{seconds}</div>
                <div className={Maincss.textbox}>Seconds</div>
              </div>
            </div>
          </div>
          <div className={Maincss.register}>
            <Link to="/login">
              <button className={Maincss.kyregister}>Register Now</button>
            </Link>
          </div>
          <div className={Maincss.mouse}>
            <ScrollLink
              to="about"
              // onClick={handleClick}
              spy={true}
              smooth={true}
            >
              <img src={mouse} alt="mouse"></img>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div id="about" className={Aboutcss.aboutSectionBody}>
        <div className={Aboutcss.aboutTitle}>
          <div className={Aboutcss.aboutBorder1}></div>
          <div className={Aboutcss.aboutPageHeading} style={{ color: "white" }}>
            About
          </div>
          <div className={Aboutcss.aboutPageHeading} style={{ color: "white" }}>
            Us
          </div>
          <div className={Aboutcss.aboutBorder2}></div>
        </div>
        <div className={Aboutcss.aboutContent}>
          <div className={Aboutcss.aboutContentText} style={{ color: "white" }}>
            Kashiyatra, the annual socio-cultural festival of IIT(BHU) Varanasi
            is a three day fiesta, aimed towards mesmerizing everyone with
            enchanting literary, musical and artistic events. It is the largest
            cultural festival of northern India. IIT(BHU) rests within Asia's
            biggest residential university, BHU in the holy city of Varanasi.
            Varanasi, the eternal city, houses plethora of traditions and has an
            ecstatic blend of cultures of myriad races. IIT(BHU) Varanasi has
            been nationally acclaimed for imparting technical knowledge in
            diverse fields and it has recently concluded its centenary
            celebrations.
          </div>
          <div className={Aboutcss.aboutky}>
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
                            <span className={Aboutcss.plus}>+</span>
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
                            <span className={Aboutcss.plus}>+</span>
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
                            <span className={Aboutcss.plus}>+</span>
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
      </div>
      <div id="throwback" className={Throwcss.throwSectionBody}>
        <div className={Throwcss.throwTitle}>
          <div className={Throwcss.throwBorder3}></div>
          <div
            className={Throwcss.throwSliderHeading}
            style={{ color: "#0D1F2D" }}
          >
            Throwback
          </div>
          <div className={Throwcss.throwBorder4}></div>
        </div>
        <Slider />
        <div className={Throwcss.blank}> </div>
      </div>
      <div id="testimonials" className={Testimonialcss.testimonialSectionBody}>
        <div className={Testimonialcss.testimonialTitle}>
          <div className={Testimonialcss.testimonialBorderLeft}></div>
          <div
            className={Testimonialcss.testimonialHeading}
            style={{ color: "#F6F5E9" }}
          >
            Testimonials
          </div>
          <div className={Testimonialcss.testimonialBorderRight}></div>
        </div>
        <Suspense fallback={<div style={{color:"white",fontSize:"2rem",display:"flex",justifyContent:"center",padding:"2rem"}}>Loading...</div>}>
          <Testimonials />
        </Suspense>
        
        {/* <div className={Testimonialcss.blank}> </div> */}
      </div>
      <FooterMain />
    </>
  );
}

export default Main;
