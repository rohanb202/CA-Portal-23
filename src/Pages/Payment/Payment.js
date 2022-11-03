import React from "react";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";

const Payment = () => {
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
            <div className="">
              <img src="" alt="" className="" />
              <div className="">
                <img src="" alt="" className="" />
                <div className="py-10 px-14 border-2 border-[#098770] ">
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
                  <div className="px-24 mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                    Buy
                  </div>
                </div>
                <img src="" alt="" className="" />
              </div>
            </div>

            <div className="py-10 px-14 border-2 border-[#098770] ml-28">
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
              <div className="px-24 mt-36 rounded-xl font-bold text-white py-3 bg-[#098770]">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
