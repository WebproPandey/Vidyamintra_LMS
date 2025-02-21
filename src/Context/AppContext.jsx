import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizerDuration  from 'humanize-duration'

export const  AppContext = createContext()

const AppProvider = ({ children }) => {

    const currency =  import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses]  = useState([])
    const [isEducator, setEducator]  = useState(true)
    const [EnrolledCourse, setEnrolledCourse]  = useState([])
    
    const navigate = useNavigate()

    const  fetchALLCourses = async () => {
        setAllCourses(dummyCourses)
    }

    const fetchUserEnrolledCourse =  async () =>{
        setEnrolledCourse(dummyCourses)
    }

    useEffect(() => {
        fetchALLCourses()
        fetchUserEnrolledCourse()
    },[])

    const calculateRating =  (course) =>{
        if(course.courseRatings.length === 0 ){
            return 0
        }
        let totalRating  = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        });
        return totalRating / course.courseRatings.length
    }
    // function  to calculate course Chapter time
    const calculateChapterTime =  (chapter) =>{
        let time  =  0
         chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)
         return humanizerDuration(time * 60 * 1000 ,{units: ["h" ,"m"]})

    }
    // function  to calculate course  Duration
    const calculateCourseDuration =  (course) =>{
        let time  =  0
         course.courseContent.map((chapter) => chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration
         ))
         return humanizerDuration(time * 60 * 1000 ,{units: ["h" ,"m"]})
    }
    // function  to calculate  no of lectures in the  course
    const calculateNoOfLectures =  (course) =>{
        let totalLectures  =  0
         course.courseContent.forEach((chapter) =>{
          if(Array.isArray(chapter.chapterContent)){
            totalLectures += chapter.chapterContent.length
          }
         }
         )
         return totalLectures
    }




    const  value =  {
        currency,allCourses ,navigate ,calculateRating ,isEducator,
         setEducator ,calculateCourseDuration ,calculateNoOfLectures ,calculateChapterTime , 
         EnrolledCourse,fetchUserEnrolledCourse
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;