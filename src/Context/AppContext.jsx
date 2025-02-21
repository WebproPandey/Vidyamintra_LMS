import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const  AppContext = createContext()

const AppProvider = ({ children }) => {

    const currency =  import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses]  = useState([])

    const  fetchALLCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchALLCourses()
    },[])

    const  value =  {
        currency,allCourses
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;