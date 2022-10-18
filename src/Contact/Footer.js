import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.scss';

export default function Footer (){
    return(
        <div className='footer'>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://instagram.com' className='content' style={{color:"white",textDecoration:"none"}}>Instagram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://instagram.com" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://instagram.com' className='content' style={{color:"white",textDecoration:"none"}}>Instagram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://instagram.com" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://facebook.com' className='content' style={{color:"white",textDecoration:"none"}}>Facebook</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://facebook.com" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://facebook.com' className='content' style={{color:"white",textDecoration:"none"}}>Facebook</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://facebook.com" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://whatsapp.com' className='content' style={{color:"white",textDecoration:"none"}}>Whatsapp</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://whatsapp.com" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://whatsapp.com' className='content' style={{color:"white",textDecoration:"none"}}>Whatsapp</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://whatsapp.com" /></span>
               </div>
            </button>
            <button class="btnFooter btnFooter--animation-from-top" style={{backgroundColor:"#098770"}}>
            <a href='https://telegram.com' className='content' style={{color:"white",textDecoration:"none"}}>Telegram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://telegram.com" /></span>
               <div class="btnFooter__text-dynamic">
               <a href='https://telegram.com' className='content' style={{color:"white",textDecoration:"none"}}>Telegram</a>
                <span style={{backgroundColor:"white",borderRadius:"50%"}} className='icons'><SocialIcon url="https://telegram.com" /></span>
               </div>
            </button>
            <div className='mobileicons' style={{marginBottom:"20px"}}>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons' ><SocialIcon url="https://instagram.com" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://facebook.com" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://whatsapp.com" /></span>
             <span style={{backgroundColor:"#FFF5E4",borderRadius:"50%"}} className='icons'><SocialIcon url="https://telegram.com" /></span>
            </div>

        </div>
       
    );
}
