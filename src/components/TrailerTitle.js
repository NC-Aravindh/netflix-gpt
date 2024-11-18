import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const TrailerTitle = ({ title, description }) => {
  return (
    <div className=" flex flex-col w-screen aspect-video absolute px-14 py-52 z-10 text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="w-[30em]">{description}</p>
      <div className="flex">
      <button className= "flex items-center gap-2 bg-gray-300 py-3 px-6 my-4 hover:bg-gray-400 duration-500 rounded-md text-black">
        <FontAwesomeIcon className="text-2xl" icon={faPlay} />
        <span>Play</span>
      </button>
      <button className="flex items-center gap-2 bg-gray-600 py-3 px-4 my-4 mx-4 hover:bg-gray-500 duration-200 rounded-md text-white">
        <FontAwesomeIcon className="text-2xl" icon={faCircleInfo} /> More-Info
      </button>
      </div>
     
    </div>
  );
};

export default TrailerTitle;
