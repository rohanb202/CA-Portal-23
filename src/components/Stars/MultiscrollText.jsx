import React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import StarCss from "./star.module.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MultiscrollText() {
  const at1 = useRef(null);
  const at2 = useRef(null);
  const at3 = useRef(null);
  const projectRef = useRef(null);
  useEffect(() => {
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top top",
        end: "+=50%",
        scrub: true,
        markers:true,
      },
    });
    const ats = [at1.current, at2.current, at3.current];
    ats.forEach((at, i) => {
      tl5.to(at, {
        y: `${i * at.offsetHeight * 0.15}`,
        ease: "none",
      });
    });
  }, []);

  return (
    <>
     <div ref={projectRef} className={StarCss.heading}>
      <h1>
        Hello
      </h1>
</div>
<div  className="relative   flex flex-col items-center justify-center w-full text-center text-white BGB text-4xl  lg:text-7xl z-[3] uppercase  ">
  {/* <div className="mt-10"> */}
          <div ref={at3} className="absolute textStroke3">
            {/* and <br /> */}
            Dharshan Raval
          </div>
          <div ref={at2} className="absolute textStroke3 ">
            {/* and <br /> */}
            Dharshan Raval
          </div>
          <div ref={at1} className="absolute ">
            Dharshan Raval
          </div>
  {/* </div> */}
          
</div>
    </>
   
  );
}

export default MultiscrollText;