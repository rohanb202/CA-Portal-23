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

          {(userInfo?.is_paid)?(
            <>
             <div className="md:w-[35%] w-full borderimage">
              <div className="">                
                <div className="text-center text-red-600 font-bold text-3xl">
                  Your Payment Has Been Completed!
                </div>
                <div className="text-left text-[#098770] font-bold text-2xl mt-5">
                  {`Pass:\t${userInfo.ticket}`}
                </div>
                <div className="text-left text-[#098770] font-bold text-2xl mt-2">
                  {`Payment Amount:\t₹ ${userInfo.paid_amt}`}
                </div>
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
                      SUCCESSFULLY REGISTERED FOR KY'23!
                    </div>
              </div>
            </div>
            </>
          ):(
            <>
            <div className="md:w-[35%] w-full borderimage">
              <div className="">                
                <div className="text-center text-red-600 font-bold text-3xl">
                  Registration Without Food
                </div>
                <div className="text-center text-[#098770] font-bold text-2xl mt-2">
                  ₹ 1800
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
                    • Free Official KY Tshirt!
                  </li>
                </ul>
                {userInfo ? (
                  <a
                    href={`https://www.townscript.com/v2/e/kashiyatra/booking?td-Registration-No-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
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
                  ₹ 2100
                </div>
                <ul className="mt-14">
                  <li className="font-extrabold text-red-600 mt-3">
                    • All Events Registration
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • All Pronite (Celeb Performance) Passes
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • Food and Accomodation
                  </li>
                  <li className="font-extrabold text-red-600 mt-3">
                    • Free Official KY Tshirt!
                  </li>
                </ul>
                {userInfo ? (
                  <a
                    href={`https://www.townscript.com/v2/e/kashiyatra/booking?td-Registration-With-Food=1&name=${userInfo?.full_name}&emailid=${userInfo?.email}&cq1=${userInfo.ky_id}`}
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
            </>
          )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
