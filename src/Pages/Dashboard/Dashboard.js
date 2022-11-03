import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png"
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Dashboard = () => {
  const {userInfo} = useContext(AuthContext)
  return (
    <div>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5">
            <p className="text-red-600 font-bold text-3xl">Hello {userInfo?.full_name}</p>
            <div className="font-bold ">28 February</div>
          </div>
          <img className="border" src={border} alt="Bottom Border" />
        </div>
      </div>
      <div className="bg-red-600 py-10 pl-5 pr-16 pb-12 flex w-[70%] relative left-10 mt-16">
        <img src={userInfo?.profile_picture} alt="" className="" />
        <div className="mt-10">
          <div className="mt-3">{userInfo?.full_name}</div>
          <div className="mt-3">{userInfo?.college}</div>
          {/* <div className="mt-3">Age: 21</div> */}
          <div className="mt-3">Phone: {userInfo?.mobile_number}</div>
          <div className="mt-3">Mail Id: {userInfo?.email}</div>
        </div>
        <div className="mt-20">
          <div className="">KY ID:{userInfo?.ky_id}</div>
          <div className="">{(userInfo?.ticket == null)?"Payment not completed!":userInfo?.ticket}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
