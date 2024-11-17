"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function TrainingCarrousel({
  items,
}: {
  items: { title: string; url: string }[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-sky-800 p-10 flex flex-col gap-6 items-center relative">
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2"
        onClick={() =>
          setIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1))
        }
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={() =>
          setIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1))
        }
      >
        <FaChevronRight size={30} />
      </button>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-zinc-400 flex items-center ">
        {Array.from({ length: items.length }, (_, i) => (
          <GoDotFill
            size={20}
            className={(i === index ? "text-white" : "") + " duration-200"}
            key={i}
          />
        ))}
      </div>
      <p className="text-4xl font-bold">{items[index].title}</p>
      <Link href={items[index].url} className="py-2 px-4 border-2 border-white">
        Learn More
      </Link>
    </div>
  );
}
