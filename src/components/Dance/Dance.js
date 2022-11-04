import * as React from 'react';
import {useState} from "react";

import kylogo from "./img/kylogo.svg";

import DanceCss from "./Dance.module.css";
import img1 from "./img/unsplash_GRDpPpKczdY.svg"
import { Link } from "react-router-dom";
import eventData from "./events.json";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Dance(){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [category,setCategory]=useState([
    {
      "eventId": "2",
      "eventName": "CUT-A-RUG",
      "eventDetails": "Natraj is the name of Shiva that symbolizes dance: the dynamic and static divine flow of energy. It lets you dive deep into the oceans, swim without hurdles and breathe freely. So, loosen up yourself and go solo on the stage as Kashiyatra unveils to you “Cut-A-Rug - the Solo Dance Competition",
      "maxMembers": 1,
      "minMembers": 1,
      "parentEvent": 2
  },
  {
      "eventId": "3",
      "eventName": "ECSTASY",
      "eventDetails": "Come into an alliance with your partner and arm yourselves with all the grooves and moves, and prove it to us that you got what it takes to be a doublet for each other dancing against the world.",
      "maxMembers": 2,
      "minMembers": 2,
      "parentEvent": 2
  },
  {
      "eventId": "4",
      "eventName": "BLISS",
      "eventDetails": "“Talent is not rare, but the opportunity to show case is.” Kashiyatra unfolds to you “Bliss - the Group Dance Competition” where synchronicity, energy and creativity unfold themselves and the stage echoes with the thud of your steps, diverse with every leg yet unified with every beat.",
      "maxMembers": 15,
      "minMembers": 5,
      "parentEvent": 2
  }
])

console.log(category)

function handleEventClick (e){
  const eventCategory=e.target.innerText;
  // console.log(eventCategory)
  setCategory(eventData[eventCategory]) 
  // console.log(eventData[eventCategory])
}

// console.log(category)
    const [navdisplay, setNavDisplay] = useState(0);
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
      // console.log(eventData);
    return(
        <>
        <div className={DanceCss.mobilenav}>
          <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
          <button onClick={showNav}></button>
          <img src={kylogo} alt="ky-23"></img>
        </div>
        <div id="mobilenavdropdown" className={DanceCss.mobilenavdropdown}>
          <button onClick={closeNav} className={DanceCss.backicon}></button>
          <div className={DanceCss.title}>
            <img src={kylogo} alt="kashiyatra"></img>
          </div>
          <ul className={DanceCss.nav}>
            <li>
              <Link to="/">TEAM</Link>
            </li>
            <li>
              <Link to="/Dance">EVENTS</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={DanceCss.outernav}>
          <div className={DanceCss.navbar}>
            <Link to="/">
              <div className={DanceCss.kylogo}></div>
            </Link>
            <div className={DanceCss.navlist}>
              <ul className={DanceCss.navlistul}>
                <li className={DanceCss.navitem}>
                  <Link to="/">TEAM</Link>
                </li>
                <li className={DanceCss.navitem}>
                  <Link to="/Dance">EVENTS</Link>
                </li>
                <li className={DanceCss.navitem}>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={DanceCss.kyprofile}></div>
          </div>
        </div>
       
        <nav>
            <div className="flex scrollbar-hide px-10 mt-5 mb-5 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll ">
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Masquerades</h3>
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Dance</h3>
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Indian Music</h3>
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Literary</h3>
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Quiz</h3>
                
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Fine Arts</h3>
                <h3 className={DanceCss.btnCss} onClick={handleEventClick}>Western Music</h3>
            </div>
            
        </nav>
        

        <div className={DanceCss.DanceColumns}>
        
        {category.map((event)=>{
        return (
          <div className={DanceCss.DanceCard}>
          <img className="w-full" src={img1} alt="Sunset in the mountains" />
           <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2" style={{color:"#06122E"}}>{event.eventName}</div>
            <div className="font-bold text-xl mb-2" style={{color:"#06122E"}}>3 PM, Friday</div>
            <div className={DanceCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md " style={{color:"#06122E"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">

            <button type="button" class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target={"#exampleModal"+event.eventId}>Explore </button>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
  id={"exampleModal"+event.eventId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none ">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
      <div
        class="modal-header flex flex-shrink-0 p-0 items-center justify-between bg-[#F74061]">
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
      </div>
      <div class="modal-body relative p-4 text-[#06122E] bg-[#F74061]">
      <div className={DanceCss.eventCardExpandedBorder}>
          <div>
            <div className={DanceCss.eventCardTitle}>{event.eventName}</div>
            <div className={DanceCss.eventCardTitle}>3 PM, Friday</div>
          </div>
          <div className="flex items-center justify-center mt-5 mb-5">
            {event.maxMembers===event.minMembers?<button className={DanceCss.DanceCardButton}>
            Register
            </button>:<>
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        class="px-4 py-3 bg-[#06122E] text-[#F74061] font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
      >
        Select Members
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>1</MenuItem>
        <MenuItem onClick={handleClose}>2</MenuItem>

      </Menu>
            </>
            }
            
          </div>
      </div>
      <p className={DanceCss.eventCardInsideText}>
        {event.eventDetails}
        </p>
        <div
        class="flex items-center justify-center">
        <button type="button" class="px-20 py-3 mt-2 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md
          hover:bg-[#06124F] hover:shadow-lg
          focus:bg-[#06124F] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#06124F] active:shadow-lg transition duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
      
    </div>
  </div>
</div>
            </div>
            
        </div>
          </div>        
        )})}

        
       
        
        </div>
        
        </>
    );
}