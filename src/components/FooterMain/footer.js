import React from "react";
import Footercss from "./footer.module.css";
import insta from "./img/insta.svg";
import fb from "./img/fb.svg";
import twitter from "./img/twitter.svg";
import yt from "./img/yt.svg";
import gmail from "./img/gmail.svg";
import call from "./img/call.svg";
import copy from "./img/copyright.svg";

export default function FooterMain() {
  return (
    <div>
      <div className={Footercss.mainbody}>
      <div className={Footercss.uborder}></div>
        <div className={Footercss.row}>
          <div className={`${Footercss.column1} ${Footercss.column} `}>
            <h2 className={`${Footercss.font} ${Footercss.font1}`}>Social</h2>
            <div className={Footercss.image}>
              <span className={Footercss.row1}>
                <img src={insta} className={Footercss.row1} alt="" />
                <img src={twitter} className={Footercss.row1} alt="" />
              </span>
              <span className={Footercss.row2}>
                <img src={yt} className={Footercss.row2} alt="" />
                <img src={fb} className={Footercss.row2} alt="" />
              </span>
            </div>
          </div>
          <div className={`${Footercss.column2} ${Footercss.column} `}>
            <h2 className={`${Footercss.font} ${Footercss.font2}`}>Home</h2>
            <div className={Footercss.home}>About us</div>
            <div className={Footercss.home}>Throwback</div>
            <div className={Footercss.home}>Testimonials</div>
            <div className={Footercss.home}>Sponsors</div>
          </div>
          <div className={`${Footercss.column3} ${Footercss.column} `}>
            <h2 className={`${Footercss.font} ${Footercss.font3}`}>
              Get in Touch
            </h2>
            <div className={Footercss.image}>
              <span className={Footercss.row1}>
                <img src={gmail} className={Footercss.row1} alt="" />
                <img src={call} className={Footercss.row1} alt="" />
              </span>
              <span className={Footercss.row2}>
                <div className={`${Footercss.row2} ${Footercss.ky}`}>
                  ky@gmail.com
                </div>
                <div className={`${Footercss.row2} ${Footercss.ky}`}>
                  9876543210
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
