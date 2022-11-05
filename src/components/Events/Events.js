import * as React from "react";
import { useState, useEffect, useContext } from "react";

import kylogo from "./img/kylogo.svg";

import EventsCss from "./Events.module.css";
import img1 from "./img/unsplash_GRDpPpKczdY.svg";
import eventData from "./events.json";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AuthContext from "../../context/AuthContext";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../utils/useAxiosPrivate";

export default function Events() {
  const [teamNumber, setTeamNumber] = useState(0);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#F74061",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = (e) => {
    setOpen1(true);

    console.log(e.target.innerText);
    setTeamNumber(Number(e.target.innerText));
  };
  const handleClose1 = (e) => {
    setAnchorEl(null);
    console.log(e.target.innerText);
    setTeamNumber(Number(e.target.innerText));
    setOpen1(false);
  };
  const handleClose2 = (e, n) => {
    setAnchorEl(null);
    setTeamNumber(Number(n));
    setOpen1(false);
  };

  const { userInfo } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [category, setCategory] = useState(Object.values(eventData)[0]);
  const axiosPrivate = useAxiosPrivate();

  console.log(category);

  function handleEventClick(e) {
    const eventCategory = e.target.innerText;
    // console.log(eventCategory)
    setCategory(eventData[eventCategory]);
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

  const [eventToRegister, setEventToRegister] = useState(null);
  const [memberList, setMemberList] = useState({});
  const requestRegistration = async () => {
    
  }
  return (
    <div className={EventsCss.eventsBody}>

      {/* MODAL DIV WITH MULTIPLE INPUT FIELDS ACCORDING TO NUMBER OF TEAM MEMBERS */}
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
        id={"exampleModal69" + teamNumber}
        tabindex="-1"
        aria-labelledby="exampleModal69Label"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto pointer-events-none ">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
            <div class="modal-body relative p-4 text-[#06122E] bg-[#F74061] flex items-center justify-center">
              <div class="w-full max-w-xs flex items-center justify-center">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  {Array(teamNumber)
                    .fill(null)
                    .map((_, index) => {
                      return (
                        <div class="mb-2">
                          <label
                            class="block text-gray-700 text-sm font-bold mb-1"
                            for="username"
                          >
                            {index === 0
                              ? "Team Leader (You)"
                              : `Team Member ${index}`}
                          </label>
                          {
                            (index === 0)?(
                              <>
                              <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"

                                type="text"
                                value={userInfo.ky_id}
                                placeholder="KY ID"
                                disabled={true}
                              />
                              </>
                            ):(
                              <>
                              <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="KY ID"
                                name={index}
                              />
                              </>
                            )
                          }
                        </div>
                      );
                    })}

                  <div class="flex items-center justify-center">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button" data-bs-dismiss="modal"
                      onClick={requestRegistration}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade fixed top-[25%]  hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
        id={"exampleModalRegister" + teamNumber}
        tabindex="-1"
        aria-labelledby="exampleModalRegisterLabel"
        aria-hidden="true">

  <div class="modal-dialog relative inset-0 m-auto w-auto pointer-events-none ">
          <div class="modal-content border-none relative inset-0 m-auto flex flex-col w-full outline-none text-current ">
            <div class="modal-body relative p-4 text-[#06122E] bg-white flex items-center justify-center">
              <div class="w-full max-w-xs flex items-center justify-center ">
                <h3 class="font-medium leading-tight text-xl mt-0 mb-2 mr-4  text-[#06122E] flex items-center justify-center">
                  You are going to register for this event
                </h3>

                <div class="flex items-center justify-center ml-4">
                  <form class="flex items-center justify-center">
                    {Array(teamNumber)
                      .fill(null)
                      .map((_, index) => {
                        return (
                          <div class="mb-2">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-1"
                              for="username"
                            >
                              {index === 0
                                ? "Team Leader (You)"
                                : `Team Member ${index}`}
                            </label>
                            { index == 0 ? (
                              <>
                                <input
                                  class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="username"
                                  type="text"
                                  placeholder="KY ID"
                                  value={userInfo.ky_id}
                                  disabled={true}
                                />
                              </>
                            ):(
                              <>
                                <input
                                  class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="username"
                                  type="text"
                                  placeholder="KY ID"
                                />
                              </>
                            )}
                          </div>
                        );
                      })}

                    <div class="flex items-center justify-center">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
                        type="button" data-bs-dismiss="modal"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

      

      <div className={EventsCss.eventsBody}>
        <div className={EventsCss.mobilenav}>
          <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
          <button onClick={showNav}></button>
          <img src={kylogo} alt="ky-23"></img>
        </div>
        <div id="mobilenavdropdown" className={EventsCss.mobilenavdropdown}>
          <button onClick={closeNav} className={EventsCss.backicon}></button>
          <div className={EventsCss.title}>
            <img src={kylogo} alt="kashiyatra"></img>
          </div>
          <ul className={EventsCss.nav}>
            <li>
              <Link to="/">TEAM</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/ca">CA</Link>
            </li>
            {userInfo ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={EventsCss.outernav}>
          <div className={EventsCss.navbar}>
            <Link to="/">
              <div className={EventsCss.kylogo}></div>
            </Link>
            <div className={EventsCss.navlist}>
              <ul className={EventsCss.navlistul}>
                <li className={EventsCss.navitem}>
                  <Link to="/">TEAM</Link>
                </li>
                <li className={EventsCss.navitem}>
                  <Link to="/events">EVENTS</Link>
                </li>
                <li className={EventsCss.navitem}>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={EventsCss.kyprofile}></div>
          </div>
        </div>

        <nav>
          <div className="flex items-center justify-center scrollbar-hide px-10 mt-5 mb-5 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll ">
            {/* <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Masquerades
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Events
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Indian Music
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Literary
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Quiz
            </h3>

            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Fine Arts
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              Western Music
            </h3> */}
            {Object.keys(eventData).map((category)=><><h3 className={EventsCss.btnCss} onClick={handleEventClick}>{category}</h3></>)}
          </div>
        </nav>

        <div className={EventsCss.EventsColumns}>
          {category.map((event) => {
            return (
              <div className={EventsCss.EventsCard}>
                <img
                  className="w-full"
                  src={event.image_URL}
                  alt="Sunset in the mountains"
                />
                <div
                  className="mt-1 text-white"
                  style={{ backgroundColor: "#F74061" }}
                >
                  <div
                    className="font-bold text-xl mb-2 mt-2"
                    style={{ color: "#06122E" }}
                  >
                    {event.eventName}
                  </div>
                  <div
                    className="font-bold text-xl mb-2"
                    style={{ color: "#06122E" }}
                  >
                    {event.maxMembers==1?"Individual Event":"Team Event"}
                  </div>
                  <div className={EventsCss.eventCardBorder}></div>
                  <p
                    className="text-base text-white mt-3 text-md "
                    style={{ color: "#06122E" }}
                  >
                    {event.eventDetails.substring(0,150)}.....
                  </p>
                  <div className="flex items-center justify-center mt-5 mb-5">
                    <button
                      type="button"
                      class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModal" + event.eventId}
                      onClick={()=>{setEventToRegister(event)}}
                    >
                      Explore{" "}
                    </button>

                    <div
                      class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
                      id={"exampleModal" + event.eventId}
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog relative w-auto pointer-events-none ">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
                          <div class="modal-header flex flex-shrink-0 p-0 items-center justify-between bg-[#F74061]">
                            <img
                              className="w-full"
                              src={event.image_URL}
                              alt="Sunset in the mountains"
                            />
                          </div>
                          <div class="modal-body relative p-4 text-[#06122E] bg-[#F74061]">
                            <div className={EventsCss.eventCardExpandedBorder}>
                              <div>
                                <div className={EventsCss.eventCardTitle}>
                                  {event.eventName}
                                </div>
                                <div className={EventsCss.eventCardTitle}>
                                  {event.maxMembers==1?"Individual Event":"Team Event"}
                                </div>
                              </div>
                              <div className="flex items-center justify-center mt-5 mb-5">

                                {userInfo?(
                                  <>
                                {/* Register, Select Team Members or Enter Team members button in modal */}
                                {event.maxMembers === event.minMembers ? (
                                  <>
                                    <button
                                      type="button"
                                      class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                                      data-bs-toggle="modal"
                                      data-bs-target={
                                        "#exampleModalRegister" + teamNumber
                                      }
                                      onClick={(e) => handleClose2(e, event.maxMembers)}
                                    >
                                      {" "}
                                      {event.maxMembers == 1
                                        ? "Register"
                                        : "Enter Team Members"}
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      id={
                                        "demo-positioned-button" + event.eventId
                                      }
                                      aria-controls={
                                        open
                                          ? `demo-positioned-menu${event.eventId}`
                                          : undefined
                                      }
                                      aria-haspopup="true"
                                      aria-expanded={open ? "true" : undefined}
                                      onClick={handleClick}
                                      class="px-4 py-3 bg-[#06122E] text-[#F74061] font-medium text-l leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                      Select Members
                                    </Button>
                                    <Menu
                                      id={
                                        "demo-positioned-menu" + event.eventId
                                      }
                                      aria-labelledby={
                                        "demo-positioned-button" + event.eventId
                                      }
                                      anchorEl={anchorEl}
                                      open={open}
                                      onClose={handleClose}
                                      anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                      }}
                                      transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                      }}
                                    >
                                      {Array(
                                        event.maxMembers - event.minMembers + 1
                                      )
                                        .fill(null)
                                        .map((_, index) => {
                                          return (
                                            <MenuItem>
                                              <div>
                                                <button
                                                  type="button"
                                                  class="px-4 py-3 bg-[#06122E] text-[#F74061] font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                                                  data-bs-toggle="modal"
                                                  data-bs-target={
                                                    "#exampleModal69" +
                                                    teamNumber
                                                  }
                                                  onClick={handleClose1}
                                                >
                                                  {event.minMembers + index}
                                                </button>
                                              </div>
                                            </MenuItem>
                                          );
                                        })}
                                    </Menu>
                                  </>
                                )}
                                  </>
                                ):(
                                  <>
                                  <Link to="/login">
                                  <button
                                      type="button"
                                      class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                                      data-bs-toggle="modal"
                                    >
                                      {" "}
                                      Login
                                    </button>
                                    </Link>
                                  </>
                                )}

                              </div>
                            </div>
                            <p className={EventsCss.eventCardInsideText}>
                              {event.eventDetails}
                            </p>
                            <div class="flex items-center justify-center">
                              <button
                                type="button"
                                class="px-20 py-3 mt-2 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md
          hover:bg-[#06124F] hover:shadow-lg
          focus:bg-[#06124F] focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-[#06124F] active:shadow-lg transition duration-150
          ease-in-out"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
