import React from 'react'

import { NETFLIX_LOGO_URL, LOGIN_BG_URL } from '../utils/constants'

const Header = () => {

    //The second div has overlay effects
    return (
        <div className='bg-black  z-0 fixed w-full h-full inset-0 min-h-screen'>
            <img className='absolute w-[10em] left-[8em] text-xl z-30'
                src={NETFLIX_LOGO_URL} alt='netflix-logo'></img>
            <div className='relative group'>
                <img className='w-full h-auto' src={LOGIN_BG_URL} alt='login-bg-img'></img>
                <div class="absolute inset-0 bg-black opacity-50"></div>
            </div>
        </div>
    )
}

export default Header