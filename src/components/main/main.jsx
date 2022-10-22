import "./main.css";
import { Link as ScrollLink } from "react-scroll";
import createScrollSnap from "scroll-snap";
import NavBar from "../navbar/navbar";
// import Nduty from '../New_Duty/Nduty';
// import Brownie from "../New_brownie/Brownie_point";
// import Contact from '../../Contact/Contact';
import { Link } from "react-router-dom";
//import sample from "./Kashiyatra 2020 - Official Aftermovie - Rendition of the Retro - IIT(BHU) Varanasi.mp4";
import kashiyatra from "./kashiyatra.svg";
import mouse from "./mouse.svg";
import { useEffect, useState } from "react";
import sidepattern from "../navbar/Super Side Pattern.svg";
// import kylogo from "./KY Logo.svg"
// import navicon from "./navicon.svg"
import back from "./back.svg";
import whyCAImage from "./why ca_Mesa de trabajo 1 1.svg";
import right from "./why CA_Mesa de trabajo 1 1-cropped.svg";
import responsibility from "../../img/responsibility.png";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
// import homepattern from "./home.svg"

function Main(props) {
  let { tokenInfo } = useContext(AuthContext);

  const [style, setStyle] = useState({});
  const [animeover, setAnimeover] = useState(0);
  const [videoOn, setVideoOn] = useState(1);

  const style1 = {
    height: "100px",
    width: "200px",
    top: "10px",
  };

  function handleClick() {
    setVideoOn(0);
    console.log(videoOn);
    // document.querySelector(".home").style.display = "none";
    document.querySelector(".outer-nav").style.top = 0;
  }

  useEffect(() => {
    setTimeout(() => {
      setStyle(style1);
    }, 1000);
    setTimeout(() => {
      setAnimeover(1);
    }, 7000);
  });

  return (
    <>
      {/* {videoOn === 1 && ( */}
      <section>
        <div class="home">
          {/* {animeover===1 && <div  class="head flex flex-col min-h-20 w-100 mx-auto font-bold text-dark-700">
                <div id="ca" data-aos='fade-down-right' data-aos-duration="3000" class="flex place-content-start justify-items-end text-light-600">
                    <div class="text-white">CA</div>
                </div>
                <div id="portal" data-aos="fade-up-left" data-aos-duration="3000" class="flex place-content-end justify-items-end text-light-600">
                    <div class="text-white">PORTAL</div>
                </div> */}
          <div class="start">
            <ScrollLink
              to="main-page"
              onClick={handleClick}
              spy={true}
              smooth={true}
            >
              <img src={mouse}></img>
            </ScrollLink>
          </div>
          {/* </div>} */}

          <video loop autoPlay muted>
            <source
              type="video/mp4"
              src="https://i.imgur.com/jim03K9.mp4"
            ></source>
          </video>
          <div class="kashiyatra">
            <img src={kashiyatra} alt="kashiyatra"></img>
          </div>
          <div class="wrapper">
            <div class="left-pattern"></div>
          </div>
          <div class="wrapper">
            <div class="right-pattern"></div>
          </div>
        </div>
      </section>
      {/* )} */}

      {/* {videoOn ? (
        ""
      ) : ( */}
      <section id="main-page">
        <div class="home2">
          {/* <div class="mobile-nav">
                <i class="fa fa-bars" aria-hidden="true"></i>
                <button onClick={()=>{}}></button>
                <img src={kylogo}></img>
            </div> */}

          <NavBar />
          <div class="sidepattern">
            {/* <img src={sidepattern} alt="sidepattern"></img> */}
          </div>
          <div class="outer-main">
            <div class="main">
              <div class="top">
                <div class="hello">
                  Hello {tokenInfo && tokenInfo.full_name}!
                </div>
                <div class="date">05 Februry</div>
                <div class="bottombar"></div>
              </div>
              <div class="center">
                <div class="center-top">
                  <img src={back} alt="back"></img>
                  <div
                    class="center-top-content"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div class="text">Become A Campus Ambassador</div>
                    <button class="apply">
                      <span class="button-text">
                        <Link to="/ambassador-apply">Apply</Link>
                      </span>
                    </button>
                  </div>
                </div>
                <div class="center-bottom">
                  <div class="left">
                    <div class="left-title">What Is Campus Ambassador?</div>
                    <div class="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                      dignissim, metus nec fringilla accumsan, risus sem
                      sollicitudin lacus, ut interdum tellus elit sed risus.
                      Maecenas eget condimentum velit, sit amet feugiat lectus.
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra. <br /> <br />
                      per inceptos himenaeos. Praesent auctor purus luctus enim
                      egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                      ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                      vel bibendum lorem. Morbi convallis convallis diam sit
                      amet lacinia. Aliquam in elementum tellus.
                    </div>
                  </div>
                  <div
                    class="right"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={right} alt="right"></img>
                  </div>
                </div>
                <div class="center-bottom">
                  <div
                    class="rightImgCa"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                  >
                    <img src={whyCAImage} alt="right"></img>
                  </div>
                  <div class="left">
                    <div class="left-title">Why Campus Ambassador?</div>
                    <div class="desc">
                      For bringin together a fest which encircles diversity like
                      never before we are reaching out to colleges across the
                      country. The selected Campus Ambassador in his/her tenure
                      will represent Kashiyatra, IIT(BHU) in his/her college and
                      will become a an integral memeber of the team.
                      <ul className="whyCampusAmbassadorContent">
                        <li> Become a leader </li>
                        <li> Update your organisational </li>
                        <li>
                          {" "}
                          Polish your communicating & public speaking skills.
                        </li>
                        <li>
                          {" "}
                          Get the exposure to online and media marketing{" "}
                        </li>
                        <li> Expand your creative horizons </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="center-bottom">
                  <div class="left">
                    <div class="left-title">
                      Responsibilities as Campus Ambassador
                    </div>
                    <div class="desc">
                      Campus Ambassador is the face of Kashiyatra. They act as
                      th link between Kashiyatra and their college and are the
                      first point of contact for the students. Following are the
                      responsibilites one is required to take :
                      <div className="responsibilitiesAsCampusAmbassador">
                        <div className="responsibilitiesAsCampusAmbassadorColumn">
                          <div className="responsibilitiesAsCampusAmbassadorHeading">
                            Represent
                          </div>
                          <div className="responsibilitiesAsCampusAmbassadorContent">
                            Represent and exemplify Kashiyatra in your college
                            among your peers.
                          </div>
                        </div>
                        <div className="responsibilitiesAsCampusAmbassadorColumn">
                          <div className="responsibilitiesAsCampusAmbassadorHeading">
                            Publicize
                          </div>
                          <div className="responsibilitiesAsCampusAmbassadorContent">
                            Promote Kashiyatra by publicizing its events through
                            social meadi platforms.
                          </div>
                        </div>
                        <div className="responsibilitiesAsCampusAmbassadorColumn">
                          <div className="responsibilitiesAsCampusAmbassadorHeading">
                            Conceptualize
                          </div>
                          <div className="responsibilitiesAsCampusAmbassadorContent">
                            Bring forth ideas and proposals as valuable input
                            for team Kashiyatra.
                          </div>
                        </div>
                        <div className="responsibilitiesAsCampusAmbassadorColumn">
                          <div className="responsibilitiesAsCampusAmbassadorHeading">
                            Organize
                          </div>
                          <div className="responsibilitiesAsCampusAmbassadorContent">
                            Conduct workshops and promotional events in your
                            college for Kashiyatra.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img
                      src={responsibility}
                      alt="responsibility"
                      className="w-40 lg:w-[80%] lg:ml-16 mt-20
                    "
                    ></img>
                  </div>
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </>
  );
}

export default Main;
