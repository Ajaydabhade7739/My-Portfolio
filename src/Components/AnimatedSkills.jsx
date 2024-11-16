import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-amber-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const AnimatedSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
      backgroundColor: "#f0f4f8",
      color: "#111",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 150,
      },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    shake: {
      animate: { x: [0, -10, 10, -10, 10, 0] },
      transition: { repeat: Infinity, repeatType: "loop", duration: 0.5 },
    },
  };

  return (
    <div className="p-8 bg-gradient-to-br from-teal-100 via-purple-50 to-slate-100 rounded-xl shadow-lg max-w-7xl mx-auto overflow-auto">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-500 to-slate-700 text-center mb-12">
        My Skills
      </h2>
      <motion.div
        className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            animate="shake" // Added shake animation on hover
          >
            <div className="text-4xl sm:text-5xl mb-2">{skill.icon}</div>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedSkills;
