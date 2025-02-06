import FadeUp from "@/Animations/FadeUp";
import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="h-max w-full gallery-bg flex flex-col p-4 md:py-10">
        <FadeUp>
          <h1 className="poppins-bold text-7xl md:text-8xl text-white text-center text-opacity-20 p-4 pb-8">
            GALLERY
          </h1>
        </FadeUp>
        <div className="w-full h-full flex flex-wrap gap-4 justify-evenly items-center pb-8">
          <FadeUp>
            <div className="h-44 w-max bg-gray-300 p-2">
              <img src="/gallery/images (1).jpeg" className="h-full w-auto" alt="" />
            </div>
          </FadeUp>
          <FadeUp>
            <div className="h-44 w-max bg-gray-300 p-2">
              <img src="/gallery/download.jpeg" className="h-full w-auto" alt="" />
            </div>
          </FadeUp>
          <FadeUp>
            <div className="h-44 w-max bg-gray-300 p-2">
              <img src="/gallery/BannerFootball.jpg" className="h-full w-auto" alt="" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
