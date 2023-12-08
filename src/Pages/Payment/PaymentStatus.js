import "./Payment.css";
import NavBar from "../../components/navbar/navbar";
import border from "../../svgs/border.svg";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import * as React from "react";


const PaymentStatus = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <div>
      <NavBar />
      <div className="flex flex-shrink-0">
        <div className="main-application flex flex-col w-[100%]">
          <div className="mt-5 flex justify-between items-center">
            <p className="text-red-600 font-bold text-3xl">Payment Status</p>
          </div>
          <img className="border" src={border} alt="Bottom Border" />

          <div className="block justify-center md:flex mx-5 md:mx-0 mt-20">
              <>
                <div className="md:w-[65%] w-full borderimage justify-center">
                  <div className="">
                    <div className="text-center text-red-600 font-bold text-3xl">
                      Your Payment Has Been Completed! 
                    </div>
                    <div className="text-center text-black-500 my-3 font-normal text-m">
                    The details regarding the same will be updated within 30 mins. If not updated, please reach out to any of the following contacts:
                      <ul className="text-red-600 my-2 font-bold" style={{listStyle:"none"}}>
                        <li>Aryan Singh (+919997255604)</li>
                        <li>Mrigank (+919079610045)</li>
                        <li>Shreeyam (+916261990661)</li>
                      </ul>
                    </div>
                    <div className="text-center text-black-500 font-bold text-l"> 
                    </div>
                    <div className="text-center mt-20 rounded-xl font-bold text-white py-3 bg-[#098770]">
                      SUCCESSFULLY REGISTERED FOR KY'24!
                    </div>
                  </div>
                </div>
              </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
