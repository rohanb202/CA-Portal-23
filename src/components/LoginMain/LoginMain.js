import React, { useEffect, useState } from "react";
import stripes from "./stripes.svg";
import logo from "./logo.svg";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import LoginWithGoogle from "../../Pages/GoogleLogin/LoginWithGoogle";
import LoaderCss from "./LoginMain.module.scss";
import "./login.css";

function LoginMain() {
  const [requesting, setRequesting] = useState(false);
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [formData, setformData] = useState({ email: "", password: "" });
  let { loginUser, clearTokens } = useContext(AuthContext);

  useEffect(() => {
    // console.log("clearing tokens");
    clearTokens();
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleClick(e) {
    e.preventDefault();

    setRequesting(true);
    await loginUser(formData.email, formData.password);
    setRequesting(false);
  }

  return (
    <div className="flex items-center justify-center h-screen loginbghehe">
      <form
        onSubmit={handleClick}
        className="flex flex-col space-y-5 justify-center items-center px-10 formhi"
      >
        <img src={logo} alt="logoImg" className="w-[60%] min-w-[18rem]" />
        {/* <div className="pt-4">
          <LoginWithGoogle />
        </div> */}
        <div className="flex items-center justify-center space-x-2 w-full ">
          <div className="h-[1px] w-[23%] min-w-[6rem] bg-black/50"></div>
          <p className="text-center">or</p>
          <div className="h-[1px] w-[23%] min-w-[6rem] bg-black/50"></div>
        </div>
        <label className="block w-6/12 min-w-[15rem]">
          <span className="text-gray-700 whitespace-nowrap">Email ID</span>
          <input
            type="email"
            onChange={handleChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="email"
            placeholder=""
            required={true}
          />
        </label>
        <label className="block  w-6/12 min-w-[15rem]">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
            required={true}
          />
        </label>
        <Link to="/forgotpass" className="text-sm text-[white]">
          Forgot password?
        </Link>
        <Link to="/register" className="text-sm text-[white]">
          Not a registered user? Sign up
        </Link>
        <div className={LoaderCss.LoginBtnAndSpinner}>
          {!requesting && (
            <>
              <button
                type="submit"
                className="bg-[#456A9D] rounded-lg w-36 p-2 text-white font-semibold hover:scale-110 transition-all ease-in-out"
              >
                Login
              </button>
            </>
          )}
          <div
            className={
              !requesting
                ? LoaderCss.preloaderFloatingCirclesDisappear
                : LoaderCss.preloaderFloatingCircles
            }
          >
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_01}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_02}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_03}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_04}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_05}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_06}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_07}
            ></div>
            <div
              className={LoaderCss.fCircleG}
              id={LoaderCss.frotateG_08}
            ></div>
          </div>
        </div>

        <span className="text-sm text-[#F74061] accounta">
          {/* <span className="text-[white] text-3xl my-4"><b>Registrations for KY'23 are closed</b></span> */}
          <div className="h-[2px] min-w-[6rem] bg-black/50"></div>
        </span>
        <Link to="/" className="text-sm text-[white]">
          Back to Home Page
        </Link>

        {/* <LoginWithGoogle /> */}
      </form>
    </div>
  );
}

export default LoginMain;
