import NavBar from "../navbar/navbar"
import styled, {keyframes} from "styled-components"
import aos from "aos";
import "aos/dist/aos.css";
import "../../index"

function Title() {

    const arr = ["K", "A", "S", "H", "I", "Y", "A", "T", "R", "A"];
    const arr2 = ["2", "0", "2", "3"];


    // setTimeout(() => {
        
    //     // document.getElementById("ca").classList.remove("hidden");
    //     aos.init({duration: 5000})
    // }, 5000);
    

    return (
        <HeaderStyled>
            <div class="head flex align-middle flex-row justify-center px-20 py-2 mt-20 min-h-20 w-100 mx-auto font-bold text-dark-700 z-0">
                <Wrapper>
                    {arr.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </Wrapper>
                </div>
                <div  class="head flex align-middle flex-row justify-center  px-20 py-2 min-h-20 w-100 mx-auto font-bold text-dark-700">
                <Wrapper>
                    {arr2.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </Wrapper>
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

export default Title;