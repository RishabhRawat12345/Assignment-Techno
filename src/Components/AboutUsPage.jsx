import React from "react";
import Navbar from "./Nav";

const AboutUsPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At TechNova, our mission is to revolutionize the tech industry by providing innovative and scalable solutions that enable businesses to thrive in the digital world. We strive to create user-friendly products that improve efficiency and empower our clients to achieve their goals.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We envision a world where technology empowers everyone. We aim to be at the forefront of innovation, leading the way in delivering next-gen solutions that inspire growth, creativity, and sustainability across industries.
            </p>
          </div>

          {/* Team Section */}
          <h2 className="text-center text-4xl font-bold text-blue-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-4">
                John is the visionary behind TechNova. With over 10 years of experience in the tech industry, he leads the company with a passion for innovation and excellence.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-gray-500 mt-4">
                Jane is responsible for the technical direction of the company. She has a deep expertise in cloud computing and AI, ensuring that TechNova stays ahead of the technological curve.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">Michael Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="text-gray-500 mt-4">
                Michael leads the development team with a focus on building robust, scalable, and efficient solutions that align with TechNova's mission to innovate and deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
