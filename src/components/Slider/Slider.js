import { useState, useEffect } from "react";
import left from "./images/AiOutlineArrowLeft.svg";
import right from "./images/AiOutlineArrowRight.svg";
import "./Slider.scss";
import pattern from "../../svgs/throwbackSidePattern.svg"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      image: require("./throwback/1.jpg"),
    },
    {
      image: require("./throwback/2.jpg"),
    },
    {
      image: require("./throwback/3.jpg"),
    },
    {
      image: require("./throwback/4.jpg"),
    },
    {
      image: require("./throwback/5.jpg"),
    },
    {
      image: require("./throwback/6.jpg"),
    },
    {
      image: require("./throwback/7.jpg"),
    },
    {
      image: require("./throwback/8.jpg"),
    },
    {
      image: require("./throwback/9.jpg"),
    },
    {
      image: require("./throwback/10.jpg"),
    },
    {
      image: require("./throwback/11.jpg"),
    },
    {
      image: require("./throwback/12.jpg"),
    },
    {
      image: require("./throwback/13.jpg"),
    },
    {
      image: require("./throwback/14.jpg"),
    },
    {
      image: require("./throwback/15.jpg"),
    },
    {
      image: require("./throwback/16.jpg"),
    },
  ];

  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <>
      <div className="slider" id="carousel">
      <img className="sliderPatternleft" src={pattern}/>
        
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="slide" className="image" />
                </div>
              )}
            </div>
          );
        })}
        <img className="sliderPatternright" src={pattern}/>


        <img
          src={left}
          className="arrow prev"
          onClick={prevSlide}
          alt="left-arrow"
        />
        <img
          src={right}
          className="arrow next"
          onClick={nextSlide}
          alt="right-arrow"
        />
      </div>
    </>
  );
};

export default Slider;
