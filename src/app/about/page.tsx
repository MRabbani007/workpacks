import SectionFreeDemo from "@/features/SectionFreeDemo";
import Wrapper from "@/features/Wrapper";
import React from "react";

const items = [
  {
    title: "COLLABORATIVE",
    content: "We work together with an enthusiastic appetite for efficiency.",
  },
  {
    title: "INNOVATIVE",
    content:
      "We bring an innovative-mindset to all we do. There’s always an answer, it’s about how you approach the problem.",
  },
  {
    title: "AUTHORATIVE",
    content:
      "We commit to our responsibilities everyday, knowing clearly our role and purpose",
  },
  {
    title: "EFFICIENT",
    content:
      "Our pioneering vision gives us the inherent agility to collaborate and combine in ways that expedite success.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-zinc-200 space-y-0">
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 rounded-br-[100px] flex items-center justify-center">
        <p className="text-6xl font-extrabold text-white">Mission and Values</p>
      </section>
      <section className="min-h-screen flex items-center bg-zinc-200 py-10">
        <Wrapper className="flex flex-col">
          <p className="text-sky-600 text-xl my-6">Who we are - Our Mission</p>
          <p className="text-indigo-950 text-4xl font-semibold mb-6">
            Our mission is to provide a scalable digital solution to help
            optimize capital projects execution, by insuring efficiency,
            productivity, safety and waste reduction through successful Advanced
            Work Packaging automation.
          </p>
          <div className="flex gap-6 mb-8">
            <div className="p-6 bg-white shadow-md shadow-zinc-600">
              <p className="text-indigo-950/80 font-semibold text-2xl mb-4">
                Our Beliefs
              </p>
              <p className="text-zinc-700">
                We partner with our clients to achieve deep transformation of
                existing systems and deploy world class technology that will
                jump start the full efficiency gains promised by the correct
                implementation of Advanced Work Packaging methodologies.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md shadow-zinc-600">
              <p className="text-indigo-950/80 font-semibold text-2xl mb-4">
                Key Benefits
              </p>
              <p className="text-zinc-700">
                Implementing WorkPacks will make capital projects safer, more
                productive, and highly reliable by empowering teams to better
                collaborate through digital work packaging across all project
                phases from start to finish. WorkPacks delivers a platform that
                allows users to benefit from Work Breakdown Structuring, and
                Lean/Agile Planning methodologies regardless of the breadth of
                data and tools available to support the delivery of the project.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md shadow-zinc-600">
            <p className="text-indigo-950/80 font-semibold text-2xl mb-4">
              How It Works
            </p>
            <p className="text-zinc-700">
              Advanced Work Packaging (AWP) is a collaborative project framework
              that divides project scope into manageable portions of work for
              planning and execution enabling better project outcomes including
              improved productivity and increased predictability. AWP
              incorporates agile and lean construction methodologies to optimize
              capital project delivery across the project life cycle.
              Additionally, implementing a proper Workface Planning Program
              provides an effective process for organizing and delivering all
              elements necessary before work is started, to enable craft persons
              to perform quality work in a safe, effective and efficient manner.
              Our objective is simple: to provide the people, processes and
              technology that will enable a world class AWP capability to our
              clients and partners.
            </p>
          </div>
        </Wrapper>
      </section>
      <section className="min-h-screen bg-zinc-200 py-20">
        <Wrapper className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <p className="text-sky-600 text-xl mb-4">Who we are - Our Values</p>
            <p className="text-indigo-950 text-4xl font-semibold mb-6">
              We are pioneers, constantly in motion to advance our industry..
            </p>
            <div className="text-zinc-700 space-y-4">
              <p>
                We think and act in progressive ways, to improve efficiency,
                collaboration and information visibility on major capital
                projects.This is not only our promise, but the core of our DNA.
              </p>
              <p>We are the sum of our people and each of our stakeholders.</p>
              <p>
                We are each ground-breakers; pushing forward our persistence,
                proactivity and vision.
              </p>
              <p>
                We are agile, nothing is set in stone. Our constant advancement
                is the backbone of our efficiency, intelligence and innovation.
              </p>
              <p>We are WorkPacks.</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div
                className="p-8 bg-white text-center shadow-md shadow-zinc-600"
                key={idx}
              >
                <p className="text-zinc-800 text-2xl mb-4">{item.title}</p>
                <p className="text-zinc-700 text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      <SectionFreeDemo />
    </main>
  );
}
