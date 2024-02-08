import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex justify-center items-center md:items-end md:pb-12 hero-bg">
        <div className="flex flex-col text-center text-white items-center md:mt-20 gap-2">
          <h1 className="reem-kufi text-4xl md:text-6xl">SHIKAR</h1>
          <h1 className="reem-kufi text-3xl md:text-6xl">MANAGEMENT FEST</h1>
          <h1 className="reem-kufi text-3xl md:text-6xl">2024</h1>
          <p className="poppins-regular text-xs">
            [February 22<sup className="font-features sups">nd</sup> & 23
            <sup className="font-features sups">rd</sup> 2024]
          </p>
          <p className="poppins-regular ">
           "Here wonders await around every corner"
          </p>
          <button className="button w-40 bg-secondary mt-6 poppins-regular">Register now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
