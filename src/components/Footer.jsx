import React, { useEffect, useState } from "react";
import logo from "../assets/download (1).jpeg"
import { sponsers } from "../../sponsers";

import { mainSponser } from "../../sponsers";


const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 py-7 gap-3">
      <div className="flex flex-col justify-center items-center gap">
        <img src={logo} className="w-20 h-auto" />
        
      </div>
      <hr className="w-full text-white border-white" />
      <p className="text-white poppins-regular text-sm">
        © Shikhar 2024. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
