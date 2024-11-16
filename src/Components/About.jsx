import React from 'react';
import myImage from '../assets/myImage.jpg'; // Adjust the path as per your file structure

const About = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-teal-100 to-green-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-6 max-w-4xl mx-auto">
      {/* Image on the left */}
      <img 
        src={myImage} 
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-teal-500 transform hover:scale-110 transition-transform duration-300" // Updated border color
      />
      
      {/* Text content */}
      <div className="space-y-4">
        <h2 className="text-3xl text-teal-600 font-semibold mb-4 hover:text-teal-800 transition-colors duration-300">
          About Me
        </h2>
        <p className="text-lg text-gray-800 mb-4 hover:text-gray-900 transition-colors duration-300">
          Hello! I’m Ajay Sanjay Dabhade, a software engineer based in Aurangabad, Maharashtra. I specialize in both frontend and backend development, delivering full-stack solutions tailored to meet client needs.
        </p>
        <p className="text-lg text-gray-800 hover:text-gray-900 transition-colors duration-300">
          <strong className="text-teal-600">My Skills & Experience:</strong>
          <br />
          <span className="block mt-2">
            <strong className="font-semibold">Backend Development:</strong> I specialize in Java and Spring Boot for backend services, and I have a deep understanding of Hibernate and MySQL to create efficient and secure databases.
          </span>
          <span className="block mt-2">
            <strong className="font-semibold">Frontend Development:</strong> Proficient in HTML, CSS, and JavaScript, I create responsive, user-friendly interfaces that deliver a seamless user experience.
          </span>
          <span className="block mt-2">
            <strong className="font-semibold">Full-Stack Projects:</strong> I enjoy creating end-to-end solutions, handling everything from data modeling and API development to crafting intuitive frontend layouts.
          </span>
          <span className="block mt-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <strong className="font-semibold text-xl text-teal-600 mb-3 block">Technical Skills</strong>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li className="hover:text-teal-600 transition-colors duration-300">Backend: Java, Spring Boot, Hibernate</li>
              <li className="hover:text-teal-600 transition-colors duration-300">Frontend: HTML, CSS, JavaScript, React.js</li>
              <li className="hover:text-teal-600 transition-colors duration-300">Database Management: MySQL</li>
              <li className="hover:text-teal-600 transition-colors duration-300">Frameworks & Tools: Spring Boot, Hibernate, Vite, Tailwind CSS</li>
            </ul>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
