import EventBody from "@/components/EventBody";
import React from "react";

const Events = () => {
  return (
    <section id="events">
      <div className="w-full h-max flex flex-col events-bg items-center text-white p-4">
        <h1 className=" flex md:flex-col poppins-semibold text-3xl md:text-4xl text-center pb-4">
          <span>
            Welcome to our Festival <br className="hidden md:block" /> Event
            Page!
          </span>
        </h1>
        <p className="poppins-medium text-center mb-3">
          "<span className="text-secondary">Shikhar 24</span>, an immersive
          collection of culture, creativity and community !"
        </p>
        <p className="poppins-regular">
          Date: [February <span className="text-secondary">
            22<sup className="font-features sups">nd  </sup>
          </span>
          &
          <span className="text-secondary">
            23<sup className="font-features sups">rd </sup>
          </span>
          2024]
        </p>
        <p className="poppins-medium mt-2 text-center">Location: [SCMS, Prathap Nagar, Muttom, Aluva, Kochi]</p>
        <EventBody />
      </div>
    </section>
  );
};

export default Events;
