import React from "react";

const EventBody = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <h2 className="poppins-medium text-2xl mb-4">Search for events here</h2>
      <div className="w-full md:w-1/2 flex items-center border-2 border-gray-400 rounded-3xl p-2 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="bg-transparent poppins-regular pl-4"
          type=""
          placeholder="Search event names..."
        />
      </div>
      <p className="poppins-regular px-4 text-center mt-4">
        Select your <span className="text-secondary poppins-medium">event</span>{" "}
        category and{" "}
        <span className="text-secondary poppins-medium">register now</span>
      </p>
    </div>
  );
};

export default EventBody;
