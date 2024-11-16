import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(false); // Initially, the contact info is hidden

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .send(
        "service_4cu269q",
        "template_b7xkzrh",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "O9-oGRTcvc4-jmRE6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Your message has been delivered!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );

    // Show contact info after the message is sent
    setShowContactInfo(true);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 py-12 md:py-16 px-6 md:px-12 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 transform transition-all hover:scale-105 duration-300">
        Contact Me
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Reach out through the form below or contact me via the following:
      </p>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="space-y-6 bg-white p-8 rounded-lg shadow-xl">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            placeholder="Your Email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            placeholder="Your Message"
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <p className="mt-4 text-center text-gray-700 font-semibold">{statusMessage}</p>
      )}

      {/* Conditionally show contact information after button click */}
     
       
      
    </div>
  );
};

export default Contact;
