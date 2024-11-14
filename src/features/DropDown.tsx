"use client";
import React, { useState } from "react";
import { DROPDOWN_ITEM } from "../../types";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function DropDown({
  trigger,
  items,
}: {
  trigger: string;
  items: DROPDOWN_ITEM[];
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setShow(false)}>
      <button
        className=" flex items-center gap-2 py-2"
        // onClick={() => setShow((curr) => !curr)}
        onMouseEnter={() => setShow(true)}
      >
        {trigger}
        <FaChevronDown size={10} className="text-blue-400" />
      </button>
      <div
        className={
          (show ? "" : "-translate-y-4 opacity-0 ") +
          " absolute top-full left-0 flex flex-col bg-zinc-50"
        }
      >
        {items.map((item, idx) => (
          <Link
            href={item.url}
            key={idx}
            onClick={() => setShow(false)}
            className="py-2 px-4 text-zinc-800 hover:bg-zinc-200 hover:text-orange-400 duration-200"
          >
            <span className="text-nowrap">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
