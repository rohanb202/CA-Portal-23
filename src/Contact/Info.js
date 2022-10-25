import React from 'react';
import { Shake } from 'reshake'
import contactPageImg from '../img/contactPageImg.png'
import './Info.css';

export default function Info () {

    return (
        <div className='contactInfo' >
            <div className='contactPageImage'>
            <Shake 
              h={0}
              v={52}
              r={0}
              dur={800}
              int={51.6}
              max={100}
              fixed={true}
              fixedStop={false}
              freez={false}>
              <img src={contactPageImg} alt='mage' className='contactImage' />
            </Shake>
                
            </div>
            <div className='contactPageInfo'>
                <h2 className='contactPageInfoHeading'>Publicity</h2>
                <h3 className='contactPersonName'>Rudrarpit Patra</h3>
                <a href='mailto:rudrarpit.patra.mec19@itbhu.ac.in' className='contactPersonEmail'>rudrarpit.patra.mec19@itbhu.ac.in</a>
                <a href="tel:8763811512" className='contactCallInfo'>Call 8763811512</a>
                <h3 className='contactPersonName'>Gaurav Jaiswal</h3>
                <a href='mailto:gaurav.jaiswal.min10@itbhu.ac.in' className='contactPersonEmail'>gaurav.jaiswal.min19@itbhu.ac.in</a>
                <a href="tel:9838660830" className='contactCallInfo'>Call 9838660830</a>
            </div>
            
        </div>
        
    );
};
