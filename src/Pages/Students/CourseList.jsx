import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import Search from '../../Components/Students/Search'
import { useParams } from 'react-router-dom'
import CourseCart from '../../Components/Students/CourseCart'
import { assets } from '../../assets/assets'
import Footer from '../../Components/Students/Footer'

const CourseList = () => {
  const  {navigate , allCourses} =  useContext(AppContext)
  const {input}  = useParams()
  const [filteredCourse , setFilteredCourse] =  useState([])
  useEffect(() => {
   if(allCourses && allCourses.length > 0) {
    const temCourses =  allCourses.slice()
    input ? 
     setFilteredCourse(
       temCourses.filter((course) => course.courseTitle.toLowerCase().includes(input.toLowerCase()))
     )
    : setFilteredCourse(temCourses)
   }
  },[allCourses , input])
    return (
      <>
    <div className='relative md:px-36 px-8 pt-12 text-left'>
       <div className='flex md:flex-row  flex-col gap-6 items-start    w-full   justify-between'>
          <div>
             <h1 className='text-4xl font-semibold  text-gray-800'>Course List</h1>
              <p className='text-gray-500'><span onClick={() => navigate("/")} className=' text-blue-600  cursor-pointer'>Home</span> <span>/</span>
                <span>Course List</span> </p>
          </div>
          <div className='w-1/2'>
            <Search data={input}/>
          </div>
       </div>
       {input &&  <div className='inline-flex items-center  gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
        <p>{input}</p>
        <img src={assets.cross_icon} className='cursor-pointer' onClick={() => navigate("/course-list")} alt="" />
       </div> }

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
         {filteredCourse.map(( course ,index) => <CourseCart key={index} course={course}/> )}
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default CourseList