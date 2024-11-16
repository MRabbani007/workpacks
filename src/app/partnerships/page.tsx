import Wrapper from "@/features/Wrapper";
import Link from "next/link";
import React from "react";

export default function PartnerShipsPage() {
  return (
    <main>
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 flex items-center justify-center relative overflow-x-clip">
        <div className="wave absolute left-0 right-0 bottom-0 min-w-[1000px] bg-white z-10 h-10" />
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Partnerships
        </p>
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Wrapper className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="flex-1">
            <p className="text-indigo-950 text-4xl mb-6">AWP Consulting</p>
            <p className="text-zinc-600">
              As a key player within the Jovian Ventures ecosystem, Construct-X
              works hand-in-hand with WorkPacks to deliver exceptional AWP
              consulting services. As a prominent consultancy in the AWP domain,
              Construct-X provides an array of specialized programs and services
              in AWP, Lean, and Technology. These offerings are tailored to
              enhance client value, minimize risk, eliminate waste, improve
              productivity, and ensure the highest standards of quality and
              safety.
            </p>
            <Link href="https://construct-x.com" target="_blank">
              Learn More...
            </Link>
          </div>
          <div className="flex-1"></div>
        </Wrapper>
      </section>
      <section className="py-10 flex items-center justify-center">
        <Wrapper className="flex flex-col md:flex-row gap-6">
          <div className="p-4 border-[1px] border-zinc-500">
            <p className="text-indigo-950 font-semibold text-2xl">
              Building the future together{" "}
            </p>
            <p className="text-zinc-600">
              Dedicated to optimizing team productivity and fostering
              exceptional project experiences, Construct-X meticulously
              integrate the most suitable tools and processes, ensuring maximum
              efficiency and the realization of industry-leading project
              delivery performance for all stakeholders.
            </p>
          </div>
          <div className="p-4 border-[1px] border-zinc-500">
            <p className="text-indigo-950 font-semibold text-2xl">
              Acknowledged industry experts
            </p>
            <p className="text-zinc-600">
              Construct-X caters to a diverse clientele, including
              owner/operators, EPCs, general contractors, sub-contractors,
              engineers, procurement specialists, construction managers, and
              vendors with delivery requirements, all seeking to collaborate and
              achieve more successful outcomes.
            </p>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
