import React, { useState, useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import PreEventsCss from "./preevents.module.css"
// import Nav from "../KY nav/nav";
import Star1 from "./Dharshan Raval-01.png";
import Star2 from "./Raftaar.png";
import StarCss from "./star.module.css"
// import { event } from "jquery";
import MultiscrollText from "./MultiscrollText";
import MultiscrollText2 from "./MultiscrollText2";
export default function Stars() {
//   const [navdisplay, setNavDisplay] = useState(0);

//   const { userInfo } = useContext(AuthContext);

  return (
    <>
    <div className={StarCss.StarCol}>
        <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/Lb7SXZ7.mp4"
            // src="https://i.imgur.com/FWeZenk.mp4"
          ></source>
        </video>
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            <MultiscrollText starName="Darshan Raval"/>
        {/* </div> */}
        <div className="relative z-50 col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star1} alt="Dharshan Raval" />
        </div>
        
    </div>
    <div className={StarCss.StarCol}>
        <video loop autoPlay muted playsinline>
          <source
            type="video/mp4"
            src="https://i.imgur.com/Lb7SXZ7.mp4"
            // src="https://i.imgur.com/FWeZenk.mp4"
          ></source>
        </video>
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            
        {/* </div> */}
        <div className="relative z-50 col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star2} alt="Raftaar" />
        </div>
        <MultiscrollText2 starName="Raftaar"/>
    </div>
    </>
  );
}
