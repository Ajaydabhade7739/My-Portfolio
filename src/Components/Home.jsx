import React, { useState } from 'react';
import myImage from '../assets/myImage.jpg';
import Ajay from '../assets/Ajay.pdf';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const [showWorks, setShowWorks] = useState(false);

  const handleButtonClick = () => {
    setShowWorks(!showWorks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-400 flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-300 hover:text-purple-200 transition-all duration-300">
          Hello, It's Me
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-teal-600 animate__animated animate__fadeIn animate__delay-1s">
          Ajay Dabhade
        </h3>
        <p className="mt-4 text-lg sm:text-xl hover:text-purple-300 transition-all duration-300">
          And I'm a{' '}
          <span className="text-yellow-200 font-semibold">Full-Stack Developer</span>
        </p>
        <p className="text-sm sm:text-base mt-2 max-w-lg mx-auto">
          I specialize in creating modern, scalable web applications using React.js, Spring Boot, MySQL, and Tailwind CSS.
        </p>
      </div>

      {/* Profile Picture */}
      <div className="mt-8">
        <img
          src={myImage}
          alt="Ajay Dabhade"
          className="w-40 h-40 rounded-full border-4 border-blue-800 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300"
        />
      </div>

      {/* Dynamic Quote Section */}
      <div className="mt-6 text-lg sm:text-xl font-semibold text-teal-200 animate__animated animate__fadeIn animate__delay-2s">
        <ReactTyped
          strings={[
            'Innovation is the key to success.',
            'Code is poetry.',
            'Building the future, one line at a time.',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Button Section */}
      <div className="mt-8">
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-purple-400 transform hover:scale-105 transition-all duration-300"
        >
          {showWorks ? 'Hide My Work' : 'Explore My Work'}
        </button>
      </div>

      {/* Work Section */}
      {showWorks && (
        <div className="mt-6 bg-white text-gray-800 rounded-lg p-6 shadow-lg w-full max-w-3xl animate__animated animate__fadeIn animate__delay-3s">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-500 mb-4">My Works</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
            <li>Online Food Delivery System (React.js, Spring Boot, MySQL)</li>
            <li>Employee Management System (React.js, Spring Boot, Hibernate)</li>
            <li>Instagram Clone (React.js, Spring Boot, Tailwind CSS)</li>
            <li>Weather App (React.js, Tailwind CSS)</li>
            <li>Task Management App (Spring Boot, MySQL)</li>
            <li>Portfolio Website (React.js, Tailwind CSS)</li>
            <li>Countdown Timer App (React.js, Tailwind CSS)</li>
          </ul>
        </div>
      )}

      {/* Download Resume Button */}
      <div className="mt-8 flex justify-center">
  <a
    href={Ajay}
    download="AjayDabhade_Resume.pdf"
    className="bg-purple-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-semibold shadow-lg hover:bg-orange-500 transform hover:scale-105 transition-all duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md text-center"
  >
    Download My Resume
  </a>
</div>


      {/* Social Media Icons */}
      <div className="mt-8 mb-5 flex space-x-6 justify-center">
        <a
          href="https://www.linkedin.com/in/ajay-dabhade-277a3a1b0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-4xl hover:text-blue-700 transition-all transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ajaydabhade7739"
          target="_blank"
          rel="noopener noreferrer"
         className="text-blue-500 text-4xl hover:text-blue-700 transition-all transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/AJAYDABHADE7739"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-4xl hover:text-blue-700 transition-all transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Home;
