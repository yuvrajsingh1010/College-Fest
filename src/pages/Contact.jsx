import React from "react";
import { SocialIcon } from "react-social-icons";
const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col w-full h-max md:h-screen justify-center items-center p-4 py-6 text-white contact-bg">
        <div className="flex flex-col mb-4 poppins-semibold text-3xl md:text-4xl text-center">
          <h1>Contact Information</h1>
          <h1> and enquiries</h1>
        </div>
        <p className="md:px-20 lg:px-72 text-center poppins-regular">
          We are here to assist you if you have any questions,concerns,or simply
          want to get in touch,feel free to reach out to us the following
          contact details:
        </p>
        <div className="w-full flex mt-6 justify-center items-center ">
          <div className="md:flex flex-col bg-pink-800 h-max text-sm md:text-xl rounded-l-2xl bg-opacity-75 p-5 poppins-semibold hidden">
            <h1>Save the</h1>
            <h1>date</h1>
            <p className="poppins-regular text-xs flex flex-row mt-4 mb-4 items-center md:text-sm">
              22 <sup className="font-features sups ml-1">FEB 2025</sup>
            </p>
            <p className="poppins-regular text-xs md:text-sm flex flex-row mt-4 mb-4 items-center">
              23 <sup className="font-features sups ml-1">FEB 2025</sup>
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
          {/* <div className="bg-pink-800  w-1/12  bg-opacity-75 rounded-l-2xl "></div> */}

          <div className="w-full md:w-auto flex bg-pink-800  bg-opacity-75 pl-6 rounded-xl">
            <div className=" h-full w-full pt-6 rounded-l-2xl">
              <div className="w-full md:w-96 flex flex-col pr-2">
                <h1 className="text-2xl md:text-4xl poppins-semibold ">
                  Contact us
                </h1>
                <p className=" text-xs md:text-sm poppins-regular mb-4">
                  {" "}
                  For more details and queries
                </p>
                <input
                  className=" w-full lg:w-96 mb-2 md:mb-1 bg-transparent p-l-2 pb-1 placeholder-white border-b border-pink-400 text-sm md:text-base focus:outline-none focus:ring-0"
                  placeholder="Name"
                ></input>
                <input
                  className="w-full mb-2 mt-1 md:mb-1 bg-transparent p-l-2 pb-1 placeholder-white border-b border-pink-400 text-sm md:text-base focus:outline-none focus:ring-0"
                  placeholder="Email"
                ></input>
                <input
                  className="w-full mb-2 mt-1 md:mb-1 bg-transparent p-l-2 pb-1 placeholder-white border-b border-pink-400 text-sm md:text-base focus:outline-none focus:ring-0"
                  placeholder="Message"
                ></input>
                <div className="w-full flex justify-end pt-4 pb-2">
                  <button className="button h-10 w-24 m-2 bg-secondary  poppins-regular">
                    Send
                  </button>
                </div>
              </div>
            </div>
          <div className="rounded-r-2xl flex flex-col justify-center items-center">
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
