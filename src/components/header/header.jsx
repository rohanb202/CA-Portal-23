import NavBar from "../navbar/navbar"
import styled, {keyframes} from "styled-components"
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index"
import {useEffect} from 'react'

function Header() {    

    return (
        <HeaderStyled>
            <NavBar />
                <div  class="head flex flex-col px-20 pb-14 min-h-20 w-100 mx-auto font-bold text-dark-700">
                <div id="ca" data-aos='fade-down-right' data-aos-duration="2000" class="flex place-content-start justify-items-end my-4 h-auto font-bold text-dark-600">
                    <div class="flex-item">CA</div>
                </div>
                <div id="portal" data-aos="fade-up-left" data-aos-duration="2000" class="flex place-content-end justify-items-end h-auto font-bold text-dark-600">
                    <div class="flex-item">PORTAL</div>
                </div>
            </div>
        </HeaderStyled>
    )
}

const animation = keyframes`
    0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(10px);}
    75% {opacity: 1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(10px);}
    100% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
`
const HeaderStyled = styled.header`
    min-height: 100vh;
    width: 100%;
    ${'' /* background-image: url(${bg}); */}
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
`

const Wrapper = styled.span`
    display: inline-block;
    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    span:nth-child(1){
        animation-delay: 0.1s;
    }
    span:nth-child(2){
        animation-delay: 0.2s;
    }
    span:nth-child(3){
        animation-delay: 0.3s;
    }
    span:nth-child(4){
        animation-delay: 0.4s;
    }
    span:nth-child(5){
        animation-delay: 0.5s;
    }
    span:nth-child(6){
        animation-delay: 0.6s;
    }
    span:nth-child(7){
        animation-delay: 0.7s;
    }
    span:nth-child(8){
        animation-delay: 0.8s;
    }
    span:nth-child(9){
        animation-delay: 0.9s;
    }
    span:nth-child(10){
        animation-delay: 1s;
    }
`

export default Header;