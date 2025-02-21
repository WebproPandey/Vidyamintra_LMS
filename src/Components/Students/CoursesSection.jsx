import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import CourseCart from './CourseCart'

const CoursesSection = () => {
  
  const {allCourses} =  useContext(AppContext)

  return (
    <div className='py-16 md:px-32  px-2 '>
       <h1 className='text-3xl font-medium text-gray-800'>Learn from the Best</h1>
       <p className='text-sm md:text-base text-gray-500  mt-3'> 
        Discover our top-rated  education with our diverse range of courses.
        Learn more about our courses and explore our certification program. <br />
        Explore our courses and join our community of learners.
       </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-4 md:px-0 md:my-16 my-10  gap-4 '>
          {allCourses.slice(0,4).map((course ,index) => <CourseCart key={index} course={course}/> )}
        </div>

       <Link to={'/course-list'} onClick={() => scrollTo(0,0) }  className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'> Show all Courses</Link>

    </div>
  )
}

export default CoursesSection