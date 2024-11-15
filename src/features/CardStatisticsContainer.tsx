import React, { ReactNode } from "react";

export default function CardStatisticsContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-gradient-to-b from-zinc-300 to-white h-[20vh] z-0 mt-8 relative w-full">
      <div className="absolute top-0 left-0 right-0 -translate-y-[10vh] max-w-[80vw] mx-auto ">
        {children}
      </div>
    </div>
  );
}
