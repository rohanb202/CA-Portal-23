import React from 'react'
import event from "../../img/img1.png"
import prizes from "../../img/img2.png"
import merchandise from "../../img/img3.png"
import celebrity from "../../img/img4.png"
import certificate from "../../img/img5.png"
const Brownie_point = () => {
  return (
    <div className="">
      <div className="text-4xl font-semibold mb-28 ml-24 text-[#F74061]">
        Brownie Points
      </div>
      <div className="flex justify-center mb-48">
        <div >
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <div className="bg-[#F79840] w-fit p-3">
              <img
                className="my-9 mr-3 ml-3 h-40"
                src={event}
                alt="Event Pass"
              />
              <div className="text-white text-center text-4xl font-semibold my-10">
                Event Pass
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <div className="bg-[#F75440] w-fit p-3">
              <img className="my-9 mr-3 ml-3 h-40" src={prizes} alt="prizes" />
              <div className="text-white text-center text-4xl font-semibold my-10">
                Prizes
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <div className="bg-[#06122E] w-fit p-3">
              <img
                className="my-9 mr-3 ml-3 h-40 px-5"
                src={merchandise}
                alt="merchandise"
              />
              <div className="text-white text-center text-4xl font-semibold my-10">
                Merchandise
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <div className="bg-[#098770] w-fit p-3">
              <img
                className="my-9 mr-3 ml-3 h-40 px-7"
                src={celebrity}
                alt="celebrity"
              />
              <div className="text-white text-center text-4xl font-semibold my-10">
                Celebrity Meets
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <div className="bg-[#F74061] w-fit p-3">
              <img
                className="my-9 mr-3 ml-3 h-40"
                src={certificate}
                alt="certificate"
              />
              <div className="text-white text-center text-4xl font-semibold my-10">
                Certificates
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Brownie_point
