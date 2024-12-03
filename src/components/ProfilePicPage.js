import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import ProfilePic from "./ProfilePic";
import { useSelector } from "react-redux";

const ProfilePicPage = () => {
  const navigate = useNavigate();
  const profPics = useSelector((store) => store.user.profilePics);
  
  function handleProfileClick(event) {
    const photoURL = event.target.currentSrc;
    updateProfile(auth.currentUser, {
      photoURL: photoURL,
    })
      .then(() => {
        navigate("/browse");
      })
      .catch((error) => {
        console.log("Profile Pic udpate error!");
      });
  }
  return (
    <div className="bg-black h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-3xl text-white font-bold">
          Choose Your Profile Pic
        </h1>
        <div className="flex gap-10 flex-wrap p-36 pt-8 justify-between">
          {profPics?.map((img) => (
            <ProfilePic
              handleClick={handleProfileClick}
              key={img.id}
              imgURL={img.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePicPage;
