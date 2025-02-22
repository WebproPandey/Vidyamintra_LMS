import React from 'react'

const StudentsEnroll = () => {

  const students = [
    {
      id: 1,
      name: "Amit Sharma",
      course: "React.js Development",
      date: "2025-02-15",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Priya Verma",
      course: "Full-Stack Web Development",
      date: "2025-02-18",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Rohit Singh",
      course: "UI/UX Design",
      date: "2025-02-20",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      course: "Node.js Backend Development",
      date: "2025-02-22",
      photo: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Enrolled Students</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Photo</th>
              <th className="border border-gray-300 p-2">Student Name</th>
              <th className="border border-gray-300 p-2">Course Name</th>
              <th className="border border-gray-300 p-2">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100 transition-all">
                <td className="border border-gray-300 p-2 text-center">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="border border-gray-300 p-2">{student.name}</td>
                <td className="border border-gray-300 p-2">{student.course}</td>
                <td className="border border-gray-300 p-2">{student.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsEnroll