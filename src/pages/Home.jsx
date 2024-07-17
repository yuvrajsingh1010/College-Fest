import FadeUp from "@/Animations/FadeUp";
import SlowFade from "@/Animations/SlowFade";
import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen flex justify-center items-center md:pt-10 hero-bg">
        <div className="flex flex-col text-center text-white items-center md:mt-20 gap-2">
          <SlowFade>
            <h1 className="font-medium font-aurora text-4xl md:text-6xl">
              SHIKHAR
            </h1>
            <h1 className="font-medium font-aurora text-4xl md:text-6xl">
              MANAGEMENT <span className="max-sm:hidden">FEST</span>
            </h1>
            <h1 className="font-medium font-aurora text-4xl md:text-6xl sm:hidden">
              FEST 2024
            </h1>
            <h1 className="font-medium font-aurora text-3xl md:text-6xl max-sm:hidden">
              2024
            </h1>
          </SlowFade>
          <FadeUp delay={2}>
            <p className="poppins-regular">
              February 22<sup className="font-features sups">nd</sup> & 23
              <sup className="font-features sups">rd</sup> 2024
            </p>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="poppins-regular ">
              "Here wonders await around every corner"
            </p>
          </FadeUp>
          <FadeUp delay={2}>
            <a href="#events">
              <button className="button w-40 bg-secondary mt-3 sm:mt-6 poppins-bold">
                Register now
              </button>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Home;
