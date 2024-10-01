import EventBody from "@/components/EventBody";
import React from "react";
import { eventInfo } from "../../eventInfo";
import first from "../assets/firstprize.png";
import second from "../assets/secondprize.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FadeUp from "@/Animations/FadeUp";

const Events = () => {
  return (
    <section id="events">
      <div className="w-full h-max flex flex-col events-bg items-center text-white py-10 p-4">
        <FadeUp>
          <h1 className=" flex md:flex-col poppins-semibold text-3xl md:text-4xl text-center pb-4">
            <span>
              Welcome to our Festival <br className="hidden md:block" /> Event
              Page!
            </span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="poppins-medium text-center mb-3">
            "<span className="text-secondary">College 25</span>, an immersive
            collection of culture, creativity and community !"
          </p>
        </FadeUp>
        <FadeUp>
          <p className="poppins-regular">
            Date: [February{" "}
            <span className="text-secondary">
              22<sup className="font-features sups">nd </sup>
            </span>
            &
            <span className="text-secondary">
              23<sup className="font-features sups">rd </sup>
            </span>
            2025]
          </p>
        </FadeUp>
        <FadeUp>
          <p className="poppins-medium mt-2 text-center">
            Location: [JUET,JIIT,JU]
          </p>
        </FadeUp>
        <Dialog>
          <DialogTrigger asChild>
            <button className="button mt-4 hover:bg-secondary hover:bg-opacity-20">
              Rules and Regulations
            </button>
          </DialogTrigger>
          <DialogContent className="text-white rules">
            <DialogHeader>
              <div className="h-96 text-left overflow-scroll rules">
                {eventInfo.map((event, index) => (
                  <FadeUp key={index}>
                    <DialogTitle className="mb-4 font-bold poppins-bold">
                      {event.eventName}
                    </DialogTitle>
                    <div className="w-fit flex flex-col gap-2 mb-2 poppins-medium">
                      <h2 className="flex items-center text-2xl">
                        <img className="h-10 w-auto" src={first} alt="" />
                        <span>₹{event.firstprize}/-</span>
                      </h2>
                      {event.secondprize && (
                        <h2 className="flex items-center text-xl">
                          <img className="h-8 w-auto" src={second} alt="" />
                          <span>₹{event.secondprize}/-</span>
                        </h2>
                      )}
                    </div>
                    <ul className="poppins-regular">
                      {event.details.map((detail, idx) => (
                        <DialogDescription key={idx} className="mb-4">
                          <span className="text-secondary">&#8227;</span>{" "}
                          {detail}
                        </DialogDescription>
                      ))}
                      <hr className="py-4" />
                    </ul>
                  </FadeUp>
                ))}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <EventBody />
      </div>
    </section>
  );
};

export default Events;
