import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import PreEventsCss from "./preevents.module.css"
import Nav from "../KY nav/nav";
// import { event } from "jquery";
export default function PreEvents() {
  const [navdisplay, setNavDisplay] = useState(0);

  const { userInfo } = useContext(AuthContext);

  return (
    <>
    <div className="teamBg">
      <Nav></Nav>
      <div class="flex justify-center">
        <h1 class="font-medium leading-tight text-5xl mt-5 pt-4 mb-2 text-white">Pre Events</h1>
      </div>
      <div className={PreEventsCss.PreEventsColumn}>
        <div className="flex justify-center">
        <div class="w-full mt-8 mb-8 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img class="object-cover w-full h-56" src="https://standard.asl.org/wp-content/uploads/2019/11/mun-900x600.jpg" alt="avatar" />
      

       <div class="py-5 text-center">
          <a href="#" class="m-2block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">MUN</a>
          <p class="ml-3 mr-3 mt-2  font-light text-gray-500 dark:text-gray-400">Students can study about diplomacy, international relations, and the UN through the educational simulation known as Model United Nations (often referred to as Model UN or MUN).</p>
       </div>
       </div>
        </div>
        <div className="flex justify-center">
        <div class="w-full mt-8 mb-8 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img class="object-cover w-full h-56" src="https://www.thespruce.com/thmb/5oRHaQgNnIKyJrEq_1e63XzjIKQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indoor-treasure-hunt-for-children-1695332-e764ff3cc54c4f71a475a0f705dcc574.png" alt="avatar" />
      

       <div class="py-5 text-center">
          <a href="#" class="m-2block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Treasure Hunt</a>
          <p class="ml-3 mr-3 mt-2  font-light text-gray-500 dark:text-gray-400">A treasure hunter is someone who actively looks for riches. For instance, treasure hunters go for sunken shipwrecks and scavenge valuable relics. The market for antiquities typically supports this sector of the economy.</p>
       </div>
       </div>
        </div>
        <div className="flex justify-center">
        <div class="w-full mt-8 mb-8 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img class="object-cover w-full h-56" src="https://as1.ftcdn.net/v2/jpg/01/89/53/76/1000_F_189537694_tasEOznUNkOmFIvgFfLb2pbt8JYhUFzE.jpg" alt="avatar" />
      

       <div class="py-5 text-center">
          <a href="#" class="m-2block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Mystique</a>
          <p class="ml-3 mr-3 mt-2  font-light text-gray-500 dark:text-gray-400">A nightclub, sometimes known as a music club, discothèque, or simply club, is a place where people go to have fun at night. It has a dance floor, a light display, and a stage where live music is performed or a DJ spins recorded music.</p>
       </div>
       </div>
        </div>
        <div className="flex justify-center">
        <div class="w-full mt-8 mb-8 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img class="object-cover w-full h-56" src="https://i.ytimg.com/vi/_z0A-2H5UFk/maxresdefault.jpg" alt="avatar" />
      

       <div class="py-5 text-center">
          <a href="#" class="m-2block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">Bliss</a>
          <p class="ml-3 mr-3 mt-2  font-light text-gray-500 dark:text-gray-400">Mini Kashiyatra of the Indian Institute of Technology Varanasi's yearly sociocultural celebration. One of the biggest college festivals in India, it lasts four days and is celebrated in January every year.</p>
       </div>
       </div>
        </div>
      
      
      </div>
      
    </div>
    </>
  );
}
