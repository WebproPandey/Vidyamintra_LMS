import React, { useState } from 'react';

const MyCourses = () => {
  const coursesData = [
    {
      id: 1,
      title: "React.js Development",
      image: "https://img.youtube.com/vi/lpx2zFkapIk/maxresdefault.jpg",
      earnings: 1200,
      students: 35,
      isLive: true,
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      image: "https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg",
      earnings: 2500,
      students: 58,
      isLive: false,
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: "https://img.youtube.com/vi/jZFaMEqEqEQ/maxresdefault.jpg",
      earnings: 900,
      students: 20,
      isLive: true,
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      image: "https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg",
      earnings: 1800,
      students: 40,
      isLive: false,
    },
  ];

  const [courses, setCourses] = useState(coursesData);

  const toggleStatus = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, isLive: !course.isLive } : course
    ));
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-lg md:text-2xl font-bold mb-4">My Courses</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 min-w-[400px] sm:min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm md:text-base">
              <th className="p-2 md:p-3 border">Course</th>
              <th className="p-2 md:p-3 border">Earnings</th>
              <th className="p-2 md:p-3 border">Students</th>
              <th className="p-2 md:p-3 border">Course Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border text-sm md:text-base">
                <td className="p-2 md:p-3 flex items-center gap-2">
                  <img src={course.image} alt="Course" className="w-10 h-10 md:w-12 md:h-12 rounded object-cover" />
                  <span className="truncate max-w-[150px] sm:max-w-none">{course.title}</span>
                </td>
                <td className="p-2 md:p-3">${course.earnings}</td>
                <td className="p-2 md:p-3">{course.students}</td>
                <td className="p-2 md:p-3">
                  <button 
                    className={`w-16 px-3 py-1 rounded-full text-white transition-all text-xs md:text-sm ${course.isLive ? 'bg-green-500' : 'bg-gray-400'}`} 
                    onClick={() => toggleStatus(course.id)}
                  >
                    {course.isLive ? "Live" : "Private"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyCourses;
