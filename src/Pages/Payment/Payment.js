import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import subtract from "../../img/Subtract.png";
import union from "../../img/Union.png";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Payment = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5">
            <p className="text-red-600 font-bold text-3xl">Payment</p>
          </div>
          <img className="border" src={border} alt="Bottom Border" />

          <div className="flex ml-20 mt-20">
            <div className="w-[35%]">
              <img src={subtract} alt="" className="" />
              <div className="flex">
                <img src={union} alt="" className="h-[500px]" />
                <div className="py-10 px-16">
                  <div className="text-center text-red-600 font-bold text-3xl">
                    Regular pass
                  </div>
                  <div className="text-center text-[#098770] font-bold text-2xl mt-2">
                    ₹ 1199
                  </div>
                  <ul className="mt-14">
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                  </ul>
                  {userInfo ? (
                    <a
                      href={`https://www.townscript.com/v2/e/kashiyatra-2023-the-annual-socialcultural-festival-of-iit-bhu-varanasi-314313/booking?td-Registration-With-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
                      target="_blank"
                    >
                      <div className="px-24 mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                        Buy
                      </div>
                    </a>
                  ) : (
                    <div className="px-24 mt-20 rounded-xl font-bold text-white py-3 bg-[#5c867e]">
                      Loading....
                    </div>
                  )}
                </div>
                <img src={union} alt="" className="h-[500px]" />
              </div>
              <img src={subtract} alt="" className="" />
            </div>

            <div className="w-[35%] ml-20">
              <img src={subtract} alt="" className="" />
              <div className="flex">
                <img src={union} alt="" className="h-[500px]" />
                <div className="py-10 px-16">
                  <div className="text-center text-red-600 font-bold text-3xl">
                    Pro pass
                  </div>
                  <div className="text-center text-[#098770] font-bold text-2xl mt-2">
                    ₹ 1199
                  </div>
                  <ul className="mt-14">
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                    <li className="font-extrabold text-red-600 mt-3">
                      • Lorem ipsum
                    </li>
                  </ul>
                  {userInfo ? (
                    <a
                      href={`https://www.townscript.com/v2/e/kashiyatra-2023-the-annual-socialcultural-festival-of-iit-bhu-varanasi-314313/booking?td-Registration-With-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
                      target="_blank"
                    >
                      <div className="px-24 mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                        Buy
                      </div>
                    </a>
                  ) : (
                    <div className="px-24 mt-20 rounded-xl font-bold text-white py-3 bg-[#5c867e]">
                      Loading....
                    </div>
                  )}
                </div>
                <img src={union} alt="" className="h-[500px]" />
              </div>
              <img src={subtract} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
