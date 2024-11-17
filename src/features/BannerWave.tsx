import React, { ReactNode } from "react";

export default function BannerWave({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-[90vh] bg-gradient-to-b from-sky-900 to-sky-950 flex items-center justify-center py-20 relative z-0 overflow-x-clip">
      <div className="wave absolute left-0 right-0 bottom-0 min-w-[1000px] bg-white z-10 h-10" />
      <div className="absolute opacity-40 top-[100px] left-[30vw] size-[50px] bg-gradient-to-br from-indigo-600/30 to-indigo-500/10 shadow-[0_0_200px_50px] shadow-indigo-600 z-20 rounded-full" />
      <div className="absolute opacity-40 bottom-[100px] right-[20vw] size-[50px] bg-gradient-to-br from-indigo-600/30 to-indigo-500/10 shadow-[0_0_200px_50px] shadow-indigo-600 z-20 rounded-full" />
      {children}
    </section>
  );
}
