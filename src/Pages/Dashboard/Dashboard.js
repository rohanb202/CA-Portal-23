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

// import Dashboard2Css from "./Dashboard2.module.css"
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAxiosPrivate from "../../utils/useAxiosPrivate";
import { toast } from "react-toastify";

// import Box from '@mui/material/Box';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F74061",
  border: "2px solid #000",
  boxShadow: 24,
  color: "#06122E",
  p: 4,
};
const Dashboard = () => {
  // HOOKS FOR INFO AND UI
  const [PersonData, setPersonData] = useState([]);
  const [userIsTeamLeader, setUserIsTeamLeader] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const [userTeamId, setUserTeamId] = useState(1);
  const { userInfo } = useContext(AuthContext);
  const [userEventDetails, setUserEventDetails] = useState(null);

  useEffect(() => {
    axiosPrivate.get("/api/get-reg/")
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

    axiosPrivate.post(url, {
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
            <img className="w-full" src={img1} alt="Sunset in the mountains" />
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
                  {/* <tr>
              <td className="mr-2">{userEventDetails[0].teamLeader.ky_id}</td>
              <td className="mr-2">{userEventDetails[0].teamLeader.full_name}(Leader)</td>
            </tr> */}
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
              {/* {userEventDetails?.teamLeader.ky_id == userInfo?.ky_id &&  */}
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={handleOpen1}
              >
                {userIsTeamLeader ? "Delete Team" : "Exit Team"}
              </button>
              {/* } */}
            </div>
            
            {/* CONFIRMATION MODAL FOR DELETE/EXIT TEAM */}
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
                      Are you sure you want to delete your account? (This is
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
      {/* <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id={"exampleModalCenteredScrollable"+userTeamId} tabindex="-1" aria-labelledby={"exampleModalCenteredScrollable"+userTeamId} aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
    <p>Just like that.</p>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div> */}

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
          <div className="bg-[#F74061] borderimg  md:pl-10 md:pr-16 md:pb-12 md:flex md:w-[80%] w-[90%] relative md:left-20 left-5 mt-8">
            <img
              src={userInfo?.profile_picture}
              alt=""
              className="h-40 relative md:left-0 left-[15%]"
            />
            <div className=" md:ml-10 md:text-left ">
              <div className="mt-3 font-bold md:text-3xl text-2xl text-white">
                {userInfo?.full_name}
                {/* Pawan Kumar Sahu */}
              </div>
              <div className="dashBoardIITBhu">
                {userInfo?.college}
                {/* IIT BHU */}
              </div>
              {/* <div className="mt-3 font-bold text-white text-xl">Age: 21</div> */}
              <div className="mt-3 font-bold text-white text-xl">
                Phone: {userInfo?.mobile_number}
              </div>
              <div className="mt-3 font-bold text-white text-xl">
                Mail Id: {userInfo?.email}
              </div>
            </div>
            <div className="md: mt-6 md:ml-28 flex md:block">
              <div className="font-bold text-white ">
                KY ID:{userInfo?.ky_id}
                {/* KY ID: #123456 */}
              </div>
              <div className="font-bold text-right text-white md:mt-24 text-xl">
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
          {PersonData.length != 0 ? (
            <>
              {PersonData.map((post) => {
                return (
                  <div className="">
                    <img src={MtPattern} alt="" className="relative top-5" />
                    <div className="flex">
                      <img
                        src={Side_Pattern}
                        alt=""
                        className="relative left-5"
                      />
                      <div className="">
                        <img src={Dance} alt="" className="" />
                        <div className="bg-[#F74061] pt-8 pl-16 pb-16">
                          <div className="font-bold text-2xl text-white">
                            {post.event.eventName}/
                            {post.event.parentEvent.categoryName}
                          </div>
                          <div className="font-bold text-2xl text-white">
                            Team {post.teamName}
                          </div>

                          <div className="font-bold text-xl text-white">
                            <button
                              className="px-10 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out"
                              onClick={(e) => handleOpen(e, post.teamId)}
                            >
                              View Details
                            </button>
                            {/* <button type="button" class="px-10 py-3 bg-[#06122E] text-[#F74061] font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-[#06124F] active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target={"#exampleModalCenteredScrollable"+post.teamId}  onClick={(e) => handleClose2(e, post.teamId)}>View Details </button> */}
                          </div>
                        </div>
                      </div>
                      <img
                        src={Side_Pattern}
                        alt=""
                        className="relative right-5 h-[80%]"
                      />
                    </div>
                    <img
                      src={MtPattern}
                      alt=""
                      className="relative bottom-32"
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="text-center mt-4 text-red-600 font-bold text-xl">
                You have not registered for any events! Register at{" "}
                <Link to="/events">Events Registration</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
