import React, { useRef, useState } from "react";
import { checkAndValidateForm } from "../utils/validateForm";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { LOGIN_BG_URL } from "../utils/constants.js";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUpform, setSignupForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  function handleClick() {
    const validateMessage = checkAndValidateForm(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );

    setErrorMsg(validateMessage);

    if (validateMessage) return;

    //SIGN UP FORM
    if (isSignUpform) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              //Profile updated
              const { displayName, email, photoURL, uid } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const { code, message } = error;
              setErrorMsg(code + "-" + message);
            });
        })
        .catch((error) => {
          const { code, message } = error;
          setErrorMsg(code + "-" + message);
        });
    }
    //SIGN IN FORM
    else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          
        })
        .catch((error) => {
          const { code, message } = error;
          setErrorMsg(code + "-" + message);
        });
    }
  }
  return (
    <div>
      <div className="h-screen relative">
        <img
          className="object-cover w-full h-full"
          src={LOGIN_BG_URL}
          alt="login-bg-img"
        ></img>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-20 absolute bg-opacity-65 bg-black w-[18em] lg:w-[28em] p-8 lg:p-16 md:p-8 md:w-[22em] flex flex-col items-center gap-4 lg:gap-6 md:gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
      >
        <h1 className="self-start lg:text-3xl md:text-2xl text-xl font-bold">
          {isSignUpform ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpform && (
          <input
            className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded border-solid"
            ref={name}
            type="text"
            name="username"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded border-solid"
          ref={email}
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded"
          ref={password}
          type='password'
          placeholder="Password"
          role="password"
        ></input>
        <p className="font-bold text-red-400">{errorMsg}</p>
        <button
          onClick={handleClick}
          className="bg-red-600 text-white h-8 md:h-10 md:p-2 w-full rounded-md hover:bg-red-700 duration-500"
          name={isSignUpform ? "Sign Up" : "Sign In"}
        >
          {isSignUpform ? "Sign Up" : "Sign In"}
        </button>
        {isSignUpform || (
          <>
            <p>OR</p>
            <button className="bg-white bg-opacity-15 text-white h-8 text-center md:h-10 md:p-2 w-full rounded-md hover:bg-opacity-10 duration-500">
              Use a sign in code
            </button>
            <a className="hover:underline hover:text-gray-400" href="/">
              {" "}
              Forgot Password?
            </a>
          </>
        )}

        <p>
          {isSignUpform ? "Already registered?" : "New to Netflix?"}{" "}
          <span
            onClick={() => setSignupForm(!isSignUpform)}
            className="hover:underline cursor-pointer"
            role="switchPage"
          >
            {isSignUpform ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
