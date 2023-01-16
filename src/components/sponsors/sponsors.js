import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Nav from "../KY nav/nav";
import "./sponsors.css";
// import Sdata from "./sponsors.json"
import tdata from "./title.json"
// import { event } from "jquery";
export default function Sponsors() {
  const [navdisplay, setNavDisplay] = useState(0);

  const { userInfo } = useContext(AuthContext);

  return (
    <div className="sponbg">
      <Nav></Nav>
      <section class="content-center Mainx">
      {tdata.map((data)=>{
          return(
            <>
            <div class="boxs">
          <div class="header">{data.title}</div>
          <div class="imgContainer">
            {data.src.map((sdata)=>{
              return(
                <>
                <div class="partners">
                <a href="" target="new">
                <img
                  class="imagexd"
                  src={sdata}
                />
              </a>
              <div class="subHeader"></div>
              </div>
              </>
              );
            })}
              </div>
        </div>
              
            </>

          );
        })}

      </section>
    </div>
  );
}
