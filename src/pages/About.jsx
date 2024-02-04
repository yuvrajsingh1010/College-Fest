import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-max lg:min-h-screen flex flex-col lg:flex-row p-6">
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="poppins-bold text-7xl md:text-8xl text-white text-opacity-20 pb-4">
            ABOUT
          </h1>
          <h2 className="text-white poppins-medium">
            Welcome to <span className="text-secondary font-bold">SHIKHAR</span>
          </h2>
          <h2 className="text-white poppins-medium">
            MANAGEMENT FEST{" "}
            <span className="text-secondary font-bold">2024</span>
          </h2>
          <p className="text-white poppins-medium pt-2 text-justify">
            SHIKHAR is the flagship event of SCMS Group of Institutions. It
            gives aspiring managers a taste of challenges to come and attracts
            the most talented and competitive management students from various
            parts of the country. This international fest tests the budding
            professionals on various aspects of teamwork, logical thinking,
            analytical and mental grit. SHIKHAR’24 will be conducted offline as
            enthusiastically as last year with high spirits of the students
          </p>
        </div>
        <div className="lg:w-1/2 flex-flex-col "></div>
      </div>
    </section>
  );
};

export default About;
