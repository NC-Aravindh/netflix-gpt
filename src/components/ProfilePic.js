import React from "react";

const ProfilePic = ({ imgURL, handleClick }) => {
  return (
    <div className="w-[7em] h-[7em] md:w-[10em] md:h-[10em] lg:w-[13em] lg:h-[13em] ">
      <img
        key={imgURL}
        onClick={handleClick}
        className="object-cover w-full h-full cursor-pointer rounded-full hover:scale-95 hover:shadow-circle hover:shadow-white transition-all duration-500"
        src={imgURL}
      ></img>
    </div>
  );
};

export default ProfilePic;
