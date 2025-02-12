import React, { useRef, useState } from "react";
import { checkAndValidateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { LOGIN_BG_URL } from "../utils/constants.js";
import SignupForm from "./SignupForm.js";
import ResetPass from "./ResetPass.js";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignUpform, setSignupForm] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);
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
        {resetPassword ? (
          <ResetPass
            resetPassword={resetPassword}
            setResetPassword={setResetPassword}
          />
        ) : (
          <SignupForm
            isSignUpform={isSignUpform}
            setSignupForm={setSignupForm}
            errorMsg={errorMsg}
            email={email}
            name={name}
            password={password}
            handleClick={handleClick}
            resetPassword={resetPassword}
            setResetPassword={setResetPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
