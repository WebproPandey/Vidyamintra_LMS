import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import {Line} from 'rc-progress'
import Footer from '../../Components/Students/Footer'
  
const MyEnroll = () => {
  const navigate =  useNavigate()
  const {EnrolledCourse , calculateCourseDuration} = useContext(AppContext)

  const [progressArray , setProgressArray] =  useState([
    {leactureCompleted :2 , totalLectures: 4},
    {leactureCompleted :3 , totalLectures: 5},
    {leactureCompleted :1 , totalLectures: 6},
    {leactureCompleted :4 , totalLectures: 4},
    {leactureCompleted :2 , totalLectures: 10},
    {leactureCompleted :4 , totalLectures: 4},
    {leactureCompleted :1 , totalLectures: 4},
    {leactureCompleted :4 , totalLectures: 8},
    {leactureCompleted :2 , totalLectures: 9},
    {leactureCompleted :3 , totalLectures: 10},
    {leactureCompleted :1 , totalLectures: 4},

  ])
  return (
    <>
    <div className="md:px-36 px-8 pt-10">
       <h1 className='text-2xl  font-semibold'>My Enrollments</h1>
       <table className='md:table-auto table-fixed  w-full  overflow-hidden  border mt-10'>
        <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
          <tr>
            <th className='px-4 py-3 font-semibold  truncate'>Course</th>
            <th className='px-4 py-3 font-semibold  truncate'>Duration</th>
            <th className='px-4 py-3 font-semibold  truncate'>Completed</th>
            <th className='px-4 py-3 font-semibold  truncate'>Status</th>
          </tr>
        </thead>
        <tbody className='text-gray-700 '>
          {EnrolledCourse.map((course , index) => (
            <tr key={index} className='border-b border-gray-500/20 '>
              <td className='md:px-4 pl-2 md:pl-4 flex items-center  space-x-3 '>
                 <img src={course.courseThumbnail} className='w-14 sm:w-24  md:w-24' alt="" />
                 <div className='flex-1'>
                  <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                  <Line strokeWidth={2} percent={progressArray[index] ? (progressArray[index].leactureCompleted *100) /  progressArray[index].totalLectures : 0} className='bg-gray-300 rounded-full' />
                 </div>
              </td>
              <td className='px-4 py-3 max-sm:hidden'>
                {calculateCourseDuration(course)}
              </td>
              <td className='px-4 py-3 max-sm:hidden'>
                {progressArray[index] && `${progressArray[index].
                  leactureCompleted} /  ${progressArray[index].
                  totalLectures} `}<span>Lectures</span>
              </td>
              <td className='px-4 py-3 max-sm:text-right'>
                <button onClick={() =>  navigate('/player/' + course._id)} className='px-3 sm:px-5 py-1/5 sm:py-2 bg-blue-600 max-sm:text-xs text-white'>
                 {progressArray[index] && progressArray[index].leactureCompleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'on Going'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
    <Footer/>
    </>

  )
}

export default MyEnroll