import React, { useState, useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import PreEventsCss from "./preevents.module.css"
// import Nav from "../KY nav/nav";
import Star1 from "./Dharshan Raval-01.png";
import Star2 from "./Raftaar.png";
import Star3 from "./Bassi.png"
import StarCss from "./star.module.css"
import Linescss from "./line.scss"
import "./line.scss"
import SVGComponent from "./Svgcomponent";
// import { event } from "jquery";
import Aboutcss from "../KY Main/about.module.css"
import MultiscrollText from "./MultiscrollText";
import MultiscrollText2 from "./MultiscrollText2";
import MultiscrollText3 from "./MultiscrollText3";
export default function Stars() {
//   const [navdisplay, setNavDisplay] = useState(0);

//   const { userInfo } = useContext(AuthContext);

  return (
    <>
    <div className={StarCss.StarTitle}>
          <div className={Aboutcss.aboutBorder1}></div>
          <div className={Aboutcss.aboutPageHeading} style={{ color: "white" }}>
            Artist
          </div>
          <div className={Aboutcss.aboutBorder2}></div>
      </div>



    <div className={StarCss.StarCol}>
    <div className="absolute z-20 h-[120vh] w-[100%]" style={{backgroundColor:"#2D3047"}}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1999.007 560"  xmlSpace="preserve" height={"90%"} overflow="hidden" overflow-x="hidden">
    <path class="line1" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M0,205.122c0,0,1.873-5.227,34.181,11.771
      c34.482,18.143,59.697,52.119,93.893,71.865c58.23,33.623,127.729,35.703,192.193,20.418
      c84.208-19.967,120.448-106.473,201.401-131.238c33.513-10.252,72.097-7.987,100.849,12.053
      c13.948,9.722,25.016,23.027,38.729,33.078c41.312,30.281,101.44,28.432,150.36,28.432c58.764,0,300,0,300,0"/>
    <path class="line2" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M7.622,68.997
      c63.526,16.725,114.958,46.718,161.474,93.375c58.574,58.752,124.397,129.296,215.396,122.491
      c36.201-2.707,69.877-18.493,104.376-29.793c92.193-30.198,191.378-28.556,288.366-26.362
      c222.659,5.037,443.983,4.791,300,4.791"/>
    <path class="line3" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M10.628,398.243
      c98.501,20.268,202.926,9.114,295.368-30.252c110.86-47.21,211.1-122.805,335.982-128.2c91.338-3.945,184.697,28.631,270.85,55.526
      c52.736,15.855,159.623,42.183,197.969,42.183"/>
    <path class="line4" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M3.753,344.931
      c0,0,260.692-109.142,307.727-118.406c47.035-9.264,132.368-18.393,195.794,3.404s243.095,67.78,340.015,64.93
      c96.92-2.851,204.513-72.49,236.582-89.594c32.069-17.104,65.547-14.766,2.225-1.766"/>
    </svg>
</div>
        {/* <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/Lb7SXZ7.mp4"
            // src="https://i.imgur.com/FWeZenk.mp4"
          ></source>
        </video> */}
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            <MultiscrollText starName="Darshan Raval"/>
        {/* </div> */}
        <div className="relative z-50 col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star1} alt="Dharshan Raval" />
        </div>
        
    </div>
    <div className={StarCss.StarCol}>
        {/* <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/Lb7SXZ7.mp4"
            // src="https://i.imgur.com/FWeZenk.mp4"
          ></source>
        </video> */}
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            
        {/* </div> */}
        <div className="relative z-50 col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star2} alt="Raftaar" />
        </div>
        <div className="absolute z-20 h-[120vh] w-[100%]" style={{backgroundColor:"#2D3047"}}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1999.007 560"  xmlSpace="preserve" height={"90%"} overflow="hidden" overflow-x="hidden">
    <path class="line1" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M0,205.122c0,0,1.873-5.227,34.181,11.771
      c34.482,18.143,59.697,52.119,93.893,71.865c58.23,33.623,127.729,35.703,192.193,20.418
      c84.208-19.967,120.448-106.473,201.401-131.238c33.513-10.252,72.097-7.987,100.849,12.053
      c13.948,9.722,25.016,23.027,38.729,33.078c41.312,30.281,101.44,28.432,150.36,28.432c58.764,0,300,0,300,0"/>
    <path class="line2" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M7.622,68.997
      c63.526,16.725,114.958,46.718,161.474,93.375c58.574,58.752,124.397,129.296,215.396,122.491
      c36.201-2.707,69.877-18.493,104.376-29.793c92.193-30.198,191.378-28.556,288.366-26.362
      c222.659,5.037,443.983,4.791,300,4.791"/>
    <path class="line3" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M10.628,398.243
      c98.501,20.268,202.926,9.114,295.368-30.252c110.86-47.21,211.1-122.805,335.982-128.2c91.338-3.945,184.697,28.631,270.85,55.526
      c52.736,15.855,159.623,42.183,197.969,42.183"/>
    <path class="line4" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M3.753,344.931
      c0,0,260.692-109.142,307.727-118.406c47.035-9.264,132.368-18.393,195.794,3.404s243.095,67.78,340.015,64.93
      c96.92-2.851,204.513-72.49,236.582-89.594c32.069-17.104,65.547-14.766,2.225-1.766"/>
    </svg>
    </div>
        <MultiscrollText2 starName="Raftaar"/>
    </div>
    <div className={StarCss.StarCol}>
    <div className="absolute z-20 h-[120vh] w-[100%]" style={{backgroundColor:"#2D3047"}}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1999.007 560"  xmlSpace="preserve" height={"90%"} overflow="hidden" overflow-x="hidden">
    <path class="line1" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M0,205.122c0,0,1.873-5.227,34.181,11.771
      c34.482,18.143,59.697,52.119,93.893,71.865c58.23,33.623,127.729,35.703,192.193,20.418
      c84.208-19.967,120.448-106.473,201.401-131.238c33.513-10.252,72.097-7.987,100.849,12.053
      c13.948,9.722,25.016,23.027,38.729,33.078c41.312,30.281,101.44,28.432,150.36,28.432c58.764,0,300,0,300,0"/>
    <path class="line2" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M7.622,68.997
      c63.526,16.725,114.958,46.718,161.474,93.375c58.574,58.752,124.397,129.296,215.396,122.491
      c36.201-2.707,69.877-18.493,104.376-29.793c92.193-30.198,191.378-28.556,288.366-26.362
      c222.659,5.037,443.983,4.791,300,4.791"/>
    <path class="line3" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M10.628,398.243
      c98.501,20.268,202.926,9.114,295.368-30.252c110.86-47.21,211.1-122.805,335.982-128.2c91.338-3.945,184.697,28.631,270.85,55.526
      c52.736,15.855,159.623,42.183,197.969,42.183"/>
    <path class="line4" style={{opacity:"0.4",fill:"none",stroke:"#48cae4",strokeWidth:5,strokeMiterlimit:6}} d="M3.753,344.931
      c0,0,260.692-109.142,307.727-118.406c47.035-9.264,132.368-18.393,195.794,3.404s243.095,67.78,340.015,64.93
      c96.92-2.851,204.513-72.49,236.582-89.594c32.069-17.104,65.547-14.766,2.225-1.766"/>
    </svg>
</div>
        {/* <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/Lb7SXZ7.mp4"
            // src="https://i.imgur.com/FWeZenk.mp4"
          ></source>
        </video> */}
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            <MultiscrollText3/>
        {/* </div> */}
        <div className="relative z-50 col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star3} alt="Anubhav Singh Bassi" />
        </div>
        
    </div>
    </>
  );
}
