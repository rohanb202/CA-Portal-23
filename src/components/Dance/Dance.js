import React,{useState} from "react";
import NavBar from "../navbar/navbar";
import kylogo from "./img/kylogo.svg";
import Modal from 'react-modal';
import DanceCss from "./Dance.module.css";
import img1 from "./img/unsplash_GRDpPpKczdY.svg"
import { Link } from "react-router-dom";
import eventData from "./events.json";
import Nav from "../NewNavbar/Nav";


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding:'0px'
    },
};

// Modal.setAppElement('#root');

export default function Dance(){

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      console.log(eventData);
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
       <Nav />
        <div className={DanceCss.DanceColumns}>
        <div className={DanceCss.DanceCard} >
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2" style={{color:"#06122E"}}>{eventData.Dance[0].eventName}</div>
            <div className="font-bold text-xl mb-2" style={{color:"#06122E"}}>3 PM, Friday</div>
            <div className={DanceCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md " style={{color:"#06122E"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">

            <button type="button" class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">Explore </button>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div className={DanceCss.eventCardTitle}>{eventData.Dance[0].eventName}</div>
            <div className={DanceCss.eventCardTitle}>3 PM, Friday</div>
          </div>
          <div className="flex items-center justify-center mt-5 mb-5">
            <button className={DanceCss.DanceCardButton}>
            Register
            </button>
          </div>
      </div>
      <p className={DanceCss.eventCardInsideText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
        <div className={DanceCss.DanceCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2" style={{color:"#06122E"}}>Duo Dance</div>
            <div className="font-bold text-xl mb-2" style={{color:"#06122E"}}>3 PM, Friday</div>
            <div className={DanceCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md " style={{color:"#06122E"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
            <button type="button" class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal1">Explore </button>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
  id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div className={DanceCss.eventCardTitle}>Duo Dance</div>
            <div className={DanceCss.eventCardTitle}>3 PM, Friday</div>
          </div>
          <div className="flex items-center justify-center mt-5 mb-5">
          <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="px-4 py-3 bg-[#06122E] text-[#F74061] font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" type="button">Select Team Members </button>

<div id="dropdownDivider" class="hidden z-30 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
      </li>
    </ul>
</div>
          </div>
      </div>
      <p className={DanceCss.eventCardInsideText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
        <div className={DanceCss.DanceCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2" style={{color:"#06122E"}}>Group Dance</div>
            <div className="font-bold text-xl mb-2" style={{color:"#06122E"}}>3 PM, Friday</div>
            <div className={DanceCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md " style={{color:"#06122E"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
            <button type="button" class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal2">Explore </button>


<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
  id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div className={DanceCss.eventCardTitle}>Group Dance</div>
            <div className={DanceCss.eventCardTitle}>3 PM, Friday</div>
          </div>
          <div className="flex items-center justify-center mt-5 mb-5">
          <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="px-4 py-3 bg-[#06122E] text-[#F74061] font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" type="button">Select Team Members </button>

<div id="dropdownDivider" class="hidden z-30 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">5</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">6</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">7</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">8</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">9</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">10</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">11</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">12</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">13</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">14</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">15</a>
      </li>
    </ul>
</div>
          </div>
      </div>
      <p className={DanceCss.eventCardInsideText}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        <br/><br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br/><br/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
       
        
        </div>
        
        </>
    );
}