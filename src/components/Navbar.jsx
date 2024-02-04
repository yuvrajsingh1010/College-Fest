import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavList from "./NavList";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  return (
    <div className="w-full h-32 flex items-center justify-between px-8 ">
      <h1 className="poppins-bold text-white text-xl">
        SHIKHAR<span className="text-secondary">S24</span>
      </h1>
      <div className="hidden md:block">
        <NavList />
      </div>
      <Sheet>
        <SheetTrigger className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-primary border-none">
          <div className="flex flex-col py-4">
            <h1 className="poppins-bold text-white text-xl">
              SHIKHAR<span className="text-secondary">S24</span>
            </h1>
              <Separator className="bg-secondary my-4"/>
            <NavList />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
