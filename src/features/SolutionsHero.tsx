import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="min-h-[80vh] lg:rounded-br-[100px] bg-gradient-to-br from-sky-800 to-sky-950 flex items-center">
      <Wrapper className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-0 py-20 ">
        <div className="flex-1">
          <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 md:mb-6">
            {title}
          </p>
          {subtitle && (
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
              {subtitle}
            </p>
          )}
          <Link href={"/#demo"} className="btn-blue">
            Talk to an Expert
          </Link>
        </div>
        <div className="relative w-[370px] md:w-[600px] h-[300px] md:h-[430px]">
          <Image
            src={image}
            alt="image"
            fill
            className="object-contain object-center"
          />
        </div>
      </Wrapper>
    </section>
  );
}
