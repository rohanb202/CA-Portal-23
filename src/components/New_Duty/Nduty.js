import React from "react";
import responsibility from "../../img/responsibility.png";

const Nduty = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-4xl font-semibold mb-14 lg:ml-24 ml-5 mr-5 text-center lg:text-left text-[#F74061]">
          Responsibilities as Campus Ambassador
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:ml-24 ml-5 mr-5 lg:mr-0 mb-20 lg:mb-0 lg:w-[45%] font-semibold">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </div>
            <div className="mt-5">
              per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
              ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            </div>
          </div>
          <img className="mr-3 lg:ml-24 ml-10 mt-5 lg:mt-0 h-72 relative bottom-14" src={responsibility} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nduty;
