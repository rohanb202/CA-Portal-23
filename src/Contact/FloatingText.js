import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./FloatingText.css";

export default function FloatingText() {

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Contact Page" }
  ];
  // const paragraphText=[
  //   {
  //     type: "paragraph",
  //     text: "The Pandemic may have brought our world to a standstill. Time came to a stop and motion ceased. Now, as the world recovers, it comes back stronger and more alive than ever. Kashiyatra presents before you a Cultural Resurgence — a celebration of the rebound of Culture in its unique styles and hues. With a myriad of events and artists, this year Kashiyatra celebrates the undying Culture that unites us and keeps us enthralled."
  //   }
  // ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };


  return (
    <>
    <motion.div
      className="App"
      initial="hidden"

      animate="visible" 
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      {/* <div className="container">
        {paragraphText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div> */}
    </motion.div>
   
    </>
    
  );
}
