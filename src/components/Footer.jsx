import React from "react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center p-4 py-7 gap-3">
      <div className="flex flex-col md:flex-row justify-center items-center gap">
        <img src={logo} className="w-20 h-auto" />
        <h1 className="poppins-bold text-white text-xl">
          SHIKHAR'<span className="text-secondary">24</span>
        </h1>
      </div>
      <hr className="w-full text-white border-white md:hidden" />
      <p className="text-white poppins-regular text-sm">
        © Shikhar 2024. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
