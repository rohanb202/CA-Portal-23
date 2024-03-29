import React, { useState } from "react";
import stripes from "../../svgs/stripes.svg";
import logo from "./newlogo.svg";
import "./forgot.css"
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const REACT_APP_BASE_BACKEND_URL =
  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000";

function ForgotPass() {
  const [requesting, setRequesting] = useState(false);

  let sendPasswordResetLink = async (e) => {
    e.preventDefault();
    setRequesting(true);
    try {
      let response = await fetch(`${REACT_APP_BASE_BACKEND_URL}/forgotPass/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: e.target.email.value }),
      });
      let data = await response.json();
      console.log(response.status);
      if (response.status === 200) {
        toast.success("Reset password email sent!", {
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
      if (response.status === 404) {
        toast.error("Enter Correct Email!!", {
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
    } catch (error) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("error", error);
    }

    setRequesting(false);
  };

  let { loginUser } = useContext(AuthContext);
  return (
    <>
      <div className="forgotbg">
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={sendPasswordResetLink}
          class="flex flex-col space-y-5 justify-center items-center px-10"
        >
          <img src={logo} alt="logoImg" className="w-2/3 min-w-[18rem]" />

          <label className="block w-6/12 min-w-[15rem]">
            <span className="text-gray-700 whitespace-nowrap">Email ID</span>
            <input
              type="email"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="email"
              placeholder=""
            />
          </label>

          {requesting ? (
            <button className="bg-[#F74061] rounded-lg w-36 p-2 text-white font-semibold hover:scale-110 transition-all ease-in-out">
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-[#456A9D] rounded-lg w-36 p-2 text-white font-semibold hover:scale-110 transition-all ease-in-out"
            >
              Reset Link
            </button>
          )}
          <Link to="/login" className="text-sm text-[white]">
            Back to Login Page
          </Link>
        </form>
      </div>
      </div>
    </>
  );
}

export default ForgotPass;
