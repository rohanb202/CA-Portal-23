import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <div className="flex scrollbar-hide px-10 mt-5 mb-5 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll ">
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Masquerades</h3>
                <Link to="/Music">
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Indian Music</h3>
                </Link>
                <Link to="/Literature">
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Literary</h3>
                </Link>
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Quiz</h3>
                <Link to="/Dance">
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Dance</h3>
                </Link>

                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Fine Arts</h3>
                <h3 className="cursor-pointer text-white transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">Western Music</h3>
            </div>
            
        </nav>
    );
}