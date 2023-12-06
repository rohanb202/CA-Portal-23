// import React from "react";
import "./Payment.css";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Contact from "../../components/Contact2/Contact";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BeakerIcon,PhoneIcon} from '@heroicons/react/solid'

// import Box from '@mui/material/Box';

function EnvelopeIcon(){
  return(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>);
}
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ffffff",
  // border: "2px solid #000",
  boxShadow: 24,
  color: "#06122E",
  // border: "35px solid transparent",
  // borderImg:"url(./img/Group 349.svg) 50 round",
  p: 4,
};
const Payment = () => {
  const { userInfo } = useContext(AuthContext);
  const [openContact, setOpenContact] = React.useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);
  return (
    <div>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5 flex justify-between items-center">
            <p className="text-red-600 font-bold text-3xl">Payment</p>
            <button className="flex pr-8 justify-center text-xl md:text-2xl text-[#F74061] font-extrabold" onClick={handleOpenContact}>Contact Us</button>
          </div>
          <img className="border" src={border} alt="Bottom Border" />

          <div className="block justify-center md:flex mx-5 md:mx-0 mt-20">
            {userInfo?.is_paid ? (
              <>
                <div className="md:w-[35%] w-full borderimage justify-center">
                  <div className="">
                    <div className="text-center text-red-600 font-bold text-3xl">
                      Your Payment Has Been Completed!
                    </div>
                    {/* <div className="text-left text-[#098770] font-bold text-2xl mt-5">
                      {`Pass:\t${userInfo.ticket}`}
                    </div>
                    <div className="text-left text-[#098770] font-bold text-2xl mt-2">
                      {`Payment Amount:\t₹ ${userInfo.paid_amt}`}
                    </div> */}
                    {/* <ul className="mt-14">
                  <li className="font-extrabold text-red-600 mt-3">
                    • All Events Registration
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • All Pronite (Celeb Performance) Passes
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • Accomodation (Food Excluded)
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • Free Official KY Tshirt!
                  </li>
                </ul> */}
                    <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                      SUCCESSFULLY REGISTERED FOR KY'24!
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-[35%] w-full borderimage">
                  <div className="">
                    <div className="text-center text-red-600 font-bold text-3xl">
                      Registration Without Food
                    </div>
                    <div className="text-center text-[#098770] font-bold text-2xl mt-2">
                    <span className="line-through text-red-500 text-xl px-1"> ₹ 2000</span>
                      ₹ 1900
                    </div>
                    <ul className="mt-14">
                      <li className="font-extrabold text-red-600 mt-3">
                        • All Events Registration
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • All Pronite (Celeb Performance) Passes
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Accomodation (Food Excluded)
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Access to International Carnival
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Free Official KY Tshirt!
                      </li>
                    </ul>
                    {userInfo ? (
                      <a
                        href={`https://www.townscript.com/v2/e/kashiyatra-24-the-annual-sociocultural-festival-of-iit-bhu-varanasi-000222/booking?td-Registration-No-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
                        target="_blank"
                      >
                        <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                          Buy
                        </div>
                      </a>
                    ) : (
                      <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#5c867e]">
                        Loading....
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:w-[35%] w-full borderimage md:ml-16 mt-10 md:mt-0">
                  <div className="">
                    <div className="text-center text-red-600 font-bold text-3xl">
                      Registration With Food
                    </div>
                    <div className="text-center text-[#098770] font-bold text-2xl mt-2">
                    <span className="line-through text-red-500 text-xl px-1">₹ 2500</span>
                      ₹ 2300
                    </div>
                    <ul className="mt-14">
                      <li className="font-extrabold text-red-600 mt-3">
                        • All Events Registration
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • All Pronite (Celeb Performance) Passes
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Accomodation with food
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Access to International Carnival
                      </li>
                      <li className="font-extrabold text-red-600 mt-3">
                        • Free Official KY Tshirt!
                      </li>
                    </ul>
                    {userInfo ? (
                      <a  
                        href={`https://www.townscript.com/v2/e/kashiyatra-24-the-annual-sociocultural-festival-of-iit-bhu-varanasi-000222/booking?td-Registration-With-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
                        target="_blank"
                      >
                        <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                          Buy
                        </div>
                      </a>
                    ) : (
                      <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#5c867e]">
                        Loading....
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
          {/* <div className=" relative mt-14">
            <div className="font-bold text-[#F74061] text-3xl text-left">
              Pay for Multiple Users
            </div>
            <img className="border" src={border} alt="Bottom Border" />
            <div className="justify-center flex my-20 mx-3 md:mx-0">
              <div className="md:w-[35%] w-full borderimage justify-center">
                <div className="">
                  <div className="text-center text-red-600 font-bold text-3xl">
                    Instructions
                  </div>
                  <ul className="mt-14">
                    <li className="font-extrabold text-red-600 mt-3">
                      • Choose number of tickets you want to buy.
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Enter the name, email and KY ID of the accounts you want to pay for.
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Verify that KY ID of all attendees entered correctly.
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Complete payment procedure.
                    </li>
                  </ul>
                    
                  <a href="https://www.townscript.com/v2/e/kashiyatra/booking/tickets" target="_blank">
                  <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                    PAY FOR MULTIPLE USERS!!
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Modal
      
        open={openContact}
        onClose={handleCloseContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className="absolute inset-0 m-auto"
      >
        <Box sx={style2}>
      <div className="flex w-full justify-center items-center ">
        <div className="border-4 p-5 border-[#F74061] bg-white">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-[#F74061] ">Contact</h1>
        </div>
        <div className="flex justify-center items-center text-xl md:text-2xl py-2 whitespace-nowrap">
          {/* For Registrations and Payments */}
        </div>
        <div className='flex flex-col space-y-5 items-center py-2'>
                {/* <div className="flex space-x-2">
                  <EnvelopeIcon className="w-5"/>
                  <a href='mailto:publicity@kashiyatra.all' className='flex justify-center w-full text-2xl'>publicity@kashiyatra.org</a>
                </div>
                
                <h3 className='contactPersonName'>Rudrarpit Patra</h3>
                <div className="flex">
                  <PhoneIcon className="w-5"/>
                  <a href="tel:8763811512" className='contactCallInfo'>8763811512</a>
                </div>
                <div className="w-[50%] h-[2px] bg-black "></div>
                <h3 className='contactPersonName'>Gaurav Jaiswal</h3>
                <div className="flex">
                  <PhoneIcon className="w-5"/>
                  <a href="tel:9838660830" className='contactCallInfo'>9838660830</a>
                </div> */}
            </div>

      </div>
      
      </div>
      </Box>
      </Modal>
    </div>
  );
};

export default Payment;