import React from "react";
import { useState, useEffect } from "react";

function MainTitle({ text, setHover, hover }) {
  useEffect(() => {
    // if (hover) {
    //   setTimeout(() => {
    //     setHover(false);
    //   }, 2000);
    // }
    //console.log(hover);
  }, [hover]);
  return (
    <div className="relative flex text-6xl cursor-pointer sm:text-8xl BGB">
      <h1 className="relative textStroke3 ">{text}</h1>
      <h1
        className={`absolute textStroke4 ${
          hover ? "activeHover" : "nonActiveHover"
        } `}
      >
        {text}
      </h1>
    </div>
  );
}

export default MainTitle;
