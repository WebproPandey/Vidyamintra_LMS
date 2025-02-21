import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import favicon  from '../../../public/favicon.svg'
import {assets}  from '../../assets/assets'

import { useClerk , UserButton , useUser } from '@clerk/clerk-react' 
import { AppContext } from '../../Context/AppContext'

const Navbar = () => {
  const isCourseListPage =  location.pathname.includes('/course-list')
  const {openSignIn} = useClerk()
  const {user} = useUser() 

  const {navigate , isEducator} = useContext(AppContext) 

  return (
    <div className={`flex justify-between  items-center  px-2 sm:px-5 md:px-14 lg:px-30 border-b border-gray-500 py-4 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"} `}>
      <div  onClick={() => navigate('/')} className='flex items-center justify-center gap-2 cursor-pointer'>
       <img  src={favicon} className='w-8 lg:w-11 cursor-pointer' alt="" />
       <h1 className='text-sm md:text-2xl  font-semibold '>Vidyamitra</h1>
      </div>
       <div className='md:flex hidden items-center  gap-5 text-gray-500'>
          <div className='flex items-center gap-5 '>
            { user && <>
              <button  onClick={() => navigate('/educator')} className='md:text-base text-sm' >{isEducator ? "Educator Dashboard": "Become Educator"  }</button> |
              <Link to="/my-enroll"  className='md:text-base text-sm'  >My Enrollments</Link>
            </> 


            }
            

          </div>

          { user ? <UserButton/> :
                  <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
          }
       </div>
       {/* phone Screen */}
       <div className='md:hidden flex  items-center justify-between  gap-2  text-gray-500 '>
           <div className='flex items-center  gap-2'>
            {
              user && <>
              <button onClick={() => navigate('/educator')}   className='md:text-base text-sm' > {isEducator ? "Educator Dashboard": "Become Educator"  }</button> |
              <Link to="/my-enroll"  className='md:text-base text-sm'  >My Enrollments</Link>
              </>
            }
           
           </div>
          { user ? <UserButton/> :
          <button onClick={() => openSignIn()} className=' text-white px-3 py-2 rounded-full'>
            <img src={assets.user_icon} alt="" />
           </button>}

       </div>
    </div>
  )
}

export default Navbar