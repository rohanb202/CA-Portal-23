import React, { useState, useContext } from "react";
// import AuthContext from "../../context/AuthContext";
// import PreEventsCss from "./preevents.module.css"
// import Nav from "../KY nav/nav";
import Star from "./Dharshan Raval-01.png"
import StarCss from "./star.module.css"
// import { event } from "jquery";
import MultiscrollText from "./MultiscrollText";
export default function Stars() {
//   const [navdisplay, setNavDisplay] = useState(0);

//   const { userInfo } = useContext(AuthContext);

  return (
    <>
    <div className={StarCss.StarCol}>
        {/* <div className="text-white col-lg-6 col-md-6 col-sm-12 text-6xl d-flex justify-content-between align-items-center ml-20"> */}
            <MultiscrollText />
        {/* </div> */}
        <div className="col-lg-6 col-md-6 col-sm-12 " >
            <img classname="img-fluid " src={Star} alt="Dharshan Raval" />
        </div>
        
    </div>
    </>
  );
}
