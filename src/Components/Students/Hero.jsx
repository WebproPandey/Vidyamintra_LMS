import React from 'react'
import { assets } from '../../assets/assets'
import Search from './Search'

const Hero = () => {

  return (
    <div className='flex flex-col items-center justify-start w-full md:pt-36 pt-20 px-7 md:px-0  space-y-4 text-center bg-gradient-to-b from-cyan-100/70 '>
        <h1 className='md:text-home-heading-larger  text-home-heading-small relative font-bold text-gray-800  max-w-5xl mx-auto leading-[5.7vw] md:leading-[3.5vw]'>Join our community of learners and take your skills to the next level.
          <span className='text-blue-600 relative '>Anytime, Anywhere!
          <img src={assets.sketch} className='md:block hidden absolute -bottom-7 right-0' alt="" />
          </span>
        </h1>
        <p className='md:block text-sm md:text-2xl  text-gray-500 max-w-sm md:max-w-2xl mx-auto'>Explore top courses, gain in-demand skills, and unlock new career opportunities—all at your own pace.</p>
        <Search/>
        
    </div>
  )
}

export default Hero