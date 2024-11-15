import CardStatistics from "@/features/CardStatistics";
import SectionFeatures from "@/features/SectionFeatures";
import SectionFreeDemo from "@/features/SectionFreeDemo";
import SectionRequestTrial from "@/features/SectionRequestTrial";
import SolutionsHero from "@/features/SolutionsHero";
import Wrapper from "@/features/Wrapper";
import { PLANT_FEATURES_P, PLANT_FEATURES_T } from "@/lib/data_features";
import Image from "next/image";
import React from "react";

export default function WorkpacksPlanPage() {
  return (
    <main className="space-y-0">
      <SolutionsHero
        title="WorkPacks Plan™"
        subtitle="KICK-OFF your AWP plan in 1D and 2D!"
        image="/Laptop-Mockup-plan-silver-2048x1365.png"
      />
      <div className="bg-gradient-to-b from-zinc-300 to-white min-h-[20vh] h-[50vh] z-0 mt-8 relative w-full">
        <div className="absolute top-0 left-0 right-0 -translate-y-[10vh]">
          <Wrapper>
            <CardStatistics />
            <div className="flex items-stretch gap-8 flex-col lg:flex-row mt-6">
              <div className="p-8 w-full lg:w-[400px] bg-white shadow-md shadow-zinc-600 flex flex-col items-center justify-center">
                <div className="relative w-[240px] h-[120px]">
                  <Image
                    src="/logo.png"
                    // width={240}
                    // height={120}
                    fill
                    alt="workpacks-logo"
                    className="object-contain object-center"
                  />
                </div>
                <p className="text-zinc-500 font-medium text-xl m-6 text-center">
                  The new scalable solution for applying AWP to operating
                  facilities
                </p>
              </div>
              <div className="p-8 flex-1 shadow-md shadow-zinc-600 bg-white">
                <p className="text-xl md:text-2xl font-medium text-zinc-800">
                  WorkPacks Plan allows your team to engage in the early
                  development of the Path of Construction, well before
                  establishing a 3D model through project work scope
                  definitions, available documents, and simplified 2D
                  visualizations.
                </p>
                <div className="my-6 flex flex-wrap gap-4 justify-end">
                  <button className="btn-blue">Book Your Demo</button>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <SectionFeatures text={PLANT_FEATURES_T} points={PLANT_FEATURES_P} />
      <section className="min-h-screen flex items-center justify-center">
        <Wrapper className="flex items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-dJ5sOGyXos?si=KzlV341uRSUuzVEU"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </Wrapper>
      </section>
      <SectionRequestTrial />
      <SectionFreeDemo />
    </main>
  );
}
