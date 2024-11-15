"use client";
import { SOLUTION_ITEMS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function DropDownWP() {
  const [show, setShow] = useState(false);
  return (
    <div className="" onMouseLeave={() => setShow(false)}>
      <Link
        className=" flex items-center gap-2 py-2"
        // onClick={() => setShow((curr) => !curr)}
        href={"/solutions"}
        onMouseEnter={() => setShow(true)}
      >
        <span>WorkPacks Solution</span>
        <FaChevronDown size={10} className="text-blue-400" />
      </Link>
      <div
        className={
          (show ? "" : "-translate-y-4 opacity-0 ") +
          " absolute top-full left-1/2 -translate-x-1/2 w-[80vw] grid grid-cols-4 gap-6 bg-zinc-50 shadow-md shadow-zinc-900 p-6 duration-200"
        }
      >
        {SOLUTION_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
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
            <Link
              href={item.url}
              onClick={() => setShow(false)}
              className="btn-blue w-fit"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
