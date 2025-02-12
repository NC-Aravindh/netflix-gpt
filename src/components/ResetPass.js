import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
const ResetPass = ({ resetPassword, setResetPassword }) => {
  const [resetMailSent, setResetMail] = useState(false);
  const email = useRef(null);
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        setResetMail(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-20 absolute bg-opacity-65 bg-black w-[18em] lg:w-[28em] p-8 lg:p-16 md:p-8 md:w-[22em] flex flex-col items-center gap-4 lg:gap-6 md:gap-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
      >
        {resetMailSent ? (
          <h1>Password Reset mail sent successfully!!</h1>
        ) : (
          <h1>Reset Your Password</h1>
        )}
        <input
          ref={email}
          className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded border-solid"
          type="email"
          placeholder="Email"
          autoComplete="off"
        ></input>
        <button
          onClick={handleResetPassword}
          type="submit"
          className="bg-red-600 text-white h-8 md:h-10 md:p-2 w-full rounded-md hover:bg-red-700 duration-500"
        >
          Reset Password
        </button>
        <button
          onClick={() => setResetPassword(!resetPassword)}
          className="bg-red-600 text-white h-8 md:h-10 md:p-2 w-full rounded-md hover:bg-red-700 duration-500"
        >
          Go to Sign in
        </button>
      </form>
    </>
  );
};

export default ResetPass;
