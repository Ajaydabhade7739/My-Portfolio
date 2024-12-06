import React from 'react';
import { Tooltip } from 'antd';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const EducationalDetails = () => {
  const educationData = [
    {
      level: "PG-DAC",
      stream: "Advanced Computing",
      institute: "C-DAC Hyderabad",
      board: "C-DAC Hyderabad",
      year: "2024",
      percentage: "60%",
      division: "I",
      icon: <FaGraduationCap className="text-indigo-600" />,
    },
    {
      level: "BE",
      stream: "Mechanical",
      institute: "Shreeyash College Of Engineering",
      board: "Dr. Babasaheb Ambedkar Marathwada University",
      year: "2020",
      percentage: "69.3%",
      division: "I",
      icon: <FaGraduationCap className="text-red-600" />,
    },
    {
      level: "DME",
      stream: "Mechanical",
      institute: "Shreeyash Polytechnic",
      board: "MSBTE",
      year: "2017",
      percentage: "63.65%",
      division: "I",
      icon: <FaUniversity className="text-pink-600" />,
    },
    {
      level: "X",
      stream: "General",
      institute: "Marathwada Institute of Technical Highschool",
      board: "Maharashtra State Board",
      year: "2014",
      percentage: "68.6%",
      division: "I",
      icon: <FaSchool className="text-yellow-600" />,
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-100 via-indigo-400 to-pink-300 rounded-lg shadow-lg max-w-6xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-6">
        Educational Details
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-800 border-collapse shadow-sm">
          <thead>
            <tr className="bg-indigo-900 text-white">
              <th className="py-3 px-5 border-b">
                <Tooltip title="Level of Education">
                  Level
                </Tooltip>
              </th>
              <th className="py-3 px-5 border-b">Stream</th>
              <th className="py-3 px-5 border-b">Institute</th>
              <th className="py-3 px-5 border-b">Board/University</th>
              <th className="py-3 px-5 border-b">Passing Year</th>
              <th className="py-3 px-5 border-b">Degree %</th>
              <th className="py-3 px-5 border-b">Division</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-indigo-50 ${
                  index % 2 === 0 ? "bg-purple-50" : "bg-white"
                } transition-all duration-300`}
              >
                <td className="py-3 px-5 border-b flex items-center space-x-2 highlight-level">
  {item.icon} <span>{item.level}</span>
</td>
                <td className="py-3 px-5 border-b">{item.stream}</td>
                <td className="py-3 px-5 border-b">{item.institute}</td>
                <td className="py-3 px-5 border-b">{item.board}</td>
                <td className="py-3 px-5 border-b">{item.year}</td>
                <td className="py-3 px-5 border-b">{item.percentage}</td>
                <td
                  className={`py-3 px-5 border-b font-bold ${
                    item.division === "I" ? "text-green-600" : "text-orange-500"
                  }`}
                >
                  {item.division}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EducationalDetails;
