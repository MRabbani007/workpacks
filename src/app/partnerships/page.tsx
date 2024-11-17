import Wrapper from "@/features/Wrapper";
import FormLearnMore from "@/features/forms/FormLearnMore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

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
      <section className="min-h-screen bg-sky-700 flex items-center py-10">
        <Wrapper>
          <div className="flex items-start gap-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="relative size-[200px]">
                <Image
                  src="/AWP_University_logo.jpg"
                  alt="AWP University"
                  fill
                  className="object-cover inset-0"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-4xl font-bold">AWP Training</p>
              <p>
                As an integral component of the Jovian Ventures ecosystem, AWP
                University collaborates closely with WorkPacks, complementing
                its advanced work packaging solutions. AWP University offers
                both direct-to-consumer and corporate training solutions, being
                the first to introduce genuine role-based AWP training within
                the industry. As a leading provider of comprehensive AWP
                awareness training, AWP University uniquely caters to the
                individual needs of each participant.
              </p>
              <Link
                href="https://ccteglobal.com"
                className="btn-blue inline-block"
                target="_blank"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 flex gap-8">
            <div className="border-2 border-white p-6 bg-sky-400/30">
              <p className="text-3xl font-semibold mb-6">Role-Based Mastery</p>
              <p>
                AWP University's industry-leading role-based training through
                modularized program, features over 60 modules tailored to
                specific roles within AWP implementation. The learning paths are
                designed to address individual needs, equipping students with
                in-depth knowledge on how to apply AWP principles in their
                professional roles.
              </p>
            </div>
            <div className="border-2 border-white p-6 bg-sky-400/30">
              <p className="text-3xl font-semibold mb-6">
                Comprehensive AWP Training
              </p>
              <p>
                AWP University offers personalized and corporate AWP training
                solutions to drive career advancement and enhance corporate
                learning programs. Drawing from 20 years of AWP implementation
                expertise, our course materials act as the ultimate AWP Rosetta
                Stone, unlocking success for individuals and organizations
                alike.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="min-h-screen flex items-center">
        <Wrapper>
          <p className="text-indigo-900 text-center text-4xl font-semibold">
            OUR PARTNERS
          </p>
          <FaUsers size={50} className="text-sky-900 mx-auto mt-4" />
          <p className="text-zinc-800 text-2xl mt-6 text-center">
            WorkPacks proudly partners with innovative leaders in advanced work
            packaging and lean industry to revolutionize capital delivery
          </p>
        </Wrapper>
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
