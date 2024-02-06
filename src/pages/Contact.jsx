import React from "react";
import { SocialIcon } from "react-social-icons";
const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col justify-center items-center mt-10  text-white ">
        <div className="flex flex-col mb-4   poppins-semibold text-3xl md:text-4xl text-center">
          <h1>Contact Information</h1>
          <h1> and enquiries</h1>
        </div>
        <div className=" flex flex-col justify-center text-center poppins-regular contact-bg">
          <p>
            We're here to assist you if you have any questions,concerns,or
            simply want to get in
          </p>
          <p>
            touch,feel free to reach out to us the following contact details:
          </p>
          <div className="flex flex-row  p-4 h-full w-screen mt-6 justify-center items-stretch ">
            <div className="bg-pink-800 h-full text-sm md:text-xl rounded-l-2xl bg-opacity-75 flex flex-col text-left p-5 poppins-semibold mt-4">
              <h1>Save the</h1>
              <h1>date</h1>
              <p className="poppins-regular text-xs flex flex-row mt-4 mb-4 items-center md:text-sm">
                22 <sup className="font-features sups ml-1">FEB 2024</sup>
              </p>
              <p className="poppins-regular text-xs md:text-sm flex flex-row mt-4 mb-4 items-center">
                23 <sup className="font-features sups ml-1">FEB 2024</sup>
              </p>

              <div className="flex flex-row  poppins-regular text-xs md:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Event location</p>
              </div>
            </div>
            <div className="bg-pink-800  w-1/12  bg-opacity-75 rounded-l-2xl "></div>

            <div className="bg-pink-800 h-full   text-left pt-6 ">
              <div className="flex flex-col ">
                <h1 className="text-2xl md:text-4xl poppins-semibold ">
                  Contact us
                </h1>
                <p className=" text-xs md:text-sm poppins-regular mb-4">
                  {" "}
                  For more details and queries
                </p>
                <input
                  className=" w-full lg:w-96 mb-2 md:mb-1 bg-pink-800 placeholder-white border-b border-pink-400 text-sm md:text-base"
                  placeholder="Name"
                ></input>
                <input
                  className="w-full mb-2 mt-1 md:mb-1 bg-pink-800 placeholder-white border-b border-pink-400 text-sm md:text-base"
                  placeholder="Email"
                ></input>
                <input
                  className="w-full mb-2 mt-1 md:mb-1 bg-pink-800 placeholder-white border-b border-pink-400 text-sm md:text-base" 
                  placeholder="Message"
                ></input>
                <div className="flex justify-end items-end">
                  <button className="button h-10 w-24 m-2 bg-secondary  poppins-regular">
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-pink-800    rounded-r-2xl flex flex-col justify-center items-center">
              <div className="bg-white h-12 w-1"></div>

              <SocialIcon
                network="instagram"
                bgColor="rgb(157 23 77)"
                fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                network="x"
                bgColor="rgb(157 23 77)"
                fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                network="facebook"
                bgColor="rgb(157 23 77)"
                fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />

              <div className="bg-white h-12 w-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
