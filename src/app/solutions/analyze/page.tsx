import CardStatistics from "@/features/CardStatistics";
import SectionFeatures from "@/features/SectionFeatures";
import SectionFreeDemo from "@/features/SectionFreeDemo";
import SectionRequestTrial from "@/features/SectionRequestTrial";
import SolutionsHero from "@/features/SolutionsHero";
import Wrapper from "@/features/Wrapper";
import { ANALYZE_FEATURES_P, ANALYZE_FEATURES_T } from "@/lib/data_features";
import Image from "next/image";
import React from "react";

export default function WorkpacksAnalyzePage() {
  return (
    <main className="space-y-0 bg-zinc-300">
      <SolutionsHero
        title="WorkPacks Analyze™"
        subtitle="Transforming Data into Decisions!"
        image="/Laptop-Mockup-Analyze-silver.png"
      />
      <div className="bg-gradient-to-b from-zinc-300 to-white min-h-[20vh] z-0 mt-8 relative w-full">
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
                <p className="text-zinc-800 font-medium text-xl m-6 text-center">
                  The new scalable solution for applying AWP to operating
                  facilities
                </p>
              </div>
              <div className="p-8 flex-1 shadow-md shadow-zinc-600 bg-white">
                <p className="text-xl md:text-2xl font-medium text-zinc-800">
                  WorkPacks Analyze enables you to effectively manage your
                  implementation progress by providing PowerBI dashboard reports
                  and status visualizations.
                </p>
                <div className="my-6 flex flex-wrap gap-4 justify-end">
                  <button className="btn-blue">Book Your Demo</button>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper className="opacity-0 pointer-events-none">
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
              <p className="text-zinc-800 font-medium text-xl m-6 text-center">
                The new scalable solution for applying AWP to operating
                facilities
              </p>
            </div>
            <div className="p-8 flex-1 shadow-md shadow-zinc-600 bg-white">
              <p className="text-xl md:text-2xl font-medium text-zinc-800">
                WorkPacks Analyze enables you to effectively manage your
                implementation progress by providing PowerBI dashboard reports
                and status visualizations.
              </p>
              <div className="my-6 flex flex-wrap gap-4 justify-end">
                <button className="btn-blue">Book Your Demo</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <SectionFeatures
        text={ANALYZE_FEATURES_T}
        points={ANALYZE_FEATURES_P}
      ></SectionFeatures>
      <SectionRequestTrial />
      <SectionFreeDemo />
    </main>
  );
}
