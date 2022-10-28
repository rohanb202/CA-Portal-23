import React from "react";
import NavBar from "../navbar/navbar";
import EventRegistrationCss from "./EventRegistration.module.css";
import img1 from "./img/unsplash_GRDpPpKczdY.png"

export default function EventRegistration(){
    return(
        <>
        <NavBar />
        <div className={EventRegistrationCss.eventRegistrationHeading} style={{color:"#F74061"}}>Events</div>
        <div className={EventRegistrationCss.eventRegistrationBorder}></div>
        <div className={EventRegistrationCss.eventRegistrationColumns}>
        <div className={EventRegistrationCss.eventRegistrationCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F74061"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>
        <div className={EventRegistrationCss.eventRegistrationCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F74061"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>
        <div className={EventRegistrationCss.eventRegistrationCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F74061"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>
        <div className={EventRegistrationCss.eventRegistrationCard}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F74061"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F74061"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>
        {/* <div className={EventRegistrationCss.eventRegistrationCard}>

        </div> */}
        <div className={EventRegistrationCss.eventRegistrationCard} style={{backgroundColor:"#F75440"}}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F75440"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F75440"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>

        <div className={EventRegistrationCss.eventRegistrationCard} style={{backgroundColor:"#F75440"}}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F75440"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F75440"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>

        <div className={EventRegistrationCss.eventRegistrationCard} style={{backgroundColor:"#F75440"}}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F75440"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F75440"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>

        <div className={EventRegistrationCss.eventRegistrationCard} style={{backgroundColor:"#F75440"}}>
        <img className="w-full" src={img1} alt="Sunset in the mountains" />
        <div className="mt-1 text-white" style={{backgroundColor:"#F75440"}}>
            <div className="font-bold text-xl mb-2 mt-2">DFZ Showdown</div>
            <div className="font-bold text-xl mb-2">3 PM, Friday</div>
            <div className={EventRegistrationCss.eventCardBorder}></div>
            <p className="text-base text-white mt-3 text-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="flex items-center justify-center mt-5 mb-5">
                <button className="bg-white hover:bg-slate-100 text-white font-bold py-2 px-[90px] rounded" style={{color:"#F75440"}}>
                   Explore
                </button>
            </div>
            
        </div>
        </div>

        </div>
        
        </>
    );
}