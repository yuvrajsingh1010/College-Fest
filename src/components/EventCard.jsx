import React from "react";

const EventCard = ({ name, perHead,perTeam, form }) => {
  return (
    <div className="w-full md:w-2/5 flex flex-col rounded-xl bg-white bg-opacity-40 text-secondary">
      <div className="w-full h-full flex justify-between items-center p-4 ">
        <p className="w-2/5 flex flex-col poppins-semibold text-white">
          {name}
        </p>
        <a href={form} className="h-8 flex justify-center rounded-3xl text-white p-1 px-2 bg-secondary w-36">
          Register now
        </a>
      </div>
      <div className="w-full flex items-center bg-white bg-opacity-35  overflow-hidden p-2 py-3">
        <span className="poppins-semibold flex gap-3"> <span className="text-white poppins-bold">Registration per head: </span> {perHead ? `${perHead}/-`: <i>team only</i>}</span>
      </div>
      <div className="w-full flex items-center overflow-hidden p-2 py-3">
        <span className="poppins-semibold flex gap-3"> <span className="text-white poppins-bold">Registration per team: </span> {perTeam}/-</span>
      </div>
    </div>
  );
};

export default EventCard;
