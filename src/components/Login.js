import React, { useRef, useState } from 'react'
import { checkAndValidateForm } from '../utils/validateForm'

const Login = () => {

  const [isSignUpform, setSignupForm] = useState(false);
  const [errorMsg , setErrorMsg] = useState(null)

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  function handleClick() {

    console.log(name?.current?.value, email?.current?.value, password?.current?.value)

    const validateMessage = checkAndValidateForm(name?.current?.value, email?.current?.value, password?.current?.value)

    setErrorMsg(validateMessage);
  }
  return (

    <form
      onSubmit={(e) => e.preventDefault()}
      className='z-20 absolute bg-opacity-65 bg-black w-[28em] object-contain p-16 mx-auto top-[8em] left-[30em] flex flex-col items-center gap-6  text-white'>
      <h1 className='self-start  text-3xl font-bold' >{isSignUpform ? "Sign Up" : "Sign In"}</h1>
      {isSignUpform && <input
        className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded border-solid'
        ref={name}
        type='text'
        placeholder='Full Name'></input>}
      <input
        className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded border-solid'
        ref={email}
        type='text'
        placeholder='Email or mobile number'></input>
      <input
        className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded'
        ref={password}
        type='Password'
        placeholder='Password'
      ></input>
      <p>{errorMsg}</p>
      <button
        onClick={handleClick}
        className='bg-red-600 text-white p-2 w-full rounded-md hover:bg-red-700 duration-500'>
          {isSignUpform ? "Sign Up" : "Sign In"}</button>
      {isSignUpform ||
        <>
          <p>OR</p>
          <button className='bg-white bg-opacity-15 text-white p-2 w-full rounded-md hover:bg-opacity-10 duration-500'>Use a sign in code</button>
          <a className='hover:underline hover:text-gray-400' href='/'> Forgot Password?</a>
        </>

      }

      <p>
        {isSignUpform ? "Already registered?" : "New to Netflix?"}  <span onClick={() => setSignupForm(!isSignUpform)} className='hover:underline cursor-pointer'>{isSignUpform ? "Sign In" : "Sign Up"}</span></p>
    </form>
  )
}

export default Login