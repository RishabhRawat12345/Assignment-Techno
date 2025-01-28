import React from "react";

import ServicesPage from "./ServicesPage";
import AboutUsPage from "./AboutUsPage";
import ContactUsPage from "./ContactUsPage";

const HeroSection = () => {
  return (
    <>
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 text-gray-800 overflow-hidden flex-col  mt-15 h-full">
        <div className="container mx-auto px-6 py-20 lg:py-32 relative h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            {/* Left Column - Content */}
            <div className="lg:col-span-6 text-center lg:text-left  h-full">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-blue-800">
                Drive Innovation with <span className="text-purple-600">TechNova</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Explore cutting-edge technology solutions and empower your future. 
                Collaborate, create, and innovate with the best in the industry.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#get-started"
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 font-medium rounded-full px-8 py-4 shadow-lg"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-96 lg:h-auto overflow-hidden rounded-lg shadow-xl">
                {/* Image */}
                <img
                  src="https://source.unsplash.com/800x600/?technology,innovation"
                  alt="Innovation"
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = "https://via.placeholder.com/800x600.png?text=Innovation+Image"} // Fallback image
                />
                {/* Overlay Shape */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-30 rounded-lg"></div>
              </div>
              {/* Floating Text/Shape */}
              <div className="absolute -top-12 -right-16 w-64 h-64 bg-purple-300 rounded-full opacity-40 blur-3xl"></div>
            </div>
          </div>
        </div>

    
      </section>

      <ServicesPage/>

      <AboutUsPage/>
      <ContactUsPage/>
    </>
  );
};

export default HeroSection;
