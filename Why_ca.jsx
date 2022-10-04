import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function CA(){
    return(
    <section>
    <div data-aos="fade-right" className="lead1" >
        <h2>Why become a ...</h2>
        <h1> CAMPUS AMBASSADOR</h1>
        <h3>For bringing together a fest which encircles diversity like never before we are reaching out to colleges across the country.
        The selected Campus Ambassador in his/her tenure will represent Kashiyatra, IIT(BHU) in his/her college and will become a an integral member of the team.</h3>
        
        <div className="lead2">

        <ul id = "tabs"  className="fa-ul">
        
       <li className="icon1"> <i className ="fa-li fa fa-check-square"></i> Become a Leader</li>
       <li className="icon"> <i className ="fa-li fa fa-check-square"></i> Update your organisational skills</li>
       <li className="icon"> <i className ="fa-li fa fa-check-square"></i> Polish your communicating & public speaking skills. </li>
       <li className="icon"> <i className ="fa-li fa fa-check-square"></i> Get the exposure to online and media marketing</li>
       <li className="icon"> <i className ="fa-li fa fa-check-square"></i> Expand your creative  horizons</li>
       </ul>
       </div>
       
        
       
        <a className="btn-1" >BECOME A CAMPUS AMBASSADOR</a>
        
    </div>
    </section>
    )
}

export default CA;