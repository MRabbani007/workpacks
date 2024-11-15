"use client";

import React from "react";
import CountUp from "react-countup";

export default function CardStatistics() {
  return (
    <div className="p-4 lg:p-10 bg-white shadow-md shadow-zinc-600 flex gap-4 flex-row items-center">
      <div className="text-center space-y-2 flex-1">
        <p className="text-sky-700 font-extrabold text-4xl">
          <CountUp
            end={40}
            duration={3}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />
          +
        </p>
        <p className="text-zinc-600 font-medium">Certified Experts</p>
      </div>
      <div className="text-center space-y-2 flex-1">
        <p className="text-sky-700 font-extrabold text-4xl">
          <CountUp
            end={150}
            duration={3}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />
          +
        </p>
        <p className="text-zinc-600 font-medium">
          Combined Years of Experience
        </p>
      </div>
    </div>
  );
}
