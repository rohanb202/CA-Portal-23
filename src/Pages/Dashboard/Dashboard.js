//import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";
// import PersonDataJson from "./regs.json";
import "./Dashboard.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import Dance from "../../img/dance.png";
import { useState } from "react";
import { useEffect } from "react";
import img1 from "./img/unsplash_GRDpPpKczdY.svg";
import { Link } from "react-router-dom";
import Contact from "../../components/Contact2/Contact";
import Dashboard2Css from "./Dashboard2.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { toast } from "react-toastify";
import { BeakerIcon,PhoneIcon} from '@heroicons/react/solid'
// import ClearIcon from '@mui/icons-material/Clear';

// import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
function EnvelopeIcon(){
  return(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>);
}


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F74061",
  // border: "2px solid #000",
  boxShadow: 24,
  color: "#06122E",
  // border: "35px solid transparent",
  // borderImg:"url(./img/Group 349.svg) 50 round",
  p: 4,
};
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
const Dashboard = () => {

  const [openContact, setOpenContact] = React.useState(false);
  const handleOpenContact = () => setOpenContact(true);
  const handleCloseContact = () => setOpenContact(false);
  // HOOKS FOR INFO AND UI
  const [PersonData, setPersonData] = useState([]);
  const [userIsTeamLeader, setUserIsTeamLeader] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const [userTeamId, setUserTeamId] = useState(1);
  const { userInfo } = useContext(AuthContext);
  const [userEventDetails, setUserEventDetails] = useState(null);

  useEffect(() => {
    axiosPrivate
      .get("/api/get-reg/")
      .then((res) => {
        setPersonData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // STATES AND FUNCTIONS TO HANDLE MODALS
  const [open1, setOpen1] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => setOpen1(false);

  function handleOpen(e, n) {
    setOpen(true);
    setUserTeamId(n);
    const modelData = PersonData.filter((num) => num.teamId === n)[0];
    setUserEventDetails(modelData);
    if (modelData.teamLeader.ky_id == userInfo?.ky_id) {
      setUserIsTeamLeader(true);
    } else {
      setUserIsTeamLeader(false);
    }
  }

  const handleClose = () => setOpen(false);

  const handleDeleteExitTeam = async () => {
    let url = "";
    if (userIsTeamLeader) {
      url = "api/deleteteam/";
    } else {
      url = "api/exitTeam/";
    }

    axiosPrivate
      .post(url, {
        teamId: userEventDetails?.teamId,
      })
      .then((res) => {
        // console.log("res", res);
        toast.success(res.data.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setPersonData((prev) => {
          console.log(prev);
          const index = prev.indexOf(userEventDetails);
          prev.splice(index, 1);
          return prev;
        });
        setOpen(false);
        setOpen1(false);
      })
      .catch((err) => {
        // console.error("res", err);
        if (err.response?.data?.msg) {
          toast.error(err.response?.data?.msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Something went wrong. Try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        setOpen(false);
        setOpen1(false);
      });
  };

  return (
    <div>
      {/* MODAL THAT CONTAINS TEAM DETAILS AND EXIT/DELETE BUTTON */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="modal-header flex flex-shrink-0 p-0 items-center justify-between bg-[#F74061]">
            <img
              className="w-full"
              src={userEventDetails?.event.image_URL}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="flex items-center justify-evenly mt-2">
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {userEventDetails?.event.eventName}
            </Typography>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {userEventDetails?.event.parentEvent.categoryName}
            </Typography>
          </div>
          <div className="flex items-center justify-center mt-2 mb-2 text-3xl">
            <h3>Team {userEventDetails?.teamName}</h3>
          </div>
          <div className="flex items-center justify-center mt-2 mb-2 text-2xl">
            <h3>Members</h3>
          </div>
          <div>
            <div className="flex items-center justify-center mt-2 mb-2 text-xl">
              <table class="table-auto">
                <thead>
                  <tr>
                    <th>KY ID</th>
                    <th className="pl-8">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {userEventDetails?.members.map((person) => {
                    return (
                      <>
                        <tr>
                          <td className="pr-8">{person.ky_id}</td>
                          <td className="pl-8">{`${person.full_name} ${
                            person.ky_id == userEventDetails.teamLeader.ky_id
                              ? "(Leader)"
                              : ""
                          }`}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-end pr-2 text-3xl">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={handleOpen1}
              >
                {userIsTeamLeader ? "Delete Team" : "Exit Team"}
              </button>
            </div>

            <Modal
              keepMounted
              open={open1}
              onClose={handleClose1}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                {userIsTeamLeader ? (
                  <>
                    <div className="flex items-center justify-center mt-2 text-3xl">
                      Are you sure you want to delete this team? (This is
                      irreversible!)
                    </div>
                    <div className="flex items-center justify-center mt-2 text-3xl">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDeleteExitTeam}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center mt-2 text-3xl">
                      Are you sure you want to leave this team? (This is
                      irreversible!)
                    </div>
                    <div className="flex items-center justify-center mt-2 text-3xl">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDeleteExitTeam}
                      >
                        Exit
                      </button>
                    </div>
                  </>
                )}
              </Box>
            </Modal>
          </div>
        </Box>
      </Modal>

      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5 flex justify-between items-center ">
            <div>
            <p className="text-[#F74061] font-bold text-3xl">
              Hello {userInfo?.full_name}
            </p>
            {/* <div className="font-bold ">28 February</div> */}
            </div>
            <button className="flex pr-5 justify-center text-xl md:text-2xl text-[#F74061] font-extrabold" onClick={handleOpenContact}>Contact Us</button>
          </div>
          <img className="border" src={border} alt="Bottom Border" />
          
        </div>
      </div>
      <div className="">
        <div className="flex">
          <div className="bg-[#F74061] borderimg  md:pl-10 md:pr-16 md:pb-12 md:flex md:w-[80%] w-[90%] relative md:left-20 left-5 mt-8 ">
            <div className="flex items-center justify-center">
            <img
              src={userInfo?.profile_picture}
              alt=""
              className="h-35 relative md:left-0 flex items-center justify-center "
            />
            </div>
            
            <div className=" md:ml-10 md:text-left  ">
              <div className="dashBoardIITBhu23 text-3xl">
                {userInfo?.full_name}
              </div>
              <div className="dashBoardIITBhu">{userInfo?.college}</div>
              <div className="mt-3 font-bold text-white text-xl">
                Phone: {userInfo?.mobile_number}
              </div>
              <div className="mt-3 font-bold text-white text-xl">
                Mail Id: {userInfo?.email}
              </div>
            </div>
            <div className={Dashboard2Css.Dashboard2KyIdCheersDiv}>
              <div className={Dashboard2Css.Dashboard2KyId}>
                KY ID:{userInfo?.ky_id}
              </div>
              <div className={Dashboard2Css.Dashboard2Cheers}>
                {userInfo?.is_paid
                  ? "Cheers! You are a part of KY '23!"
                  : "Oops! Complete payment to be a part of KY '23!"
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-60 relative mt-14">
        
        <div className="font-bold text-[#F74061] text-3xl text-center md:text-left">
          Your Registrations
        </div>
      
        
        
        <div className={Dashboard2Css.Dashboard2Columns}>
          {PersonData.length != 0 ? (
            <>
              {PersonData.map((post) => {
                return (
                  <div className={Dashboard2Css.Dashboard2Card}>
                    <img
                      className={Dashboard2Css.Dashboard2CardImg}
                      src={post.event.image_URL}
                      alt="Sunset in the mountains"
                    />
                    <div className="bg-[#F74061]">
                      <div className="font-bold text-2xl text-white flex items-center justify-center mt-4">
                        {post.event.eventName}/
                        {post.event.parentEvent.categoryName}
                      </div>
                      <div className="font-bold text-2xl text-white flex items-center justify-center mt-4">
                        Team {post.teamName}
                      </div>

                      <div className="font-bold text-xl text-white flex items-center justify-center mt-2 mb-4">
                        <button
                          className="px-10 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                          onClick={(e) => handleOpen(e, post.teamId)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="text-center md:text-left  mt-4 text-red-600 font-bold text-xl">
                You have not registered for any events! Register at{" "}
                <Link to="/events">Events Registration</Link>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <div className="flex  justify-center items-center w-full">
        <button className="flex  justify-center text-2xl text-[#F74061] bg-white p-4 rounded-lg font-semibold" onClick={handleOpenContact}> Click Here to Contact</button>
      </div> */}
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
          <div className="flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F74061" className="w-6 h-6 " onClick={handleCloseContact} style={{cursor:"pointer"}}>
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
          </div>
        
        <div className="text-center flex justify-center">
          <h1 className="text-5xl font-semibold text-[#F74061] ">Contact 
</h1>
        </div>
        <div className="flex justify-center items-center text-xl md:text-2xl py-2 whitespace-nowrap">
          For Registrations and Payments
        </div>
        <div className='flex flex-col space-y-5 items-center py-2'>
                <div className="flex space-x-2">
                  <EnvelopeIcon className="w-5"/>
                  <a href='mailto:publicity@kashiyatra.all' className='flex justify-center w-full text-2xl'>publicity@kashiyatra.org</a>
                </div>
                
                <h3 className='contactPersonName'>Rudrarpit Patra</h3>
                {/* <a href='mailto:rudrarpit.patra.mec19@iitbhu.ac.in' className='contactPersonEmail'>rudrarpit.patra.mec19@iitbhu.ac.in</a> */}
                <div className="flex">
                  <PhoneIcon className="w-5"/>
                  <a href="tel:8763811512" className='contactCallInfo'>8763811512</a>
                </div>
                <div className="w-[50%] h-[2px] bg-black "></div>
                <h3 className='contactPersonName'>Gaurav Jaiswal</h3>
                {/* <a href='mailto:gaurav.jaiswal.min19@iitbhu.ac.in' className='contactPersonEmail'>gaurav.jaiswal.min19@iitbhu.ac.in</a> */}
                <div className="flex">
                  <PhoneIcon className="w-5"/>
                  <a href="tel:9838660830" className='contactCallInfo'>9838660830</a>
                </div>
            </div>

      </div>
      
      </div>
      </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
