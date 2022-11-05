import * as React from "react";
import { useState, useEffect, useContext } from "react";

import kylogo from "./img/kylogo.svg";

import EventsCss from "./Events.module.css";
import img1 from "./img/unsplash_GRDpPpKczdY.svg";
import { Link } from "react-router-dom";
import eventData from "./events.json";
import AuthContext from "../../context/AuthContext";

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

  const [category, setCategory] = useState([
    {
      eventId: 3545,
      eventName: "RANGBAAZI",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        "“Art is the only way to run away without leaving home” and “Colours are the\r\nbest form of expression”. Wouldn't you agree? Show us your creativity by using\r\ntooth brushes, your fingers etc.to paint but without using a pencil to sketch and\r\na brush to paint. Can you beat the twist?",
      maxMembers: 2,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3145,
      eventName: "RAPID FIRE",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        "“The trouble is you think you have time”-Buddha. Well, you don't! This contest\r\npitches your creativity against the cruel boundaries of time. We decide the rules\r\nof the game. We choose when the bell rings. However, it's only you who sets\r\nthe limits of your imagination and creativity",
      maxMembers: 4,
      minMembers: 4,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3245,
      eventName: "SPOIL THE TEES!",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        '"Daag achche hote hai" Get those spotless white T-Shirts and spoil them. Yeah,\r\nyou heard it right, put colour on them, soil them, and spoil them. Use paints.\r\nUse brushes. Use your hands. It doesn\'t matter. Just funk them up. Add life to\r\nthose dull whites. Coz life is too short for boring T-Shirts',
      maxMembers: 3,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3345,
      eventName: "FACE PAINTING",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        "Ever thought about art in a quirky way? That it is not always a serious issue of\r\nexpression of emotions but away to have fun? If yes, then paint your buddy's\r\nface on the given theme to nick prizes away!",
      maxMembers: 2,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3445,
      eventName: "VASTRA SHILP",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        '"Fashion is art, and you are the canvas"- Velvet Paper. So, wake up the Coco\r\nChanel inside you and let your creativity do the talking. Weave out art and style\r\nwith the fabrics of your imagination and yeah – “paper”.',
      maxMembers: 4,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3845,
      eventName: "INK IT!",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        "Design a unique tattoo with some fantastic ideas, artwork and style. Get ready\r\nto define the concept of body art!",
      maxMembers: 2,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3645,
      eventName: "SOAP CARVING",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        '"l saw the angel in the marble and carved until I set him free." - Michelangelo.\r\nThough carving stone is tough, what\'s easy is carving soap. Moreover, that\'s\r\nwhy we give you the "soap". Just carve your creativity out on these mundane\r\npieces of soap and transform them into pieces of art.',
      maxMembers: 2,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
    {
      eventId: 3745,
      eventName: "Live Sketching",
      image_URL: "https://i.imgur.com/kDZ15vU.jpg",
      eventDetails:
        "Individual event where participants need to sketch a scene in front of\r\nthem.",
      maxMembers: 1,
      minMembers: 1,
      parentEvent: {
        parentEventId: 8,
        categoryName: "TOOLIKA",
      },
    },
  ]);

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
  return (
    <div className={EventsCss.eventsBody}>
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
                              ? "Team Leader"
                              : `Team Member ${index}`}
                          </label>
                          <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="KY ID"
                          />
                        </div>
                      );
                    })}

                  <div class="flex items-center justify-center">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      data-bs-dismiss="modal"
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

      <div
        class="modal fade fixed top-[25%]  hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
        id={"exampleModalRegister" + teamNumber}
        tabindex="-1"
        aria-labelledby="exampleModalRegisterLabel"
        aria-hidden="true"
      >
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
                                ? "Team Leader"
                                : `Team Member ${index}`}
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              placeholder="KY ID"
                            />
                          </div>
                        );
                      })}

                    <div class="flex items-center justify-center">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        data-bs-dismiss="modal"
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
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              TOOLIKA
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              SAMWAAD
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              NATRAJ
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              MIRAGE
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              ENQUIZTA
            </h3>

            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              CROSSWINDZ
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              BANDISH
            </h3>
            <h3 className={EventsCss.btnCss} onClick={handleEventClick}>
              ABHINAY
            </h3>
          </div>
        </nav>

        <div className={EventsCss.EventsColumns}>
          {category.map((event) => {
            return (
              <div className={EventsCss.EventsCard}>
                <img
                  className="w-full"
                  src={img1}
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
                    3 PM, Friday
                  </div>
                  <div className={EventsCss.eventCardBorder}></div>
                  <p
                    className="text-base text-white mt-3 text-md "
                    style={{ color: "#06122E" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem
                    praesentium nihil.
                  </p>
                  <div className="flex items-center justify-center mt-5 mb-5">
                    <button
                      type="button"
                      class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                      data-bs-toggle="modal"
                      data-bs-target={"#exampleModal" + event.eventId}
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
                              src={img1}
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
                                  3 PM, Friday
                                </div>
                              </div>
                              <div className="flex items-center justify-center mt-5 mb-5">
                                {event.maxMembers === event.minMembers ? (
                                  <>
                                    <button
                                      type="button"
                                      class="px-20 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                                      data-bs-toggle="modal"
                                      data-bs-target={
                                        "#exampleModalRegister" + teamNumber
                                      }
                                      onClick={(e) =>
                                        handleClose2(e, event.maxMembers)
                                      }
                                    >
                                      {" "}
                                      {event.maxMembers === 1
                                        ? "Register"
                                        : "Enter Team Members"}
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <div class="flex justify-center">
                                      <div>
                                        <div class="dropdown relative">
                                          <button
                                            class="
          dropdown-toggle
          px-8
          py-4
          bg-[#06122E]
          text-[#F74061]
          font-medium
          text-l
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-[#06124F] hover:shadow-lg
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                                            type="button"
                                            id={
                                              "dropdownMenuButton1" +
                                              event.eventId
                                            }
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            Select Members
                                            <svg
                                              aria-hidden="true"
                                              focusable="false"
                                              data-prefix="fas"
                                              data-icon="caret-down"
                                              class="w-2 ml-2"
                                              role="img"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 320 512"
                                            ></svg>
                                          </button>
                                          <ul
                                            class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-[#06122E]
          text-[#F74061]
          z-50
          float-left
          py-2
          px-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                                            aria-labelledby={
                                              "dropdownMenuButton1" +
                                              event.eventId
                                            }
                                          >
                                            {Array(
                                              event.maxMembers -
                                                event.minMembers +
                                                1
                                            )
                                              .fill(null)
                                              .map((_, index) => {
                                                return (
                                                  <li
                                                    type="button"
                                                    class="dropdown-toggle
                                                  px-6
                                                  py-2.5
                                                  bg-[#06122E]
                                                  text-[#F74061]
                                                  font-medium
                                                  text-xl
                                                  leading-tight
                                                  uppercase
                                                  rounded
                                                  shadow-md
                                                  hover:bg-blue-700 hover:shadow-lg
                                                  transition
                                                  duration-150
                                                  ease-in-out
                                                  flex
                                                  items-center
                                                  whitespace-nowrap"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={
                                                      "#exampleModal69" +
                                                      teamNumber
                                                    }
                                                    onClick={handleClose1}
                                                  >
                                                    {event.minMembers + index}
                                                  </li>
                                                );
                                              })}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
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
