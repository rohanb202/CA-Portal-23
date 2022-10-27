import React, { useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
// import Sidebar from '../../components/Sidebar';
import profileFrame from '../../svgs/profileFrame.svg';
import border from '../../svgs/border.svg';
// import Side from '../../components/Side';
// import sidepattern from "../../components/navbar/Super Side Pattern.svg";
import NavBar from '../../components/navbar/navbar';
import AuthContext from '../../context/AuthContext';
import {useContext} from "react"

function Profile() {

  // const contextData = useContext(AuthContext)
  // console.log(contextData)
  const {userInfo} = useContext(AuthContext);
  const navigator = useNavigate();

  // Dummy
  // const userInfo = {
  //   name:"peter parker",
  //   profile_picture:"https://www.screengeek.net/wp-content/uploads/2019/08/spider-man-3-peter-parker.jpg",
  //   college:"IIT BHU",
  //   age:21,
  //   year:3,
  //   phone_number:"+91 9123456789",
  //   email:"peterparker@itbhu.ac.in",
  //   ky:{
  //     id:"#KY0147",
  //     competitions:[
  //       "competition1",
  //       "competition2",
  //       "competition3"
  //     ],
  //     events:[
  //       "event1",
  //       "event2"
  //     ]
  //   }
  // }

  useEffect(() => {
    if(!userInfo){
      navigator("/");
    }
  }, [userInfo]);

  return (
    <>
      {userInfo && 
      <>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-profile flex flex-col w-[100%]">
          <div className="main-frame">
            <div className="main-greet">
              <div className='article'>
                <p className='user-greet'>Hello {userInfo.full_name}</p>
                <p className='date'>20 October</p>
              </div>
              <img 
                className='border'
                src={border} 
                alt="Bottom Border" />
            </div>
            <div className="frame">
              <img 
                src={profileFrame} 
                alt="Frame" />
              <div className="details">
                <div className='details-frame'>
                  <div className="user-main">
                    <img 
                      src={userInfo.profile_picture}
                      alt="ProfilePicture" />
                    <div className="about-user">
                      <h3>{userInfo.full_name}</h3>
                      <p className='college'>{userInfo.college}</p>
                    </div>
                    <p className='ky-id'>KY ID: {userInfo.ky_id}</p>
                  </div>
                  <div className="user-details">
                    <ul className="main-details">
                      {/* <li>Age: {userInfo.age}</li> */}
                      <li>Phone: {userInfo.mobile_number}</li>
                      <li>Mail ID: {userInfo.email}</li>
                      <li>Year of Study: {userInfo.year}</li>
                    </ul>
                    <ul className='ky-details'>
                      <li>Competitions: Coming Soon</li>
                      <li>Events: Coming Soon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="side">
            <div class="sidepattern">
              <img src={sidepattern} alt="sidepattern"></img>
            </div>
          </div> */}
        </div>
      </div>
      </>}
    </>
  );
}

export default Profile