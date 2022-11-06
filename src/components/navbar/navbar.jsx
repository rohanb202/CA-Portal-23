// import { Link } from 'react-scroll'
import { Link } from "react-router-dom";
import "./navbar.css";
import kashiyatra from "./KY Header Logo.svg";
import kylogo from "../main/KY Logo.svg";
import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import cross from "./cross.png"
// import title from './KY Header Logo.svg'
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

function NavBar() {
  let { userInfo, logoutUser } = useContext(AuthContext);

  const [navdisplay, setNavDisplay] = useState(0);

  function showNav() {
    document.querySelector(".mobile-nav-dropdown").style.display = "flex";
    setNavDisplay(1);
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }
  function closeNav() {
    // console.log("HI")
    document.querySelector(".mobile-nav-dropdown").style.display = "none";
    setNavDisplay(0);
    window.onscroll = function () {};
  }

  return (
    <>
      <div className="mobile-nav">
        <i className="bg-gray-300 fa fa-bars" aria-hidden="true"></i>
        <button onClick={showNav}></button>
        <img src={kylogo} alt="ky-23"></img>
      </div>
      <div className="mobile-nav-dropdown">
        <button onClick={closeNav} className="back-icon"></button>
        <div className="title">
          <img src={kashiyatra} alt="kashiyatra"></img>
        </div>
        <ul className="nav">
          <li onClick={closeNav}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          {userInfo && (
            <li onClick={closeNav}>
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            </li>
          )}
          {userInfo && (
            <li onClick={closeNav}>
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            </li>
          )}

          <li onClick={closeNav}>
              <Link to="/events">
                  <span>Event Registration</span>

              </Link>
            </li>

          {userInfo && (
            <li onClick={closeNav}>
              <Link to="/payment">
                <span>Payments</span>
              </Link>
            </li>
          )}

          {
            (userInfo==null || (userInfo?.ca_id==null))?(
              <li onClick={closeNav}>
                <Link to="/ca">
                  <span>Ambassador</span>
                </Link>
              </li>
            ): (
              <li onClick={closeNav}>
                <Link to="/ca/leaderboard">
                  <span>Ambassador</span>
                </Link>
              </li>
            )
          }

          {userInfo === null && (
            <>
              <li>
                <Link onClick={closeNav} to="/login">
                  <span>Login</span>
                </Link>
              </li>
            </>
          )}
          {userInfo && (
            <>
              <div class="logout">
                <Link to="/">
                  <span
                    onClick={() => {
                      closeNav();
                      logoutUser();
                    }}
                  >
                    Logout
                  </span>
                </Link>
              </div>
            </>
          )}
        </ul>
      </div>
      <div className="hidden outer-nav">
        <div className="sidebar">
          {navdisplay ? (
            <button onClick={closeNav} className="cross"></button>
          ) : (
            ""
          )}
          <div className="title">
            <img src={kashiyatra} alt="kashiyatra"></img>
          </div>
          <ul className="nav">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            {userInfo && (
              <li>
                <Link to="/dashboard">
                  <span>Dashboard</span>
                </Link>
              </li>
            )}
            {userInfo && (
              <li>
                <Link to="/profile">
                  <span>Profile</span>
                </Link>
              </li>
            )}

            <li>
            <Link to="/events">
              <span>Event Registration</span>
            </Link>
          </li>
            {userInfo && (
              <li>
                <Link to="/payment">
                  <span>Payments</span>
                </Link>
              </li>

            )}
            {
            (userInfo==null || (userInfo?.ca_id==null))?(
              <li>
                <Link to="/ca">
                  <span>Ambassador</span>
                </Link>
              </li>
            ): (
              <li>
                <Link to="/ca/leaderboard">
                  <span>Ambassador</span>
                </Link>
              </li>
            )
          }
            {userInfo === null && (
              <>
                <li>
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </li>
              </>
            )}
            {userInfo && (
              <>
                <div className="logout">
                  <Link to="/">
                    <span onClick={logoutUser}>Logout</span>
                  </Link>
                </div>
              </>
            )}
          </ul>
          {/* <div className="logout"><a href="/#">Log Out</a></div> */}
        </div>
        <div className="sideline1"></div>
        <div className="sideline2"></div>
      </div>
    </>
  );
}

export default NavBar;
