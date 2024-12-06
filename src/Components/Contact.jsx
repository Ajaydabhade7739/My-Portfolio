import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaUser, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
  const [showContactInfo, setShowContactInfo] = useState(false);

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
      setStatusMessage({ text: "Please enter a valid email address.", type: "error" });
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
      .then(() => {
        setStatusMessage({ text: "Your message has been delivered!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatusMessage({ text: "Failed to send the message. Please try again.", type: "error" });
      });

    setShowContactInfo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-400 py-16 px-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-300 hover:text-purple-200 transition-all duration-300 mb-8">
        Contact Me
      </h1>
      <p className="text-lg text-center text-gray-200 mb-8">
        Reach out through the form below or contact me via the following:
      </p>

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="bg-white p-10 rounded-lg shadow-2xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-800 font-semibold mb-2">
              Name
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full focus:outline-none"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-800 font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-indigo-500">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full focus:outline-none"
                placeholder="Your Email"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-800 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Message"
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg relative overflow-hidden hover:bg-purple-400 hover:scale-105 focus:ring-4 focus:ring-indigo-300 transition-transform duration-300"
          onClick={(e) => {
            const button = e.currentTarget;
            const ripple = document.createElement("span");
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.className =
              "absolute bg-white opacity-50 rounded-full transform scale-0 animate-ping";

            button.appendChild(ripple);

            setTimeout(() => {
              ripple.remove();
            }, 500);
          }}
        >
          Send Message
        </button>
      </form>

      {statusMessage.text && (
        <p
          className={`mt-4 text-center font-semibold flex items-center justify-center ${
            statusMessage.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {statusMessage.type === "success" ? (
            <FaCheckCircle className="mr-2" />
          ) : (
            <FaTimesCircle className="mr-2" />
          )}
          {statusMessage.text}
        </p>
      )}

      {showContactInfo && (
        <div className="mt-6 text-center text-white">
          <p className="font-bold text-lg">Contact Info:</p>
          <ul className="space-y-2 mt-4">
            <li>
              <FaPhone className="inline mr-2" /> +8668828982
            </li>
            <li>
              <FaEnvelope className="inline mr-2" /> ajaydabhade800@gmail.com
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contact;
