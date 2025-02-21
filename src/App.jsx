import React from 'react'
import {Route, Routes, useMatch}  from 'react-router-dom'
import  Home  from './Pages/Students/Home'
import CoursesList from './Pages/Students/CourseList'
import CourseDetails from './Pages/Students/CourseDestails'
import MyEnroll from './Pages/Students/MyEnroll'
import Player from './Pages/Students/Player'
import Loading from './Components/Students/Loading'
import Eductore from './Pages/educator/Educator'
import DashBoard from './Pages/educator/DashBoard'
import AddCourse from './Pages/educator/AddCourse'
import MyCourses from './Pages/educator/MyCourses'
import StundentEnroll from './Pages/educator/StudentsEnroll'
import Navbar from './Components/Students/Navbar'

const App = () => {
  const isEducatoreRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen  bg-white'>
    {!isEducatoreRoute &&   <Navbar/> }
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course-list' element={ <CoursesList/>} />
      <Route path='/course-list/:input' element={ <CoursesList/>} />
      <Route path='/course/:id' element={ <CourseDetails/>} />
      <Route path='/my-enroll' element={ <MyEnroll/>} />
      <Route path='/player/:courseId' element={ <Player/>} />
      <Route path='/loading/:path' element={ <Loading/>} />
      
      <Route path='/educator' element={<Eductore/>} >
            <Route path='dashboard' element={<DashBoard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-courses' element={<MyCourses/>}/>
            <Route path='stundent-enroll' element={<StundentEnroll/>}/>
      </Route>
     </Routes>
      
    </div>
  )
}

export default App