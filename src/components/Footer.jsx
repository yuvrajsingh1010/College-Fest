import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"
import { sponsers } from "../../sponsers";

import { mainSponser } from "../../sponsers";


const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 py-7 gap-3">
      <div className="flex flex-col justify-center items-center gap">
        <img src={logo} className="w-20 h-auto" />
        <h1 className="poppins-bold text-white text-xl">
          SHIKHAR'<span className="text-secondary">24</span>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <span className="w-full flex items-center justify-center gap-4">
        <hr className="w-40 text-white border-white" />
        <h1 className="text-secondary text-3xl poppins-bold text-center">Powered By</h1>
        <hr className="w-40 text-white border-white" />
        </span>
        <div className="py-4 flex flex-col justify-center items-center">
          <img src={mainSponser.src} className="p-4 w-full sm:w-1/2 md:w-1/4 h-auto" alt="" />
          <div className="flex flex-wrap justify-center">
          {
            sponsers.map((obj,key)=>{
              return (
                <img key={key} src={obj.src} alt={obj.name} className="p-4 h-24 w-auto" />
              )
            })
          }
          </div>
        </div>
      </div>
      <hr className="w-full text-white border-white" />
      <p className="text-white poppins-regular text-sm">
        © Shikhar 2024. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
