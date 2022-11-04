import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";
import Data from "./DashboardData";
import "./Dashboard.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Dashboard = () => {
  const { userInfo } = useContext(AuthContext);
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
          {Data.map((post) => {
            return (
              <div className="">
                <img src={MtPattern} alt="" className="relative top-5" />
                <div className="flex">
                  <img src={Side_Pattern} alt="" className="relative left-5" />
                  <div className="">
                    <img src={post.img} alt="" className="" />
                    <div className="bg-[#F74061] pt-8 pl-16 pb-16">
                      <div className="font-bold text-2xl text-white">
                        {post.event}
                      </div>
                      <div className="font-bold text-xl text-white">
                        {post.time}
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
