import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.scss';

export default function Footer (){
    return(
        <div className='footer'>
            <button class="button button--animation-from-top">
            <a href='https://instagram.com' className='content' style={{color:"black",textDecoration:"none"}}>Instagram</a>
                <span className='icons' ><SocialIcon url="https://instagram.com" /></span>
               <div class="button__text-dynamic">
               <a href='https://instagram.com' className='content' style={{color:"white",textDecoration:"none"}}>Instagram</a>
                <span className='icons' ><SocialIcon url="https://instagram.com" /></span>
               </div>
            </button>
            <button class="button button--animation-from-top">
            <a href='https://facebook.com' className='content' style={{color:"black",textDecoration:"none"}}>Facebook</a>
                <span className='icons'><SocialIcon url="https://facebook.com" /></span>
               <div class="button__text-dynamic">
               <a href='https://facebook.com' className='content' style={{color:"white",textDecoration:"none"}}>Facebook</a>
                <span className='icons'><SocialIcon url="https://facebook.com" /></span>
               </div>
            </button>
            <button class="button button--animation-from-top">
            <a href='https://whatsapp.com' className='content' style={{color:"black",textDecoration:"none"}}>Whatsapp</a>
                <span className='icons'><SocialIcon url="https://whatsapp.com" /></span>
               <div class="button__text-dynamic">
               <a href='https://whatsapp.com' className='content' style={{color:"white",textDecoration:"none"}}>Whatsapp</a>
                <span className='icons'><SocialIcon url="https://whatsapp.com" /></span>
               </div>
            </button>
            <button class="button button--animation-from-top">
            <a href='https://telegram.com' className='content' style={{color:"black",textDecoration:"none"}}>Telegram</a>
                <span className='icons'><SocialIcon url="https://telegram.com" /></span>
               <div class="button__text-dynamic">
               <a href='https://telegram.com' className='content' style={{color:"white",textDecoration:"none"}}>Telegram</a>
                <span className='icons'><SocialIcon url="https://telegram.com" /></span>
               </div>
            </button>
        </div>
       
    );
}