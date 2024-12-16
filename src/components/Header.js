import React, { useEffect } from "react";
import { signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { addUser, removeUser , setUserProfile } from "../utils/userSlice";
import { setGptSearch } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //User signup, signin ,signout .. Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        if (photoURL) {
          navigate("/browse");
        } else {
          navigate("/profile");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //cleanup when the component is unmounted.
    return () => unsubscribe();
  }, []);

  function handleGptSearch() {
    dispatch(setGptSearch());
  }

  const isGptSearchEnabled = useSelector((store) => store.gpt.enableGptSearch);

  //The second div has overlay effects
  return (
    <div className="top-0 absolute z-40 bg-gradient-to-b from-black w-full h-11 lg:h-20 md:h-16  flex justify-between">
      <img
        className=" w-[6em] md:w-[8em] lg:w-[10em] left-[8em] "
        src={NETFLIX_LOGO_URL}
        alt="netflix-logo"
      ></img>
      {user?.userInfo && (
        <div className="flex justify-evenly items-center gap-2">
          <button
            onClick={handleGptSearch}
            className="bg-red-600  rounded-lg text-white  md:mr-4 text-sm p-1 md:text-base lg:text-lg  md:h-10 md:p-1 lg:h-14 lg:p-4 hover:bg-red-700 transition ease-in"
          >
            {isGptSearchEnabled ? "Homepage" : "GPT-Search"}
          </button>
          <img
            onClick={()=>dispatch(setUserProfile())}
            className=" w-10 h-10 md:w-16 md:h-16 rounded-full cursor-pointer"
            src={user?.userInfo.photoURL}
            alt="user-icon"
          ></img>
          <button
            onClick={handleSignOut}
            className="text-white font-bold  text-base md:text-xl transition duration-300 hover:text-red-700 ease-in w-fit h-fit mr-4 md:ml-4 "
          >
            {" "}
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
