import { motion } from "framer-motion";
import React from "react";

const EventCard = ({ name, perHead, perTeam, form }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: [40, -10, 0],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 2,
        delay: 0,
        delayChildren: 0.5,
        staggerChildren: 0.3,
      }}
      viewport={{ once: true }}
      className="w-full md:w-2/5 flex flex-col rounded-xl bg-white bg-opacity-40 text-secondary"
    >
      <div className="w-full h-full flex justify-between items-center p-4 ">
        <p className="w-2/5 flex flex-col poppins-semibold text-white">
          {name}
        </p>
        <a
          href={form}
          className="h-8 flex justify-center rounded-3xl text-white p-1 px-2 bg-secondary w-36"
        >
          Register now
        </a>
      </div>
      <div className="w-full flex items-center bg-white bg-opacity-35  overflow-hidden p-2 py-3">
        <span className="poppins-semibold flex gap-3">
          {" "}
          <span className="text-white poppins-bold">
            Registration per head:{" "}
          </span>{" "}
          {perHead ? `${perHead}/-` : <i>team only</i>}
        </span>
      </div>
      <div className="w-full flex items-center overflow-hidden p-2 py-3">
        <span className="poppins-semibold flex gap-3">
          {" "}
          <span className="text-white poppins-bold">
            Registration per team:{" "}
          </span>{" "}
          {perTeam ? `${perTeam}/-` : <i>solo only</i>}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;
