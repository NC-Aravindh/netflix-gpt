import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const TrailerTitle = ({ title, description }) => {
  return (
    <div className=" flex flex-col w-full aspect-video absolute px-4 max-512:pt-0 max-346:bottom-32 max-512:bottom-16 pt-16 md:px-6 md:pt-36 md:pb-18 lg:px-14 lg:py-52 z-10 text-white  bg-gradient-to-t from-black md:bg-gradient-to-r mg:from-black">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">{title}</h1>
      <p className=" max-512:w-11/12 w-[21em] md:w-[30em] text-xs md:text-lg">{description}</p>
      <div className="flex">
      <button className= "flex items-center gap-2 bg-gray-300 h-6 md:h-8 py-1 px-3 lg:h-12 lg:py-3 lg:px-6 my-4 hover:bg-gray-400 duration-500 rounded-md text-black">
        <FontAwesomeIcon className=" text-base md:text-lg lg:text-2xl" icon={faPlay} />
        <span className="text-xs md:text-lg">Play</span>
      </button>
      <button className="flex items-center gap-2 bg-gray-600 h-6 md:h-8 py-1 px-3 lg:h-12 lg:py-3 lg:px-6 my-4 mx-4 hover:bg-gray-500 duration-200 rounded-md text-white">
        <FontAwesomeIcon className=" text-base md:text-lg lg:text-2xl" icon={faCircleInfo} /> 
        <span className="text-xs md:text-lg">More-Info</span>
      </button>
      </div>
     
    </div>
  );
};

export default TrailerTitle;
