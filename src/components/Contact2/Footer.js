import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.scss';

export default function Footer (){
    return(
        <div className='footer'>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://www.instagram.com/kashiyatra_iitbhu/?hl=en' className='content' style={{color:"white",textDecoration:"none"}}>Instagram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.instagram.com/kashiyatra_iitbhu/?hl=en" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://www.instagram.com/kashiyatra_iitbhu/?hl=en' className='content' style={{color:"white",textDecoration:"none"}}>Instagram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.instagram.com/kashiyatra_iitbhu/?hl=en" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://www.facebook.com/kashiyatra.IITBHU/' className='content' style={{color:"white",textDecoration:"none"}}>Facebook</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.facebook.com/kashiyatra.IITBHU/" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://www.facebook.com/kashiyatra.IITBHU/' className='content' style={{color:"white",textDecoration:"none"}}>Facebook</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.facebook.com/kashiyatra.IITBHU/" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://twitter.com/ky_iitbhu?lang=en' className='content' style={{color:"white",textDecoration:"none"}}>Twitter</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://twitter.com/ky_iitbhu?lang=en" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://twitter.com/ky_iitbhu?lang=en' className='content' style={{color:"white",textDecoration:"none"}}>Twitter</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://twitter.com/ky_iitbhu?lang=en" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://www.youtube.com/c/KashiyatraIITBHU/null' className='content' style={{color:"white",textDecoration:"none"}}>Youtube</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.youtube.com/c/KashiyatraIITBHU/null" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://www.youtube.com/c/KashiyatraIITBHU/null' className='content' style={{color:"white",textDecoration:"none"}}>Youtube</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.youtube.com/c/KashiyatraIITBHU/null" /></span>
               </div>
            </button>
            <div className='mobileicons' style={{marginBottom:"20px"}}>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons' ><SocialIcon url="https://www.instagram.com/kashiyatra_iitbhu/?hl=en" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.facebook.com/kashiyatra.IITBHU/" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://twitter.com/ky_iitbhu?lang=en" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://www.youtube.com/c/KashiyatraIITBHU/null" /></span>
            </div>

        </div>
       
    );
}
