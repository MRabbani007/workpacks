import SolutionsHero from "@/features/SolutionsHero";
import { SOLUTION_ITEMS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SolutionPage() {
  return (
    <div>
      <SolutionsHero
        title="WorkPacks scalable projects framework"
        image="/POC-slide01.png"
      />
      <section className="py-20">
        <div className="max-w-[80vw] mx-auto flex items-stretch justify-center gap-6">
          {SOLUTION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col p-4 hover:shadow-md hover:shadow-zinc-700 duration-200 gap-2"
            >
              <div className="relative h-[200px]">
                <Image
                  src={item.image}
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="text-sky-900 font-semibold">{item.title}</p>
              <p className="text-zinc-700 text-sm flex-1">{item.detail}</p>
              <Link href={item.url} className="btn-blue w-fit mx-auto">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
