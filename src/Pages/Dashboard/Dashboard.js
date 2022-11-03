import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Men from "../../img/men.png"

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5">
            <p className="text-red-600 font-bold text-3xl">Hello Peter</p>
            <div className="font-bold ">28 February</div>
          </div>
          <img className="border" src={border} alt="Bottom Border" />
        </div>
      </div>
      <div className="bg-red-600 py-10 pl-5 pr-16 pb-12 flex w-[70%] relative left-10 mt-16">
        <img src={Men} alt="" className="" />
        <div className="mt-10">
          <div className="mt-3">Peter Parker</div>
          <div className="mt-3">IIT BHU</div>
          <div className="mt-3">Age: 21</div>
          <div className="mt-3">Phone: 648484646464</div>
          <div className="mt-3">Mail Id: sahupawan97495685945@gmail.com</div>
        </div>
        <div className="mt-20">
          <div className="">KY ID:#95886</div>
          <div className="">Regular Pass</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
