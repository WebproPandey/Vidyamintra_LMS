import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Sidebar बंद करने के लिए
  };

  return (
    <div className={`h-full md:w-[20%] w-1/2 border-r py-3 flex flex-col gap-4 md:relative absolute top-0 z-50 bg-white 
        transition-all duration-700 ease-out transform ${isSidebarOpen ? "translate-x-[-50%]" : "-translate-x-[150%] md:translate-x-0"}`}>

      <div
        onClick={() => handleNavigation("/educator/dashboard")}
        className="flex items-center gap-5 hover:bg-gray-500/40 transition-all duration-500 ease-in-out py-2 pl-6 cursor-pointer"
      >
        <img src={assets.home_icon} alt="" />
        <h1>DashBoard</h1>
      </div>
      <div
        onClick={() => handleNavigation("/educator/add-course")}
        className="flex items-center gap-5 hover:bg-gray-500/40 transition-all duration-500 ease-in-out py-2 pl-6 cursor-pointer"
      >
        <img src={assets.add_icon} alt="" />
        <h1>Add Course</h1>
      </div>
      <div
        onClick={() => handleNavigation("/educator/my-courses")}
        className="flex items-center gap-5 hover:bg-gray-500/40 transition-all duration-500 ease-in-out py-2 pl-6 cursor-pointer"
      >
        <img src={assets.my_course_icon} alt="" />
        <h1>My Course</h1>
      </div>
      <div
        onClick={() => handleNavigation("/educator/stundent-enroll")}
        className="flex items-center gap-5 hover:bg-gray-500/40 transition-all duration-500 ease-in-out py-2 pl-6 cursor-pointer"
      >
        <img src={assets.person_tick_icon} alt="" />
        <h1>Student Enrolled</h1>
      </div>
    </div>
  );
};

export default Sidebar;
