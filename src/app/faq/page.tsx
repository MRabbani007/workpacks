import Wrapper from "@/features/Wrapper";
import FormLearnMore from "@/features/forms/FormLearnMore";
import React from "react";

export default function FAQPage() {
  return (
    <main className="bg-zinc-200 space-y-0">
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 rounded-br-[100px] flex flex-col items-center justify-center text-center">
        <Wrapper>
          <p className="text-6xl font-extrabold text-white mb-6">
            FAQs on WorkFace Planning, AWP Industry, and more
          </p>
        </Wrapper>
      </section>
      <section className="min-h-screen text-xl text-zinc-700 text-center flex items-center justify-center">
        Coming Soon!
      </section>
      <section id="learn_more" className="min-h-screen bg-sky-700 py-20">
        <Wrapper>
          <p className="text-4xl font-bold text-center">
            Learn More from Our Experts
          </p>
          <FormLearnMore />
        </Wrapper>
      </section>
    </main>
  );
}
