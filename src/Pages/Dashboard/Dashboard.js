import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png";
import Register1 from "../../img/register1.png";
import Register2 from "../../img/register2.png";
import Register3 from "../../img/register3.png";
import Register4 from "../../img/register4.png";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";
import Dance from "../../img/dance.png";
import Data from "./DashboardData";
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
        <img src={Register2} alt="" className="relative top-24 z-10" />
        <div className="flex">
          <img src={Register3} alt="" className="relative left-24 z-10" />
          <div className="bg-[#F74061] pt-16 pl-10 pr-16 pb-12 flex w-[80%] relative left-20 mt-16">
            <img src={userInfo?.profile_picture} alt="" className="h-40" />
            <div className="mt-10 ml-10">
              <div className="mt-3 font-bold text-3xl text-white">
                {userInfo?.full_name}
              </div>
              <div className="mt-3 font-bold text-white text-xl">
                {userInfo?.college}
              </div>
              {/* <div className="mt-3 font-bold text-white text-xl">Age: 21</div> */}
              <div className="mt-3 font-bold text-white text-xl">
                Phone: {userInfo?.mobile_number}
              </div>
              <div className="mt-3 font-bold text-white text-xl">
                Mail Id: {userInfo?.email}
              </div>
            </div>
            <div className="mt-16 ml-28">
              <div className="font-bold text-white ">
                KY ID:{userInfo?.ky_id}
              </div>
              <div className="font-bold text-white mt-40 text-xl">
                {userInfo?.ticket == null
                  ? "Payment not completed!"
                  : userInfo?.ticket}
              </div>
            </div>
          </div>
          <img src={Register1} alt="" className="relative left-12 z-10" />
        </div>
        <img
          src={Register4}
          alt=""
          className="relative bottom-48 left-6 z-10"
        />
        <div className="ml-60 relative bottom-32">
          <div className="font-bold text-[#F74061] text-3xl">
            Your Registrations
          </div>
          <div className="flex">
            {Data.map((post) => {
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
                      className="relative right-5"
                    />
                  </div>
                  <img src={MtPattern} alt="" className="relative bottom-32" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
