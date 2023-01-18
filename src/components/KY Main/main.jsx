import React from "react";
// import {Alert} from "react-native"
import 'react-toastify/dist/ReactToastify.css';
import ActionAlerts from "./Alert";
import { lazy, Suspense} from "react";
import Maincss from "./main.module.css";
import { useState, useEffect, useContext, useRef } from "react";
import Aboutcss from "./about.module.css";
import Testimonialcss from "./testimonial.module.css";
import TestimonialFrame from "./img/testimonailFrame.svg";
import FooterMain from "../FooterMain/footer";
import Testimonials from "./testimonials.jsx";
import Throwcss from "./throw.module.css";
import kylogo from "./kylogo.svg";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
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
import Stars from "../Stars/star";
const Slider = lazy(() => import('../Slider/Slider'));


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



  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const deadline = "January, 20, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    if (Math.floor(time / (1000 * 60 * 60 * 24)) < 10) {
      setDays("0" + Math.floor(time / (1000 * 60 * 60 * 24)));
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    }
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
//       <ToastContainer
// position="top-center"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="colored"
// />
      control.start("visible");
    } else {
      console.log("Hello");
    }
  }, [control, inView]);

  // useEffect(()=>{
  //   Alert.alert("Hello","Yo the Man",[{text: "Closed",onPress:()=> console.log('alert closed')}])
  // },[])

  return (
    <>
    {/* <div class="alert alert-warning" role="alert">
      A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div> */}
    {/* <Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  This is a warning alert — <strong>check it out!</strong>
</Alert> */}
<div className="sticky top-0 z-[100] ">
  <ActionAlerts />
</div>

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
      <Stars />
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
        <Suspense>
        <Slider />
        </Suspense>
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
        <Testimonials />
      </div>
      <FooterMain />
    </>
  );
}

export default Main;
