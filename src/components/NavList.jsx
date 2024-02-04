import React from "react";

const NavList = () => {

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
      label: "Payment",
      route: "#payment",
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
    <ul className="flex flex-col md:flex-row gap-4 text-white poppins-regular">
      {list.map((obj, key) => {
        const isActive = key === 0;
        return (
          <li
            key={key}
            className={`text-lg p-2 hover:cursor-pointer ${
              isActive && "bg-violet-200 bg-opacity-10 md:bg-transparent md:border-b-4 md:border-secondary"
            }`}
          >
            {obj.label}
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
