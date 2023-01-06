import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import kylogo from "./img/kylogo.svg";
import Rohan from "./img/Rohan.webp";
import Nav from "../KY nav/nav";
import "./team.css";
import Data from "./dataTeam.json";
import Senior from "./senior.json";
import evenetx from "./eventx.json";
import market from "./marketing.json";
import operations from "./operations.json";
import pr from "./pr.json";
import publicity from "./publicity.json";
import execteam from "./exacteam.json";
// import { event } from "jquery";
export default function Team() {
  const [navdisplay, setNavDisplay] = useState(0);

  const { userInfo } = useContext(AuthContext);

  return (
    <div className="teamBg">
      <Nav></Nav>
      <section class="content-center">
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-black capitalize lg:text-4xl pt-16">
            Our <span class="text-blue-600">Executive Team</span>
          </h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {execteam.map((data) => {
              return (
                <>
                  <div class="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <div class="flex flex-col sm:-mx-4 sm:flex-row">
                      <img
                        class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                        src={data.profile}
                        alt=""
                      />

                      <div class="mt-4 sm:mx-4 sm:mt-0">
                        <h1 class="text-black-500 text-xl font-semibold  capitalize md:text-2xl dark:text-white group-hover:text-white">
                          {data.name}
                        </h1>

                        <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                          {data.designation}
                        </p>
                      </div>
                    </div>

                    <p class="mt-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-300">
                      {data.content}
                    </p>

                    <div class="flex mt-4 -mx-2">
                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-black capitalize lg:text-4xl pt-16">
            Senior <span class="text-blue-600">Advisors</span>
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {Senior.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section class="content-center">
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Core Tech Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {Data.map((data) => {
              return (
                <>
                  <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group  cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>

                      <a
                        href="https://github.com/rohanb202"
                        target="_blank"
                        rel="noreferrer"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Github"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Core Marketing Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {market.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Core Publicity Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {publicity.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Core PR Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {pr.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Core Events Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {evenetx.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="content-center px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-white capitalize lg:text-4xl pt-16">
            Operations Team
          </h1>

          <div class="content-center grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
            {operations.map((data) => {
              return (
                <>
                  <div class=" flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#90e0ef] dark:border-gray-700 dark:hover:border-transparent cardx">
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                      src={data.profile}
                      alt=""
                    />

                    <div class="mt-4 text-2xl text-center text-black-500 capitalize group-hover:text-white">
                      {data.name}
                    </div>

                    <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">
                      {data.designation}
                    </p>

                    <div class="flex mt-3 -mx-2">
                    <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Reddit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>

                      <a
                        href="#"
                        class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg
                          class="w-6 h-6 fill-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
