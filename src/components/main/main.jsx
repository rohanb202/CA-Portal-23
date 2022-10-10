import './main.css'
import NavBar from '../navbar/navbar';
import Nduty from '../New_Duty/Nduty';
import Brownie from "../New_brownie/Brownie_point";
import Contact from '../../Contact/Contact';
import sample from './Kashiyatra 2020 - Official Aftermovie - Rendition of the Retro - IIT(BHU) Varanasi.mp4'
import kashiyatra from "./kashiyatra.svg"
import {Children, useEffect, useState} from "react"

function Main(props){
    const [style, setStyle] = useState({});
    const [animeover, setAnimeover] = useState(0);

    const style1 = {
        height : "100px",
        width : "200px",
        top: "10px",
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
            <div class="home">
            {animeover && <div  class="head flex flex-col px-20 pb-14 min-h-20 w-100 mx-auto font-bold text-dark-700">
                <div id="ca" data-aos='fade-down-right' data-aos-duration="3000" class="flex place-content-start justify-items-end my-4 h-auto font-bold text-light-600">
                    <div class="flex-item text-white">CA</div>
                </div>
                <div id="portal" data-aos="fade-up-left" data-aos-duration="3000" class="flex place-content-end justify-items-end h-auto font-bold text-light-600">
                    <div class="flex-item text-white">PORTAL</div>
                </div>
            </div>}
                <video loop autoPlay muted><source type="video/mp4" src={sample}></source></video>
                <div class="kashiyatra" style={style}><img src={kashiyatra}></img></div>
                <div class="left-pattern"></div>
                <div class="right-pattern"></div>
            </div>
            
            <div class="outer-main">
            <NavBar />
            <div class="main">
            
                <div class="top">
                    <div class="hello">Hello!</div>
                    <div class="date">05 Februry</div>
                    <div class="bottombar"></div>
                </div>
                <div class="center">
                    <div class="center-top">
                        <div class="text">
                            Become A Campus Ambassador
                        </div>
                        <button class="apply">
                            <span class="button-text">Apply</span>
                        </button>
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

                        </div>
                    </div>
                    {props.children}
                    
                    
                </div>
            </div>
            <div class="sidepattern"></div>
            </div>
        </>
    )
}

export default Main;