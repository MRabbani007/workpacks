import React from "react";
import Wrapper from "./Wrapper";

export default function SectionSuccessStories() {
  return (
    <section className="min-h-screen p-4 md:p-10 flex items-center">
      <Wrapper className="text-center">
        <p className="text-4xl text-sky-900 font-semibold mb-8">
          Success Stories
        </p>
        <div className="flex flex-wrap items-stretch gap-6 text-zinc-700">
          <div className="p-6 bg-zinc-200 rounded-sm flex-1 min-w-[300px]">
            <p>
              “Real success in AWP requires planning for construction work
              packaging from the very beginning of the Engineering and
              Procurement part of the project. Historically, we’ve faced
              challenges due to a lack of availability of useful EP tools
              connecting engineering and procurement systems and data to
              implement AWP in the construction process. With the WorkPacks EP
              See™ Module, we finally have a seamless way of linking those
              processes. This is going to save us so much time and money.”
            </p>
            <p className="text-sky-800 mt-4 font-semibold">EPC IT Director</p>
          </div>
          <div className="p-6 bg-zinc-200 rounded-sm flex-1 min-w-[300px]">
            <p>
              “In 2018 our organization committed to deploying AWP on new
              construction and turn-around projects. We selected WorkPacks for
              use on a trial basis on a single small turn-around site the
              following year. The results in terms of avoiding project delay and
              increased granular visibility into project status really exceeded
              expectations. We’re now rolling out the WorkPacks Solution
              Globally at all our Regional Project Offices.”
            </p>
            <p className="text-sky-800 mt-4 font-semibold">
              Construction Technical Services Manager, International Oil Major
            </p>
          </div>
          <div className="p-6 bg-zinc-200 rounded-sm flex-1 min-w-[300px]">
            <p>
              “Everybody says they’re scalable. WorkPacks really does it. We
              rolled out the WorkPacks software on three giga-projects globally
              simultaneously. I honestly wasn’t expecting things to go so
              smoothly. Kudos to the WorkPacks team.”
            </p>
            <p className="text-sky-800 mt-4 font-semibold">
              EPC Digital Transformation Director, CEO Lokamart
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
