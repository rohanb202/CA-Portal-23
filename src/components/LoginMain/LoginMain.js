import React from "react";
import stripes from "./stripes.svg";
import logo from "./logo.svg";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function LoginMain() {
  let { loginUser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[50vw] hidden md:block">
        <img src={stripes} alt="" className="object-cover h-screen" />
        {/* <div className="h-screen bgStripes"></div> */}
      </div>

      <form
        onSubmit={loginUser}
        class="flex flex-col space-y-5 justify-center items-center px-10"
      >
        <img src={logo} alt="" className="w-2/3 min-w-[18rem]" />

        <label className="block w-6/12 min-w-[15rem]">
          <span className="text-gray-700 whitespace-nowrap">Email ID</span>
          <input
            type="email"
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="email"
            placeholder=""
          />
        </label>
        <label class="block  w-6/12 min-w-[15rem]">
          <span class="text-gray-700">Password</span>
          <input
            type="password" name="password"
            class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
          />
        </label>
        <Link to="/forgotpass" className="text-sm text-[#F74061]">
          Forgot password?
        </Link>
        <button
          type="submit"
          className="bg-[#F74061] rounded-lg w-36 p-2 text-white font-semibold hover:scale-110 transition-all ease-in-out"
        >
          Login
        </button>
        <span class="text-sm text-[#F74061]">
          <span className="text-[#F79840]">Don't have an account?</span>
          <Link to="/login"> Sign up</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginMain;
