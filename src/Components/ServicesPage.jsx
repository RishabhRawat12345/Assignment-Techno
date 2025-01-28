import React from "react";
import Navbar from "./Nav";

const ServicesPage = ({ darkMode }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section
        className={`py-24 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-6">
          <h2
            className={`text-center text-4xl font-bold mb-12 ${
              darkMode ? "text-purple-400" : "text-blue-800"
            }`}
          >
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Web Development Service */}
            <div
              className={`shadow-lg rounded-lg p-8 text-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`mb-6 ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                {/* Icon for Web Development */}
                <i className="fas fa-laptop-code text-4xl"></i>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-purple-300" : "text-blue-800"
                }`}
              >
                Web Development
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Create dynamic, responsive websites and web applications that
                deliver engaging user experiences.
              </p>
              <a
                href="#web-development"
                className={`font-medium hover:underline ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                Learn More
              </a>
            </div>

            {/* Cloud Solutions Service */}
            <div
              className={`shadow-lg rounded-lg p-8 text-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`mb-6 ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                {/* Icon for Cloud Solutions */}
                <i className="fas fa-cloud text-4xl"></i>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-purple-300" : "text-blue-800"
                }`}
              >
                Cloud Solutions
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Leverage the power of cloud technology for scalable, flexible,
                and cost-effective solutions.
              </p>
              <a
                href="#cloud-solutions"
                className={`font-medium hover:underline ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                Learn More
              </a>
            </div>

            {/* AI/ML Services */}
            <div
              className={`shadow-lg rounded-lg p-8 text-center ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`mb-6 ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                {/* Icon for AI/ML Services */}
                <i className="fas fa-brain text-4xl"></i>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-purple-300" : "text-blue-800"
                }`}
              >
                AI/ML Services
              </h3>
              <p
                className={`mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Transform your business with intelligent solutions powered by
                Artificial Intelligence and Machine Learning.
              </p>
              <a
                href="#ai-ml-services"
                className={`font-medium hover:underline ${
                  darkMode ? "text-purple-400" : "text-blue-600"
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
