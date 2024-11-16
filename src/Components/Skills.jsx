import React from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaCuttlefish,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiSpringboot, SiHibernate, SiTailwindcss, SiVite, SiCplusplus } from "react-icons/si";

const Skills = () => {
    const logoMap = {
        Java: <FaJava className="text-orange-600" />,
        "Spring Boot": <SiSpringboot className="text-green-500" />,
        Hibernate: <SiHibernate className="text-amber-600" />,
        "C#": <FaCuttlefish className="text-blue-500" />, // Fixed: Key wrapped in quotes
        MongoDB: <SiMongodb className="text-green-500" />,
        PostgreSQL: <SiPostgresql className="text-blue-600" />,
        HTML: <FaHtml5 className="text-orange-500" />,
        CSS: <FaCss3Alt className="text-blue-500" />,
        "JavaScript": <FaReact className="text-yellow-500" />, // Substitute with better JS logo if needed
        "React.js": <FaReact className="text-sky-500" />,
        MySQL: <FaDatabase className="text-blue-600" />,
        Python: <FaPython className="text-blue-400" />,
        TailwindCSS: <SiTailwindcss className="text-teal-400" />,
        Vite: <SiVite className="text-purple-500" />,
        "C++": <SiCplusplus className="text-blue-400" />,
        Git: <FaGitAlt className="text-orange-500" />,
      };
      

  const skillCategories = [
    {
      category: "Backend Development",
      skills: ["Java", "Spring Boot", "Hibernate", "C#", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      category: "Database Management",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Programming Languages",
      skills: ["C", "C++", "C#", "Java", "Python"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["Vite", "TailwindCSS", "Git"],
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-teal-100 via-purple-50 to-slate-100 rounded-xl shadow-lg max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-slate-700 text-center mb-12">
        Skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="relative p-6 bg-gradient-to-tl from-purple-50 via-teal-50 to-slate-50 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-600 mt-4 mb-4 text-center">
              {category.category}
            </h3>
            <ul className="list-none space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center space-x-3 text-slate-700 hover:text-purple-600 transition-colors duration-300 text-base"
                >
                  <span>{logoMap[skill]}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;