import React from "react";

const SignupForm = ({
  isSignUpform,
  setSignupForm,
  errorMsg,
  email,
  name,
  password,
  handleClick,
  resetPassword,
  setResetPassword,
}) => {
  return (
    <>
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
            autoComplete="off"
          ></input>
        )}
        <input
          className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded border-solid"
          ref={email}
          type="email"
          placeholder="Email"
          autoComplete="off"
        ></input>
        <input
          className="bg-opacity-20 bg-black text-white lg:h-10 lg:p-6 md:h-8 md:p-4 h-6 p-1 border-white w-full rounded"
          ref={password}
          type="password"
          placeholder="Password"
          role="password"
          autoComplete="off"
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
            <button
              onClick={() => setResetPassword(!resetPassword)}
              className="hover:underline hover:text-gray-400"
              href="/"
            >
              {" "}
              Forgot Password?
            </button>
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
    </>
  );
};

export default SignupForm;
