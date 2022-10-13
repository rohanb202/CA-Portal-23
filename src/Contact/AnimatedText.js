import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
  return <span className="word-wrapper">{props.children}</span>;
};


const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};


const AnimatedCharacters = (props) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#F5F5F5",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
    },
    visible: {
      y: 0,
      color: "#F74061",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 }
    }
  };


  const splitWords = props.text.split(" ");


  const words = [];


  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }


  words.map((word) => {
    return word.push("\u00A0");
  });


  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    paddingBottom: "15px" 
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block"}}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
