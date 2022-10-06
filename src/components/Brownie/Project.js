import React from "react";
import MainTitle from "./MainTitle";
import { ArrowUpIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
//const ScrollTrigger = dynamic(() => import("gsap/ScrollTrigger"), {});
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Project({ no, text, date, link, rev, parag, url }) {
  const [hover, setHover] = useState(false);
  let circ = useRef(null);
  let num = useRef(null);
  let img = useRef(null);
  let para = useRef(null);
  let main = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    //console.log(hover);
    let tl = gsap.timeline();

    if (hover) {
      tl.to(circ.current, {
        scale: 3,
      });
    } else {
      tl.to(circ.current, {
        scale: 1.5,
      });
    }
  }, [hover]);
  const openInNewTab = (url) => {
    if (typeof window !== "undefined") {
      // Client-side-only code

      window.open(url, "_blank", "noopener,noreferrer");
    }
    console.log("yoyo");
  };
  return (
    <div
      ref={main}
      className={`flex ${
        rev && `flex-row-reverse`
      }  w-full py-10 px-2 relative lg:space-x-10 h-[50vh] overflow-hidden`}
      data-aos={`${rev ? "fade-left" : "fade-right"}`}
    >
      <div ref={num} className="absolute top-2 md:top-0 ">
        <MainTitle text={no} hover={hover} setHover={setHover} />
      </div>
      <div
        onClick={() => openInNewTab(url)}
        ref={img}
        onMouseLeave={() =>
          setTimeout(() => setTimeout(() => setHover(false), 500))
        }
        onMouseEnter={() => setHover(true)}
        className={`flex w-full py-5 flex-col cursor-pointer relative  ${
          rev && "pl-10" && "items-end"
        } `}
      >
        <div className="w-8/12 h-full min-w-[300px] min-h-[200px] bg-slate-200 rounded-lg ">
          <img
            src={link}
            className="rounded-lg w-full h-full object-cover -z-[2]  "
          />
        </div>
        <div
          className={`${
            rev && `flex-row-reverse`
          } flex w-10/12 min-w-[300px] pt-5 pb-1  justify-end items-center space-x-2`}
        >
          {/* <h1 className="relative z-10 text-left h-3">{text}</h1> */}
          <div className="relative px-2">
            <ArrowUpIcon
              className={`z-10 w-5  ${rev ? `-rotate-45` : `rotate-45`}`}
            />
            <div
              ref={circ}
              className="w-5 h-5 bg-[#fe0944] absolute rounded-full top-0 -z-[1] "
            ></div>
          </div>
        </div>
        {/* <div
          className={`  flex items-center space-x-2 pl-10 font-semibold ${
            rev && `flex-row-reverse` && ` justify-end pr-10`
          }`}
        >
          <span className="w-8 h-[1px] bg-white"></span>
          <p>{date}</p>
        </div> */}
      </div>

      <div
        ref={para}
        className={` hidden py-10 lg:inline-flex relative w-[100%] OS ${
          !rev && "-left-20"
        } `}
      >
        {parag}
      </div>
    </div>
  );
}

export default Project;
