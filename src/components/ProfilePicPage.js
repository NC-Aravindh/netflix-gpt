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
    <div className="min-h-screen ">
      <div className="bg-black min-h-screen flex flex-col justify-center items-center gap-8 ">
        <h1 className="text-xl md:text-3xl text-white font-bold">
          Choose Your Profile Pic
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
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
