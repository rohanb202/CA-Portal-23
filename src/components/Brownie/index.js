import React from 'react';
import Project from "./Project";
import { useRef } from "react";
import ScrollText from "./ScrollText";

const Index = () => {
    let pro1 = useRef(null);
    const projectRef = useRef(null);
  return (
    <div>
      <section
        className="relative overflow-x-hidden text-white bg-black"
        ref={projectRef}
      >
        <div className="pt-2 overflow-x-hidden textStroke3">
          <ScrollText text="BROWNIE..POINTS" />
        </div>
        <div className="mt-10 px-[8vw]">
          <div ref={pro1} id="project">
            <Project
              url="https://github.com/rohanb202/linkedIn-clone"
              no="01"
              text="LinkedIn Clone"
              date="May 2022"
              link="../img/hoc.png"
              parag="Where you can post feeds, integrated with news on side panel using news API and features
dark mode. Made with Next JS, Next Auth with MongoDB adapter as Google Auth, using Tailwind CSS for
styling , Recoil for state management, MongoDB as database"
            />
          </div>
          <Project
            no="02"
            url="https://github.com/rohanb202/Insta-2.0"
            text="Instagram Clone"
            date="Apr 2022"
            link="/images/p2.png"
            parag="A mobile responsive web app where you can post feed with like and comment functionality, using Next JS ,Tailwind CSS, Firebasev9 and Recoil for state management."
            rev
          />
          <Project
            url="https://github.com/rohanb202/Ecommerce-clone"
            no="03"
            text="Ecommerce Websitee"
            date="Present"
            link="/images/p3.png"
            parag="An ecommerce store built with MERN stack, Node provides the backend environment for this application
Express middleware is used to handle requests, routes. Mongoose schemas to model the application data,
React for displaying UI components, Redux to manage application's state Redux Thunk middleware to handle
asynchronous redux actions
"
          />
          <Project
            no="04"
            url="https://kashiyatra.org/"
            text="Kashiyatra 2022"
            date="Dec 2021"
            link="/images/p4.jpg"
            parag="It's an Annual Socio-Cultural festival of Indian Institute of Technology (BHU) Varanasi, Worked as a frontend
web developer there."
            rev
          />
        </div>
      </section>
    </div>
  );
}

export default Index
