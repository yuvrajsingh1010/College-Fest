import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="  w-screen flex flex-col  items-center">
        <div className="flex flex-col  justify-center items-center w-screen h-screen text-white ">
          <h1 className="reem-kufi text-6xl mb-3">SHIKAR</h1>
          <h1 className="reem-kufi text-6xl mb-3">MANAGEMENT FEST</h1>
          <h1 className="reem-kufi text-6xl">2024</h1>
          <p className="poppins-regular text-xs mt-2 mb-1">
            [February 22<sup class="font-features sups">nd</sup> & 23
            <sup class="font-features sups">rd</sup> 2024]
          </p>
          <p className="poppins-regular ">
           "Here wonders await around every corner"
          </p>
          <button className="button bg-secondary mt-6 poppins-regular">Register now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
