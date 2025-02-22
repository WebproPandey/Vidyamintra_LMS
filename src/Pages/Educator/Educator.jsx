import React, { useState } from "react";
import Navbar from "../../Components/Educator/Navbar";
import Footer from "../../Components/Educator/Footer";
import Sidebar from "../../Components/Educator/Sidebar";
import AddCourse from "./AddCourse";
import MyCourses from "./MyCourses";
import DashBoard from "./DashBoard";
import StudentsEnroll from "./StudentsEnroll";
import { Outlet } from "react-router-dom";

const Educator = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="h-screen w-full flex justify-center  items-start  relative">
        <Sidebar isSidebarOpen={isSidebarOpen}  setIsSidebarOpen={setIsSidebarOpen}/>
        <div className="showpage w-full h-full p-5">
         <Outlet/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Educator;