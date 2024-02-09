import React from "react";
import vector1 from "../assets/payment-vector-1.svg";
import vector2 from "../assets/payment-vector-2.svg";
import logo from "../assets/shikhar.svg";

const Payment = () => {
  return (
    <section id="payment">
      <div className="w-full h-max lg:min-h-screen flex flex-col items-center justify-center payment-bg text-white p-6">
        <h1 className=" flex md:flex-col poppins-semibold text-3xl md:text-4xl text-center pb-4">
          <span>
            Where Wonder Awaits You <br className="hidden md:block" /> At Every
            Corner
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
      </div>
      <div className="w-full h-80 flex justify-center items-center px-4">
        <img src={logo} className="h-full w-auto" alt="" />
      </div>
    </section>
  );
};

export default Payment;
