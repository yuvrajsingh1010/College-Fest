import React, { useState } from "react";

const NavList = () => {

  const [isActive,setIsActive] = useState(0);
  const list = [
    {
      label: "Home",
      route: "#home",
    },
    {
      label: "About",
      route: "#about",
    },
    {
      label: "Gallery",
      route: "#gallery",
    },
    {
      label: "Events",
      route: "#events",
    },
    {
      label: "Contact",
      route: "#contact",
    },
  ];
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-white poppins-regular">
      {list.map((obj, key) => {
        return (
          <li
            key={key}
            className={`text-lg p-2 hover:cursor-pointer ${
              (isActive === key) &&
              "bg-violet-200 bg-opacity-10 md:bg-transparent md:border-b-4 md:border-secondary"
            }`}
          >
            <a onClick={()=>setIsActive(key)} href={obj.route}>{obj.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
