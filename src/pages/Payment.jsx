import React from "react";
import vector1 from "../assets/payment-vector-1.svg";
import vector2 from "../assets/payment-vector-2.svg";

const Payment = () => {
  return (
    <section id="payment">
      <div className="w-full h-max lg:min-h-screen flex flex-col items-center payment-bg text-white p-6">
        <h1 className=" flex md:flex-col poppins-semibold text-3xl md:text-4xl text-center pb-4">
          <span>
            Welcome to our Festival <br className="hidden md:block" /> Payment
            Page
          </span>
        </h1>
        <p className="poppins-medium">
          <span className="text-secondary">" </span> Your support plays a
          crucial role in making our event a grand success
          <span className="text-secondary"> "</span>
        </p>
        <div className="flex flex-col md:flex-row py-4">
          <div className="md:w-1/2 flex flex-col text-white p-4 items-center lg:px-8">
            <img src={vector1} className="h-12 w-auto text-secondary" alt="" />
            <h2 className="poppins-bold py-2">Purpose of Payment</h2>
            <p className="poppins-regular text-center lg:px-20">
              Your contributions directly contribute to enhancing the overall
              experience for students and attendees, ensuring memorable
              performances, workshops, and activities.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col text-white p-4 items-center">
            <img src={vector2} className="h-12 w-auto text-secondary" alt="" />
            <h2 className="poppins-bold py-2">Why Payment?</h2>
            <p className="poppins-regular text-center lg:px-20">
              By supporting our event, you are investing in the growth and
              development of young talents, fostering creativity, and promoting
              a vibrant cultural exchange.
            </p>
          </div>
        </div>
        <button className="button flex items-center bg-secondary text-s gap-2 hover:bg-pink-700">
          Pay now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Payment;
