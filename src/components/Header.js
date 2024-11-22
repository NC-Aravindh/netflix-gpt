import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //cleanup when the component is unmounted.
    return () => unsubscribe();
  }, []);

function handleGptSearch(){
  dispatch(setGptSearch());
}

const isGptSearchEnabled = useSelector((store) => store.gpt.enableGptSearch);

  //The second div has overlay effects
  return (
    <div className="top-0 absolute z-50 bg-gradient-to-b from-black w-full h-20 flex justify-between">
      <img
        className=" w-[10em] left-[8em] "
        src={NETFLIX_LOGO_URL}
        alt="netflix-logo"
      ></img>
      {user && (
        <div className="flex justify-evenly items-center gap-2">
          {/* <h1 className="text-white">{user?.displayName}</h1> */}
          <button 
          onClick={handleGptSearch}
          className="bg-red-700 p-4 rounded-lg text-white mr-4 hover:bg-red-600 ease-in">
            {isGptSearchEnabled ?"Homepage" :"GPT-Search"}
          </button>
          <img
            className="w-16 h-16 rounded-full"
            src={user?.photoURL}
            alt="user-icon"
          ></img>
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-xl hover:underline ease-in w-fit h-fit"
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
