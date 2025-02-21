import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'


const CourseCart = ({course}) => {

    const {currency} =  useContext(AppContext)
  return (
    <Link to={'/course/${coures._id}'} onClick={() => scrollTo(0,0)}
     className='border border-gray-500/30 rounded-lg pb-6 overflow-hidden  '>
        <img className='w-full' src={course.courseThumbnail} alt="" />
        <div className='text-left p-3'>
            <h3 className='font-semibold'>{course.courseTitle}</h3>
            <p className='text-gray-500  '>{course.educator.name}</p>
            <div className='flex items-center  space-x-2 '>
                <p className=''>4.5</p>
                <div className='flex '>
                    {[...Array(5)].map((_, i) => (
                        <img key={i} className='w-3.5 h-3.5' src={assets.star} alt="" />
                    ))}
                </div>
                <p className='text-gray-500 '>22</p>
            </div>
            <p className='text-base font-semibold  text-gray-800 '>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCart