import React from "react";
import ReactPlayer from "react-player";
import Footercss from "./footer.module.css";
import insta from "./img/insta.svg";
import fb from "./img/fb.svg";
import twitter from "./img/twitter.svg";
import yt from "./img/yt.svg";
import gmail from "./img/gmail.svg";
import call from "./img/call.svg";

export default function FooterMain() {
  return (
    <div>
      <div className={Footercss.mainbody}>
        <div className={Footercss.row}>
          <div className={`${Footercss.column0} ${Footercss.column} `}>
            <div className={Footercss.fvid}>
              <ReactPlayer
                width="495px"
                height="250px"
                url="https://www.youtube.com/watch?v=4qjQGb3wqRI"
              />
            </div>
          </div>
          <div className={`${Footercss.column1} ${Footercss.column} `}>
            <h2 className={`${Footercss.font} ${Footercss.font1}`}>Social</h2>
            <div className={Footercss.image}>
              <span className={Footercss.row1}>
                <a
                  href="https://www.instagram.com/kashiyatra_iitbhu/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} className={Footercss.row1} alt=""></img>
                </a>
                <a
                  href="https://twitter.com/ky_iitbhu?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} className={Footercss.row1} alt="" />
                </a>
              </span>
              <span className={Footercss.row2}>
                <a
                  href="https://www.youtube.com/c/KashiyatraIITBHU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={yt} className={Footercss.row2} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/kashiyatra.IITBHU/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} className={Footercss.row2} alt="" />
                </a>
              </span>
            </div>
          </div>
          <div className={`${Footercss.column2} ${Footercss.column} `}>
            <a href="#main">
              <h2 className={`${Footercss.font} ${Footercss.font2}`}>Home</h2>
            </a>
            <div className={Footercss.home}>
              <a href="#about">About us</a>
            </div>
            <div className={Footercss.home}>
              <a href="#throwback">Throwback</a>
            </div>
            <div className={Footercss.home}>
              <a href="#testimonials">Testimonials</a>
            </div>
            <div className={Footercss.home}>
              <a href="#sponsors">Sponsors</a>
            </div>
          </div>
          <div className={`${Footercss.column3} ${Footercss.column} `}>
            <h2 className={`${Footercss.font} ${Footercss.font3}`}>
              Get in Touch
            </h2>
            <div className={Footercss.image}>
              <span className={Footercss.row1}>
                <a href="mailto: kashiyatra@iitbhu.ac.in">
                  <img src={gmail} className={Footercss.row1} alt="" />
                </a>
                <a href="tel:123-456-7890">
                  <img src={call} className={Footercss.row1} alt="" />
                </a>
              </span>
              <span className={Footercss.row2}>
                <div className={`${Footercss.row2} ${Footercss.ky}`}>
                  <a href="mailto: kashiyatra@iitbhu.ac.in">ky@gmail.com</a>
                </div>
                <div className={`${Footercss.row2} ${Footercss.ky}`}>
                  <a href="tel:123-456-7890">9876543210 </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className={Footercss.Lborder}></div>
        <div className={Footercss.copyright}>© 2023 All Rights Reserved</div>
      </div>
    </div>
  );
}
