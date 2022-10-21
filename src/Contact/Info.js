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
                <h3 className='contactPersonName'>Utkarsh Dwivedi</h3>
                <a href='/#' className='contactPersonEmail'>utkarsh.dwivedi.mec17@itbhu.ac.in</a>
                <a href='/#' className='contactCallInfo'>Call (788)043-9042</a>
                <h3 className='contactPersonName'>Sharad Ghodke</h3>
                <a href='/#' className='contactPersonEmail'>sharad.dghodke.mec17@itbhu.ac.in</a>
                <a href='/#' className='contactCallInfo'>Call (896)285-1919</a>
            </div>
            
        </div>
        
    );
};