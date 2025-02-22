import React from 'react'
import favicon  from '../../../public/favicon.svg'
import { assets } from '../../assets/assets'

const  Footer = () => {
  return (
     <div className='w-full flex  items-center justify-between px-5 md:px-28 py-4 border-t '>
      <div className='flex items-center  gap-2'>
            <div className='flex  items-center gap-2'>
               <img  src={favicon} className='w-8 lg:w-11 cursor-pointer' alt="" />
                <h1 className='text-sm md:text-xl  font-semibold '>Vidyamitra</h1> 
            </div> 
             
            <div className='flex justify-center items-center gap-3'>
              <h1 className='md:text-xl text-[2vw] '>|</h1>
              <p className='py-6  text-center  md:text-base text-gray-500  text-[2vw]'>copyright © 2021 All rights reserved </p>
            </div>
       </div>
            <div className='flex items-center gap-2'>
              <div className='cursor-pointer'>
                <img src={assets.facebook_icon} className='md:h-8 md:w-8 h-6 w-6' alt="" />
              </div>
              <div className='cursor-pointer'>
                <img src={assets.twitter_icon} className='md:h-8 md:w-8 h-6 w-6' alt="" />
              </div>
              <div className='cursor-pointer'>
                <img src={assets.instagram_icon} className='md:h-8 md:w-8 h-6 w-6' alt="" />
              </div>
            </div>
    
        </div>
  )
}

export default  Footer