import React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function MultiscrollText() {
  let st1 = useRef(null);
  let st2 = useRef(null);
  let st3 = useRef(null);
  useEffect(() => {
    let sts = [st1.current, st2.current, st3.current];
    let tl = gsap.timeline({ repeat: -1 });
    sts.forEach((st, i) => {
      tl.to(st, {
        y: "-20px",
        opacity: 0,
        duration: 0.3,
      })
        .to(st, {
          y: "20px",
          duration: 0.3,
        })
        .to(st, {
          opacity: 1,
          ease: "power3.out",
          duration: 0.3,
          y: "0px",
        })
        .to(st, {
          opacity: 0,
          y: "-20px",
          delay: 0.5,
          ease: "power3.in",
        });
    });

    // tl.from(sts, {
    //   y: "0px",
    //   delay: 1,
    //   visibility: "visible",
    // })
    //   .to(sts, {
    //     stagger: 1,
    //     y: "-50px",
    //     opacity: 0,
    //   })
    //   .to(sts, {
    //     visibility: "hidden",
    //   });
  }, []);
  const desk = (
    <div className="flex flex-col items-center mx-auto space-x-5 text-4xl whitespace-nowrap sm:flex-row BGB md:text-6xl lg:text-7xl">
      <div className="absolute opacity-0" ref={st1}>
        Work Together
      </div>
      <div ref={st2} className="absolute opacity-0">
        Collaborate
      </div>
      <div ref={st3} className="absolute opacity-0">
        Grab Coffee
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center mx-auto space-x-5 text-4xl whitespace-nowrap sm:flex-row BGB md:text-6xl lg:text-7xl">
      <div className="absolute opacity-0" ref={st1}>
        Work Together
      </div>
      <div ref={st2} className="absolute opacity-0">
        Collaborate
      </div>
      <div ref={st3} className="absolute opacity-0">
        Grab Coffee
      </div>
    </div>
  );
}

export default MultiscrollText;