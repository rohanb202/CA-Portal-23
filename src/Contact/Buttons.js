import React from 'react';
import './Buttons.css'

export default function Buttons () {
    function ripple(e){
        // console.log(e);
        const x=e.pageX-e.target.offsetLeft;
        const y=e.pageY-e.target.offsetTop;
        e.target.style.setProperty('--x',x+'px')
        e.target.style.setProperty('--y',y+'px')

    }
    return (
        <div className='buttons'>
            <p style={{backgroundColor:'#098770'}} className='btn' onMouseMove={ripple}><span className='gridContent'>Lorem Ipsum</span></p>
            <p style={{backgroundColor:'#098770'}} className='btn' onMouseMove={ripple}><span className='gridContent'>Lorem Ipsum</span></p>
        </div>
        
    );
};
