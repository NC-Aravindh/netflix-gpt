import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser , setUserProfile } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
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
    <div className="top-0 absolute z-40 bg-gradient-to-b from-black w-full h-20 flex justify-between">
      <img
        className=" w-[10em] left-[8em] "
        src={NETFLIX_LOGO_URL}
        alt="netflix-logo"
      ></img>
      {user?.userInfo && (
        <div className="flex justify-evenly items-center gap-2">
          <button
            onClick={handleGptSearch}
            className="bg-red-600 p-4 rounded-lg text-white mr-4 hover:bg-red-700 transition ease-in"
          >
            {isGptSearchEnabled ? "Homepage" : "GPT-Search"}
          </button>
          <img
            onClick={()=>dispatch(setUserProfile())}
            className="w-16 h-16 rounded-full cursor-pointer"
            src={user?.userInfo.photoURL}
            alt="user-icon"
          ></img>
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-xl transition duration-300 hover:text-red-700 ease-in w-fit h-fit mr-4 ml-4 "
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
