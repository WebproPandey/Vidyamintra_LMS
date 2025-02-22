import React from "react";

const Dashboard = () => {
  const enrollments = [
    { id: 1, photo: "https://randomuser.me/api/portraits/men/1.jpg", name: "Richard Sanford", course: "Build Text to Image SaaS App in React JS", date: "22 Aug, 2024" },
    { id: 2, photo: "https://randomuser.me/api/portraits/women/2.jpg", name: "Enrique Murphy", course: "Build AI BG Removal SaaS App in React JS", date: "22 Aug, 2024" },
    { id: 3, photo: "https://randomuser.me/api/portraits/men/3.jpg", name: "Alison Powell", course: "React Router Complete Course in One Video", date: "25 Sep, 2024" },
    { id: 4, photo: "https://randomuser.me/api/portraits/women/4.jpg", name: "Richard Sanford", course: "Build Full Stack E-Commerce App in React JS", date: "15 Oct, 2024" },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen w-full">
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 md:p-6 shadow rounded-lg flex items-center gap-4">
          <span className="bg-blue-100 text-blue-600 p-3 md:p-4 rounded-full text-xl md:text-2xl">👤</span>
          <div>
            <p className="text-xl md:text-2xl font-semibold">14</p>
            <p className="text-sm md:text-lg text-gray-500">Total Enrollments</p>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 shadow rounded-lg flex items-center gap-4">
          <span className="bg-purple-100 text-purple-600 p-3 md:p-4 rounded-full text-xl md:text-2xl">📚</span>
          <div>
            <p className="text-xl md:text-2xl font-semibold">8</p>
            <p className="text-sm md:text-lg text-gray-500">Total Courses</p>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 shadow rounded-lg flex items-center gap-4">
          <span className="bg-green-100 text-green-600 p-3 md:p-4 rounded-full text-xl md:text-2xl">💰</span>
          <div>
            <p className="text-xl md:text-2xl font-semibold">$245</p>
            <p className="text-sm md:text-lg text-gray-500">Total Earnings</p>
          </div>
        </div>
      </div>

      {/* Latest Enrollments */}
      <div className="bg-white p-4 md:p-6 shadow rounded-lg">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Latest Enrollments</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[400px] sm:min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-left text-sm md:text-base">
                <th className="p-2 md:p-3 border">#</th>
                <th className="p-2 md:p-3 border">Student</th>
                <th className="p-2 md:p-3 border">Course Title</th>
                <th className="p-2 md:p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="border text-sm md:text-base">
                  <td className="p-2 md:p-3 border">{enrollment.id}</td>
                  <td className="p-2 md:p-3 border flex items-center gap-2">
                    <img src={enrollment.photo} alt={enrollment.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
                    <span className="truncate max-w-[120px] md:max-w-none">{enrollment.name}</span>
                  </td>
                  <td className="p-2 md:p-3 border truncate max-w-[150px] sm:max-w-none">{enrollment.course}</td>
                  <td className="p-2 md:p-3 border">{enrollment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
