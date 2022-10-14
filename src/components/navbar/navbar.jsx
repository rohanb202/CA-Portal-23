// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'
import './navbar.css'
import kashiyatra from './KY Header Logo.svg'
import kylogo from "../main/KY Logo.svg"
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import cross from "./cross.png"
// import title from './KY Header Logo.svg'

function NavBar() {
    const [navdisplay, setNavDisplay] = useState(0);

    function showNav(){
        document.querySelector(".mobile-nav-dropdown").style.display="flex"
        setNavDisplay(1);
    }
    function closeNav(){
        // console.log("HI")
        document.querySelector(".mobile-nav-dropdown").style.display="none"
        setNavDisplay(0);
    }


    return (
        <>
        <div class="mobile-nav">
                <i class="fa fa-bars bg-gray-300" aria-hidden="true"></i>
                <button onClick={showNav}></button>
                <img src={kylogo}></img>
        </div>
        <div class="mobile-nav-dropdown">
            <button onClick={closeNav} class="back-icon"></button>
            <div class="title">
                <img src={kashiyatra}  alt="kashiyatra"></img>
                
            </div>
            <ul class="nav">
                <li>
                <Link to='/'>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <a href="/#">
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/#">
                        <span>Event Registration</span>
                    </a>
                </li>
                <li>
                <Link to='/leaderboard'>
                    <span>Ambassador</span>
                    </Link>
                </li>
                <div class="logout">
                    <a href="#">
                        <span>Logout</span>
                    </a>
                </div>
            </ul>
        </div>
        <div class="outer-nav hidden" >
        <div class="sidebar">
            {navdisplay ? <button onClick={closeNav} class="cross"></button> : ""}
            <div class="title">
                <img src={kashiyatra}></img>
                
            </div>
            <ul class="nav">
                <li>
                <Link to='/'>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Event Registration</span>
                    </a>
                </li>
                <li>
                    <Link to='/leaderboard'>
                    <span>Ambassador</span>
                    </Link>

                        
                </li>
                <li>
                <a href="/#">
                        <span>Login</span>
                    </a>
                </li>
                <div class="logout">
                    <a href="/#">
                        <span>Logout</span>
                    </a>
                </div>
            </ul>
            {/* <div class="logout"><a href="/#">Log Out</a></div> */}
        </div>
        <div class="sideline1"></div>
        <div class="sideline2"></div>
        
        </div>
        </>
    )
}

export default NavBar;

