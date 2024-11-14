import React, { useState } from 'react'

const Login = () => {

  const [isSignUpform, setSignupForm] = useState(false)
  return (
    <div className='z-20 absolute bg-opacity-65 bg-black w-[28em] object-contain p-16 mx-auto top-[8em] left-[30em] flex flex-col items-center gap-6  text-white'>
      <h1 className='self-start  text-3xl font-bold' >{isSignUpform ? "Sign Up" : "Sign In"}</h1>
      {isSignUpform && <input className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded border-solid'
        placeholder='Full Name'></input>}
      <input className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded border-solid'
        placeholder='Email or mobile number'></input>
      <input className='bg-opacity-20 bg-black text-white h-10 p-6 border-white w-full rounded'
        placeholder='Password'
      ></input>
      <button className='bg-red-600 text-white p-2 w-full rounded-md hover:bg-red-700 duration-500'>{isSignUpform ? "Sign Up" : "Sign In"}</button>
      {isSignUpform ||
        <>
          <p>OR</p>
          <button className='bg-white bg-opacity-15 text-white p-2 w-full rounded-md hover:bg-opacity-10 duration-500'>Use a sign in code</button>
          <a className='hover:underline hover:text-gray-400' href='/'> Forgot Password?</a>
        </>

      }

      <p>
        {isSignUpform ? "Already registered?" : "New to Netflix?"}  <span onClick={() => setSignupForm(!isSignUpform)} className='hover:underline cursor-pointer'>{isSignUpform ? "Sign In" : "Sign Up"}</span></p>
    </div>
  )
}

export default Login