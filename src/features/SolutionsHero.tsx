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
    <section className="min-h-[80vh] rounded-br-[100px] bg-gradient-to-br from-sky-800 to-sky-950 flex items-center">
      <Wrapper className="flex items-center justify-center gap-0">
        <div className="flex-1">
          <p className="text-6xl font-extrabold mb-6">{title}</p>
          {subtitle && (
            <p className="text-4xl font-semibold mb-6">{subtitle}</p>
          )}
          <Link href={"/#demo"} className="btn-blue">
            Talk to an Expert
          </Link>
        </div>
        <div className="relative w-[600px] h-[430px]">
          <Image
            src={image}
            alt="image"
            fill
            className="object-cover object-center"
          />
        </div>
      </Wrapper>
    </section>
  );
}
