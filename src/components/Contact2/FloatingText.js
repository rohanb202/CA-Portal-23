import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion,useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import "./FloatingText.css";

AOS.init();

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } },
  hidden: { opacity: 0, scale: 0 }
};

export default function FloatingText() {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Contact" }
  ];
  // const paragraphText=[
  //   {
  //     type: "paragraph",
  //     text: "The Pandemic may have brought our world to a standstill. Time came to a stop and motion ceased. Now, as the world recovers, it comes back stronger and more alive than ever. Kashiyatra presents before you a Cultural Resurgence — a celebration of the rebound of Culture in its unique styles and hues. With a myriad of events and artists, this year Kashiyatra celebrates the undying Culture that unites us and keeps us enthralled."
  //   }
  // ]

  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025
  //     }
  //   }
  // };

  return (
    <>
    {/* <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> */}
    <motion.div
      className="App"
      ref={ref}
      // variants={boxVariant}
      initial="hidden"
      animate={control} 
      variants={boxVariant}
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
    {/* </div> */}
    {/* < div class="page">
    <div class="text text--perspective App" data-scroll="out" data-splitting="">Perspective</div>
    </div> */}
    
    </>
    
  );
}
