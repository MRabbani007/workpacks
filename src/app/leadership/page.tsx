import Wrapper from "@/features/Wrapper";
import React from "react";

export default function LeaderShipPage() {
  return (
    <main className="bg-zinc-200 space-y-0">
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 rounded-br-[100px] flex flex-col items-center justify-center text-center">
        <Wrapper>
          <p className="text-6xl font-extrabold text-white mb-6">Leadership</p>
          <p className="text-2xl font-semibold text-white">
            We believe in the vision of Advanced Work Packaging: Our leaders are
            not just managers, but innovators and problem solvers who help build
            a better future for everyone.
          </p>
        </Wrapper>
      </section>
      <section className="min-h-screen text-xl text-zinc-700 text-center flex items-center justify-center">
        Coming Soon!
      </section>
    </main>
  );
}
