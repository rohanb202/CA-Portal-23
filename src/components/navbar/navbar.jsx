// import { Link } from 'react-router-dom'
import './navbar.css'
import kashiyatra from './KY Header Logo.svg'
import kylogo from "../main/KY Logo.svg"
import { useState } from 'react'


function NavBar() {
    const [navdisplay, setNavDisplay] = useState(0);

    function showNav(){
        document.querySelector(".outer-nav").classList.remove("hidden");
        setNavDisplay(1);
    }
    function closeNav(){
        document.querySelector(".outer-nav").classList.add("hidden");
        setNavDisplay(0);
    }


    return (
        <>
        <div class="mobile-nav">
                {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
                <button onClick={showNav}></button>
                <img src={kylogo}  alt="kylogo"></img>
            </div>
        <div class="outer-nav hidden" >
        <div class="sidebar">
            {navdisplay ? <button onClick={closeNav} class="cross"></button> : ""}
            <div class="title">
                <img src={kashiyatra}  alt="kashiyatra"></img>
                
            </div>
            <ul class="nav">
                <li>
                    <a href="/#">
                        <span>Dashboard</span>   
                    </a>
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
                    <a href="/#">
                        <span>Ambassador</span>
                    </a>
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

