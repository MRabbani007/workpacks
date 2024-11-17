import TrainingCarrousel from "@/features/TrainingCarrousel";
import Wrapper from "@/features/Wrapper";
import FormLearnMore from "@/features/forms/FormLearnMore";
import Image from "next/image";
import React from "react";

const END_USER = [
  { title: "4D Path of Construction", url: "#learn_more" },
  { title: "Work Packaging", url: "#learn_more" },
  { title: "Constraint Management", url: "#learn_more" },
  { title: "Status Visualization", url: "#learn_more" },
];

const DATA_ADMIN = [
  { title: "Digital Threads", url: "#learn_more" },
  { title: "Data Management", url: "#learn_more" },
  { title: "Data Integration", url: "#learn_more" },
  { title: "Change Management", url: "#learn_more" },
  { title: "Common Data Environment", url: "#learn_more" },
];

export default function TrainingCertificationsPage() {
  return (
    <main>
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 flex items-center justify-center relative overflow-x-clip">
        <div className="wave absolute left-0 right-0 bottom-0 min-w-[1000px] bg-white z-10 h-10" />
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Partnerships
        </p>
      </section>
      <section className="min-h-screen flex items-center py-20">
        <Wrapper className="shadow-lg shadow-zinc-800 flex flex-col">
          <div className="flex items-start gap-10 p-10">
            <div className="relative size-[300px]">
              <Image
                src="/Badges-End-User-v3-768x768.webp"
                alt="badges end user"
                fill
                className="object-cover inset-0 object-center "
              />
            </div>
            <div className="text-zinc-900 space-y-6 flex-1">
              <p className="text-4xl font-bold">WorkPacks Certified End User</p>
              <p>
                The WorkPacks End User certification is designed for
                professionals engaged in capital projects worldwide, including
                those in AWP, Project Controls, Engineering, Procurement,
                Construction, and Owner roles. This certification demonstrates
                that an individual has mastered the daily work processes,
                features, and functionalities of WorkPacks, the modern SaaS
                solution for Advanced Work Packaging.
              </p>
              <p>
                Our learning path for WorkPacks End User Certification offers a
                high level of flexibility, allowing individuals to tailor their
                certification to their areas of interest and AWP work processes.
                The certification program includes lecture-based coaching,
                robust AWP training modules linked to key work processes, and
                in-depth, hands-on workshops to ensure users master and optimize
                their use of WorkPacks.
              </p>
              <p className="text-4xl font-bold">Achievable Skills</p>
            </div>
          </div>
          <TrainingCarrousel items={END_USER} />
        </Wrapper>
      </section>
      <section className="min-h-screen flex items-center py-20">
        <Wrapper className="shadow-lg shadow-zinc-800 flex flex-col">
          <div className="flex items-start gap-10 p-10">
            <div className="text-zinc-900 space-y-6 flex-1">
              <p className="text-4xl font-bold">
                WorkPacks Delta Certified Data Admin Badge​
              </p>
              <p>
                The WorkPacks Delta Certified Data Admin certification is
                designed for AWP IT/IM personnel worldwide engaged in capital
                projects and focused on administering the AWP Solution. This
                certification demonstrates that an individual has mastered the
                ability to administrate WorkPacks Delta, the data integration
                platform that powers WorkPacks.
              </p>
              <p>
                Our learning path for WorkPacks Delta admin training offers a
                high level of flexibility, allowing users to tailor their
                training to their specific AWP work processes and needs. The
                certification program includes lecture-based coaching, robust
                data admin training modules linked to key AWP work processes,
                and in-depth, hands-on workshops to ensure users master and
                optimize the use and automation of WorkPacks Delta.
              </p>
              <p className="text-4xl font-bold">Achievable Skills</p>
            </div>
            <div className="relative size-[300px]">
              <Image
                src="/Badges-Data-Admin-v2.2.png"
                alt="badges data admin"
                fill
                className="object-cover inset-0 object-center "
              />
            </div>
          </div>
          <TrainingCarrousel items={DATA_ADMIN} />
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
