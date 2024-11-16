import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Service";
import EducationalDetails from "./Components/EducationalDetails";
import Skills from "./Components/Skills";
import AcademicProjects from "./Components/AcademicProjects";
import ProjectOption4 from "./Components/ProjectOption4";
import Contact from "./Components/Contact";
import "./App.css";
import AnimatedSkills from "./Components/AnimatedSkills";

const App = () => {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="educational-details"
              element={<EducationalDetails />}
            />
            <Route path="skills" element={<Skills />} />
            <Route path="skills-animated" element={<AnimatedSkills />} />
            <Route path="academic-projects" element={<AcademicProjects />} />
            <Route path="projects/option4" element={<ProjectOption4 />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Add this route for the Contact page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
