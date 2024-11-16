import React from "react";

const AcademicProjects = () => {
  const projects = [
    {
      title: "Online Food Delivery System",
      platform:
        "Frontend – HTML, CSS, JavaScript, React.js | Backend – Spring Boot, Hibernate",
      duration: "1.5 Month",
      description:
        "The Food Delivery App simplifies food ordering by providing an easy-to-use platform for customers to browse menus, order, and track deliveries in real-time. It supports secure payments and ensures efficient order processing, benefiting both customers and restaurants. MySQL is used for effective database management.",
      github: "https://github.com/Ajaydabhade7739/food-delivery-web-app",
    },
    {
      title: "Employee Management System",
      platform: "J2EE",
      duration: "1 Month",
      description:
        "Developed a comprehensive Employee Management App using Spring Boot for backend services and a responsive UI with HTML5, CSS, and JavaScript. The app allows HR teams to efficiently manage employee data, integrating MySQL for secure data storage with RESTful APIs handling CRUD operations.",
      github: "https://github.com/Ajaydabhade7739/EmployeeManagement-.git",
    },
    {
      title: "Amazon Clone",
      platform: "HTML, CSS",
      duration: "2 days",
      description:
        "Developed a responsive Amazon clone using HTML and CSS to enhance skills in front-end development and responsive design.",
      github: "https://github.com/Ajaydabhade7739/AmazonClone.git",
    },
    {
      title: "Countdown Timer App",
      platform: "React.js, Tailwind CSS",
      duration: "2 days",
      description:
        "Countdown Timer App built with React and Tailwind CSS. Features include customizable countdowns, responsive design, and interactive UI elements. Implemented using state management and Tailwind’s utility-first classes for a sleek, minimalist look.",
      github: "https://github.com/Ajaydabhade7739/Countdown-Timer-App.git",
      netlify: "https://counturtime.netlify.app/",
    },
    {
      title: "Real-Time Weather App",
      platform: "React.js, Tailwind CSS",
      duration: "5 days",
      description:
        "Real-Time Weather App built with React. This app fetches live weather data from an external API to display current weather conditions based on user location. Features include dynamic temperature, humidity, and forecast updates.",
      github: "https://github.com/Ajaydabhade7739/Real-Time-Weather-App.git",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg max-w-7xl mx-auto space-y-8">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center">
        Academic Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Platform:</strong> {project.platform}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Duration:</strong> {project.duration}
            </p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                GitHub Link
              </a>
              {project.netlify && (
                <a
                  href={project.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Netlify Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicProjects;
