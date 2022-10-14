import './main.css'
import NavBar from '../navbar/navbar';
// import Nduty from '../New_Duty/Nduty';
// import Brownie from "../New_brownie/Brownie_point";
// import Contact from '../../Contact/Contact';
import sample from './Kashiyatra 2020 - Official Aftermovie - Rendition of the Retro - IIT(BHU) Varanasi.mp4'
import kashiyatra from "./kashiyatra.svg"
import { useEffect, useState} from "react"
import sidepattern from "../navbar/Super Side Pattern.svg"
// import kylogo from "./KY Logo.svg"
// import navicon from "./navicon.svg"
import back from "./back.svg"
import right from "./why CA_Mesa de trabajo 1 1-cropped.svg"
// import homepattern from "./home.svg"

function Main(props){
    const [style, setStyle] = useState({});
    const [animeover, setAnimeover] = useState(0);
    const [videoOn, setVideoOn] = useState(1);

    const style1 = {
        height : "100px",
        width : "200px",
        top: "10px",
    }


    function handleClick(){
        setVideoOn(0);
        console.log(videoOn);
        document.querySelector(".home").style.display = "none";
    }
    
    useEffect (()=>{
        setTimeout(()=>{
            setStyle(style1);
        }, 1000);
        setTimeout(()=>{
            setAnimeover(1)
        }, 7000);
    })

    return(
        <>
            {videoOn===1 && <div class="home">
            {/* {animeover===1 && <div  class="head flex flex-col min-h-20 w-100 mx-auto font-bold text-dark-700">
                <div id="ca" data-aos='fade-down-right' data-aos-duration="3000" class="flex place-content-start justify-items-end text-light-600">
                    <div class="text-white">CA</div>
                </div>
                <div id="portal" data-aos="fade-up-left" data-aos-duration="3000" class="flex place-content-end justify-items-end text-light-600">
                    <div class="text-white">PORTAL</div>
                </div> */}
                <button onClick={handleClick} class="start">
                START
                </button>
            {/* </div>} */}
            
                <video loop autoPlay muted><source type="video/mp4" src={sample}></source></video>
                <div class="kashiyatra"><img src={kashiyatra} alt="kashiyatra"></img></div>
                <div class="wrapper"><div class="left-pattern"></div></div>
                <div class="wrapper"><div class="right-pattern"></div></div>
            </div>}

            {videoOn ? "" : <div class="home2">
            {/* <div class="mobile-nav">
                <i class="fa fa-bars" aria-hidden="true"></i>
                <button onClick={()=>{}}></button>
                <img src={kylogo}></img>
            </div> */}

            <NavBar />
            <div class="outer-main">
            
            <div class="main">
            
                <div class="top">
                    <div class="hello">Hello!</div>
                    <div class="date">05 Februry</div>
                    <div class="bottombar"></div>
                </div>
                <div class="center">
                    <div class="center-top">
                        <img src={back}  alt="back"></img>
                        <div class="center-top-content">
                            <div class="text">
                                Become A Campus Ambassador
                            </div>
                            <button class="apply">
                                <span class="button-text">Apply</span>
                            </button>
                        </div>
                        
                    </div>
                    <div class="center-bottom">
                        <div class="left">
                            <div class="left-title">What Is Campus Ambassador?</div>
                            <div class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.

per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                            </div>
                        </div>
                        <div class="right">
                            <img src={right}  alt="right"></img>
                        </div>
                    </div>
                    {props.children}
                    
                    
                </div>
            </div>
            <div class="sidepattern"><img src={sidepattern} alt="sidepattern"></img></div>
            </div>
            </div>}
        </>
    )
}

export default Main;