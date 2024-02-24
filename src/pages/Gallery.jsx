import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="h-max w-full gallery-bg flex flex-col p-4">
        <h1 className="poppins-bold text-7xl md:text-8xl text-white text-opacity-20 p-4 pb-8">
          GALLERY
        </h1>
        <div className="w-full h-full flex flex-wrap gap-4 justify-evenly items-center pb-8">
          <div className="h-44 w-max bg-gray-300 p-2">
            <img
              src="/gallery/img-1.jpeg"
              className="h-full w-auto"
              alt=""
            />
          </div>
          <div className="h-44 w-max bg-gray-300 p-2">
            <img
              src="/gallery/img-2.jpeg"
              className="h-full w-auto"
              alt=""
            />
          </div>
          <div className="h-44 w-max bg-gray-300 p-2">
            <img
              src="/gallery/img-3.jpeg"
              className="h-full w-auto"
              alt=""
            />
          </div>
          {/* <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div>
            <div className='w-80 h-44 bg-gray-300'></div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
