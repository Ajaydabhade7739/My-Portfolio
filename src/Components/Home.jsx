import React, { useState } from 'react';
import myImage from '../assets/myImage.jpg'; 
import Ajay from '../assets/Ajay.pdf'


const Home = () => {
  const [showWorks, setShowWorks] = useState(false);

  const handleButtonClick = () => {
    setShowWorks(!showWorks);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-blue-100 p-10 rounded-lg shadow-lg w-full max-w-4xl mx-auto transition-all duration-300">
      {/* Profile Image */}
      <img 
        src={myImage} 
        alt="My Profile" 
        className="w-32 h-32 border-teal-500  border-2 rounded-full shadow-xl mb-6 transition-transform duration-300   transform hover:scale-110" 
      />

      {/* Greeting Message */}
      <div className="text-center text-gray-700 mb-8">
        <h1 className="text-3xl font-semibold text-blue-600 mb-2 tracking-wide hover:text-blue-800 transition-colors duration-300">Hello, welcome to my portfolio!</h1>
        <p className="text-lg text-gray-600">I'm Ajay, a passionate full-stack developer.</p>
      </div>

      {/* Interactive Button */}
      <button
        className="mt-4 px-6 py-3  bg-blue-600 text-white font-semibold rounded-full shadow-xl hover:bg-blue-700 transition-all transform hover:scale-110"
        onClick={handleButtonClick}
      >
        {showWorks ? 'Hide My Work' : 'Explore My Work'}
      </button>

     
      {showWorks && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-h-96 overflow-y-auto transform transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">My Works</h3>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>Project 1: Online Food Delivery System (React, Spring Boot, Hibernate, MySQL)</li>
            <li>Project 2: Employee Management System (React, Spring Boot, Hibernate, MySQL)</li>
            <li>Project 3: Instagram Clone (React, Spring Boot, Hibernate, MySQL)</li>
            <li>Project 4: Weather App (React, Tailwind CSS)</li>
            <li>Project 5: Task Management App (Spring Boot, MySQL)</li>
            <li>Project 6: Portfolio Website (React, Tailwind CSS)</li>
            <li>Project 7: Countdown, Alarm, StopWatch Website (React, Tailwind CSS)</li>
          </ul>
        </div>
      )}

      {/* Resume Download Section */}
      <div className="mt-6 text-center">
        <a
          href={Ajay}  // Link to the resume file in the public folder
          download="AjayDabhade_Resume.pdf"  // File name that will appear when downloading
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-xl hover:bg-green-700 transition-all transform hover:scale-110"
        >
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
