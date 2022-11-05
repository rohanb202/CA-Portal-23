//import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";
import PersonData from "./regs.json";
import "./Dashboard.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Dance from "../../img/dance.png";
import { useState } from "react";
import { useEffect } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Dashboard = () => {
  const [userTeamId,setUserTeamId]=useState(1);
  const { userInfo } = useContext(AuthContext);
  // useEffect(()=>{
  //   console.log(PersonData.map((post)=>{});
  // },[userTeamId]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




//   const mod=<div  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto "
//   id={"exampleModal69"+userTeamId} tabindex="-1" aria-labelledby="exampleModal69Label" aria-hidden="true">
//   <div class="modal-dialog relative w-auto pointer-events-none ">
//     <div
//       class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
//       <div class="modal-body relative p-4 text-[#06122E] bg-[#F74061] flex items-center justify-center">
//       <div class="w-full max-w-xs flex items-center justify-center">
        
//     <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

//       {/* {Array(userTeamId).fill(null).map((_,index)=>{
//         return(
//           <div class="mb-2">
//             <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
//               {index===0?"Team Leader":`Team Member ${index}`}
              
//             </label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="KY ID"/>
//           </div>
//         )
//       })} */}
      
      
//       <div class="flex items-center justify-center">
//         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//           Register
//         </button>
//       </div>
//     </form>
//   </div>
//        </div>
      
      
//     </div>
//   </div>
// </div>
  return (
    <div>
      


      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5">
            <p className="text-[#F74061] font-bold text-3xl">
              Hello {userInfo?.full_name}
            </p>
            <div className="font-bold ">28 February</div>
          </div>
          <img className="border" src={border} alt="Bottom Border" />
        </div>
      </div>
      <div className="">
        <div className="flex">
          <div className="bg-[#F74061] borderimg md:pt-16 md:pl-10 md:pr-16 md:pb-12 md:flex md:w-[80%] w-[90%] relative md:left-20 left-5 mt-16">
            <img
              src={Men}
              alt=""
              className="h-40 relative md:left-0 left-[15%]"
            />
            <div className="mt-10 md:ml-10">
              <div className="mt-3 text-center md:text-left font-bold md:text-3xl text-2xl text-white">
                {/* {userInfo?.full_name} */}
                Pawan Kumar Sahu
              </div>
              <div className="mt-3 text-center md:text-left font-bold text-white text-xl">
                {/* {userInfo?.college} */}
                IIT BHU
              </div>
              {/* <div className="mt-3 font-bold text-white text-xl">Age: 21</div> */}
              <div className="mt-3 font-bold text-white text-xl">
                Phone: {userInfo?.mobile_number}
              </div>
              <div className="mt-3 font-bold text-white text-xl">
                Mail Id: {userInfo?.email}
              </div>
            </div>
            <div className="md:mt-16 mt-5 md:ml-28 flex md:block">
              <div className="font-bold text-white ">
                {/* KY ID:{userInfo?.ky_id} */}
                KY ID: #123456
              </div>
              <div className="font-bold text-right text-white md:mt-40 text-xl">
                {userInfo?.ticket == null
                  ? "Payment not completed!"
                  : userInfo?.ticket}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-60 relative mt-14">
        <div className="font-bold text-[#F74061] text-3xl text-center md:text-left">
          Your Registrations
        </div>
        <div className="md:flex">
          {PersonData.map((post) => {
            
            return (
              <div className="">
                <img src={MtPattern} alt="" className="relative top-5" />
                <div className="flex">
                  <img src={Side_Pattern} alt="" className="relative left-5" />
                  <div className="">
                    <img src={Dance} alt="" className="" />
                    <div className="bg-[#F74061] pt-8 pl-16 pb-16">
                      <div className="font-bold text-2xl text-white">
                        {post.event.eventName}/{post.event.parentEvent.categoryName}
                      </div>
                      
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          {post["members"].map((mem)=>(
                            <div>{mem.ky_id}</div>
                          ))}
                          <div>{post.event.eventName}/{post.event.parentEvent.categoryName}</div>
                        </Box>
                      </Modal>
                      
                      <div className="font-bold text-xl text-white">
                      <button onClick={handleOpen} type="button" class="px-10 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target={"#exampleModal69"+post.teamId}>View Details </button>
                      </div>
                    </div>
                  </div>
                  <img
                    src={Side_Pattern}
                    alt=""
                    className="relative right-5 h-[80%]"
                  />
                </div>
                <img src={MtPattern} alt="" className="relative bottom-32" />
                
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
