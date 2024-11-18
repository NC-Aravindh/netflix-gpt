import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

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
  //The second div has overlay effects
  return (
    <div className="absolute z-50 bg-gradient-to-b from-black w-full h-20 flex justify-between">
      <img
        className=" w-[10em] left-[8em] "
        src={NETFLIX_LOGO_URL}
        alt="netflix-logo"
      ></img>
      {user && (
        <div className="flex">
          <h1>{user?.name}</h1>
          <img className="w-[10em]" src={user?.photoURL} alt="user-icon"></img>
          <button
            onClick={handleSignOut}
            className="text-orange-600 font-bold text-xl border-red-600 border-solid border-2 p-4"
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
