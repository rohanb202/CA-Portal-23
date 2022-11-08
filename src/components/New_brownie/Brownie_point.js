import React from 'react'
import event from "../../img/img1.png"
import prizes from "../../img/img2.png"
import merchandise from "../../img/img3.png"
import celebrity from "../../img/img4.png"
import certificate from "../../img/img5.png"
import white_strip from "../../img/white_strip.png";
import Side_Pattern from "../../img/Side_Pattern.png";
import MtPattern from "../../img/MtPattern.png";
// import React from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion,useAnimation } from "framer-motion";
import AnimatedText from "../../Contact/AnimatedText";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.05 } },
  hidden: { opacity: 0, scale: 0 }
};

const Brownie_point = () => {
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
    { type: "heading1", text: "Brownie Points" }
  ];
  return (
    <div className="">
      <div className="text-4xl font-semibold mb-14 text-left text-[#F74061]">
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
      </div>
      <div>
        <img
          src={white_strip}
          alt=""
          className="relative lg:top-5 hidden lg:block"
        />
        <div className="lg:flex  justify-center h-[60%]">
          <div className="flex">
            <img src={Side_Pattern} alt="" className="relative left-6" />
            <div className="">
              <img
                src={MtPattern}
                alt=""
                className="relative top-4 lg:hidden"
              />
              <div className="w-56">
                <img src="" alt="" />
                <div>
                  <img src="" alt="" />
                  <div className="bg-[#F79840] p-3">
                    <img
                      className="my-9 mr-3 ml-3 h-28 px-10"
                      src={event}
                      alt="Event Pass"
                    />
                    <div className="text-white text-center text-3xl font-semibold my-10">
                      Event Pass
                    </div>
                  </div>
                  <img src="" alt="" />
                </div>
                <img src="" alt="" />
              </div>
              <img
                src={MtPattern}
                alt=""
                className="relative bottom-4 lg:hidden"
              />
            </div>
            <img
              src={Side_Pattern}
              alt=""
              className="relative right-6 lg:hidden"
            />
          </div>
          <div className="flex">
            <img
              src={Side_Pattern}
              alt=""
              className="relative left-6 lg:hidden"
            />
            <div className="w-56">
              <img
                src={MtPattern}
                alt=""
                className="relative top-4 lg:hidden"
              />
              <div>
                <img src="" alt="" />
                <div className="bg-[#F75440]  p-3">
                  <img
                    className="my-9 mr-3 ml-3 h-28 px-10"
                    src={prizes}
                    alt="prizes"
                  />
                  <div className="text-white text-center text-3xl font-semibold my-10">
                    Prizes
                  </div>
                </div>
                <img src="" alt="" />
              </div>
              <img
                src={MtPattern}
                alt=""
                className="relative bottom-4 lg:hidden"
              />
            </div>
            <img
              src={Side_Pattern}
              alt=""
              className="relative right-6 lg:hidden"
            />
          </div>
          <div className="flex">
            <img
              src={Side_Pattern}
              alt=""
              className="relative left-6 lg:hidden"
            />
            <div className="w-56">
              <img
                src={MtPattern}
                alt=""
                className="relative top-4 lg:hidden"
              />
              <div>
                <img src="" alt="" />
                <div className="bg-[#06122E]  p-3">
                  <img
                    className="my-9 mr-3 ml-3 h-28 px-10"
                    src={merchandise}
                    alt="merchandise"
                  />
                  <div className="text-white text-center text-3xl font-semibold my-10">
                    Merchandise
                  </div>
                </div>
              </div>
              <img src="" alt="" />
              <img
                src={MtPattern}
                alt=""
                className="relative bottom-4 lg:hidden"
              />
            </div>
            <img
              src={Side_Pattern}
              alt=""
              className="relative right-6 lg:hidden"
            />
          </div>

          <div className="flex">
            <img
              src={Side_Pattern}
              alt=""
              className="relative left-6 lg:hidden"
            />
            <div className="w-56">
              <img
                src={MtPattern}
                alt=""
                className="relative top-4 lg:hidden"
              />
              <div>
                <img src="" alt="" />
                <div className="bg-[#098770]  p-3">
                  <img
                    className="my-9 mr-3 ml-3 h-28 px-7"
                    src={celebrity}
                    alt="celebrity"
                  />
                  <div className="text-white text-center lg:text-2xl text-3xl font-semibold my-11 ">
                    Celebrity Meets
                  </div>
                </div>
                <img src="" alt="" />
              </div>
              <img
                src={MtPattern}
                alt=""
                className="relative bottom-4 lg:hidden"
              />
            </div>
            <img
              src={Side_Pattern}
              alt=""
              className="relative right-6 lg:hidden"
            />
          </div>
          <div className="flex">
            <img
              src={Side_Pattern}
              alt=""
              className="relative left-6 lg:hidden"
            />
            <div className="w-56">
              <img
                src={MtPattern}
                alt=""
                className="relative top-4 lg:hidden"
              />
              <div>
                <img src="" alt="" />
                <div className="bg-[#F74061]  p-3">
                  <img
                    className="my-9 mr-6 ml-1 h-28 px-10"
                    src={certificate}
                    alt="certificate"
                  />
                  <div className="text-white text-center text-3xl font-semibold my-10">
                    Certificates
                  </div>
                </div>
                <img src="" alt="" />
              </div>
              <img
                src={MtPattern}
                alt=""
                className="relative bottom-4 lg:hidden"
              />
            </div>
            <img src={Side_Pattern} alt="" className="relative right-6" />
          </div>
        </div>
        <img
          src={white_strip}
          alt=""
          className="relative bottom-[190px] hidden lg:block"
        />
      </div>
    </div>
  );
}

export default Brownie_point
