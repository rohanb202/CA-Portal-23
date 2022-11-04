import React from "react";
import "./Payment.css";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
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

          <div className="block md:flex md:ml-20 mx-5 md:mx-0 mt-20">
            <div className="md:w-[35%] w-full borderimage">
              <div className="">
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
                    <div className="text-center mt-36 rounded-xl font-bold text-white py-3 bg-[#098770]">
                      Buy
                    </div>
                  </a>
                ) : (
                  <div className="text-center mt-36 rounded-xl font-bold text-white py-3 bg-[#5c867e]">
                    Loading....
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
