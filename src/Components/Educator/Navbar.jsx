import React, { useContext } from 'react';
import favicon from '../../../public/favicon.svg';
import { assets } from '../../assets/assets';
import { useClerk , UserButton , useUser } from '@clerk/clerk-react' 
import { AppContext } from '../../Context/AppContext';

const Navbar = ({ setIsSidebarOpen  }) => {
  const {user} =  useClerk()
    const {navigate , isEducator} = useContext(AppContext) 
  
  return (
    <div className='w-full flex items-center justify-between px-5 md:px-20 py-4 border-b'>
        <div onClick={() => navigate('/')} className='flex items-center gap-2'>
           <img src={favicon} className='w-8 lg:w-11 cursor-pointer' alt="Logo" />
            <h1 className='text-sm md:text-2xl font-semibold'>Vidyamitra</h1>
        </div>
        <div className='flex items-center gap-4'> 
        { user && <>
              <button  onClick={() => navigate('/educator')} className='md:text-base text-sm' >{isEducator ? "Educator Dashboard": "Become Educator"  }</button> |
            </> }   
          { user ? <UserButton/> :
              <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
          }
          <button className="block md:hidden text-xl" 
            onClick={() => setIsSidebarOpen(prev => !prev)}>
            ☰
          </button>
        </div>
    </div>
  );
};

export default Navbar;
