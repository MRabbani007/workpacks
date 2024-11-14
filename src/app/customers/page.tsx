import Accordion from "@/features/Accordion";
import Wrapper from "@/features/Wrapper";
import { BUISNESS_INT, MARKETS } from "@/lib/data";
import React from "react";

export default function CustomersPage() {
  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-sky-800 to-sky-950 pt-40 text-center">
        <Wrapper>
          <p className="text-6xl font-bold mb-8">
            We commit to our responsibilities to drive successful partnerships
          </p>
          <p className="text-xl font-medium">
            We work together with an enthusiastic appetite for efficiency.
          </p>
        </Wrapper>
      </section>
      <section className="py-20 ">
        <Wrapper>
          <p className="text-sky-950 text-5xl font-semibold mb-10 text-center">
            Markets We Serve
          </p>
          <div className="grid grid-cols-4 gap-6">
            {MARKETS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 shadow-md shadow-zinc-800 space-y-2 hover:scale-105 duration-200"
              >
                <p className="text-sky-900 text-xl">{item.title}</p>
                <p className="text-zinc-800 text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      <section className="py-20">
        <Wrapper>
          <p className="text-sky-900 font-semibold text-2xl mt-6 text-center">
            BUSINESS INTRODUCTORY
          </p>
          <div className="h-2 w-[300px] md:w-[400px] relative bg-zinc-800 my-4 mx-auto mb-10">
            <div className="w-[50%] h-full bg-blue-500"></div>
          </div>
          <Accordion items={BUISNESS_INT} />
        </Wrapper>
      </section>
    </div>
  );
}
