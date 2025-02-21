import React from 'react'
import favicon  from '../../../public/favicon.svg'


const Footer = () => {
  return (
    <div className='bg-gray-900 md:px-14 text-left w-full  mt-10'>
       <div className='flex flex-col md:flex-row items-start  px-6 md:px-0 justify-center gap-10 md:gap-28 border-b py-10 border-white-30'>
        <div className='flex flex-col md:items-start  items-center  w-full '>
          <div className='flex gap-2'>
            <img src={favicon}  className='' alt="" />
            <h1 className='text-sm md:text-2xl font-semibold text-white'>Vidyamitra</h1>
          </div>
          <p className='mt-6 text-center md:text-left text-white/80  text-sm '>Vidyamintra is a smart Learning Management System that makes education easy and accessible. With expert-led courses and flexible learning, we help you upskill anytime, anywhere.</p>

        </div>
        <div className='flex flex-col  md:items-start items-center w-full '>
          <h2 className='font-semibold  text-white  mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between  text-sm text-white/80 md:space-y-2'>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center  w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to Our newSletter</h2>
          <p className='text-sm text-white/80'>The latest news , article , and ,resources , sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500  outline-none w-64 h-9 rounded px-2 text-sm' type="email" placeholder='Enter the Email' />
            <button className='bg-blue-600  w-24 h-9 text-white rounded'>Subscribe</button>
          </div>
        </div>
         
       </div>
       <p className='py-6  text-center  md:text-sm text-white/60  text-sm'>copyright © 2021 All rights reserved.</p>
    </div>
  )
}

export default Footer