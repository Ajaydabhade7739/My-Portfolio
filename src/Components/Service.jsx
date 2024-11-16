import React from "react";

const Services = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-semibold mb-4 hover:text-blue-800 transition-colors duration-300">
            My Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
            I offer a variety of software development services designed to meet
            the specific needs of businesses. From backend development to frontend
            interfaces, I provide end-to-end solutions that are efficient and
            user-friendly.
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full-Stack Web Development Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
              Full-Stack Web Development
            </h3>
            <p className="text-lg text-gray-700">
              I create dynamic web applications using both frontend and backend
              technologies, including Java, Spring Boot, React.js, and more.
            </p>
          </div>

          {/* Backend Development & API Integration Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
              Backend Development & API Integration
            </h3>
            <p className="text-lg text-gray-700">
              Expertise in building robust backend systems and integrating APIs
              to provide seamless functionality across platforms.
            </p>
          </div>

          {/* Frontend Development Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-700">
              Skilled in crafting responsive, user-friendly frontends using
              HTML, CSS, JavaScript, and React.js to enhance user experience.
            </p>
          </div>

          {/* Database Design & Management Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
              Database Design & Management
            </h3>
            <p className="text-lg text-gray-700">
              Proficient in MySQL for designing efficient databases, optimizing
              queries, and ensuring data integrity.
            </p>
          </div>

          {/* Application Optimization & Maintenance Service */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
              Application Optimization & Maintenance
            </h3>
            <p className="text-lg text-gray-700">
              I offer services to optimize and maintain applications, ensuring
              they run smoothly and stay secure over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
