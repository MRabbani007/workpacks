"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function MobileMenu() {
  const [show, setShow] = useState(false);
  //   const [expand, setExpand] = useState(-1);

  return (
    <div className="ml-auto lg:hidden">
      <button className="btn-blue" onClick={() => setShow(true)}>
        <CgMenuRight size={25} />
      </button>
      <div
        className={
          (show ? "" : "scale-0 opacity-0") +
          " fixed inset-0 bg-zinc-900/50 duration-100 delay-100 flex items-stretch"
        }
      ></div>
      <div
        className={
          (show ? "" : "-translate-x-full ") +
          "fixed top-0 left-0 bottom-0 bg-zinc-100 max-w-[80vw] sm:max-w-[500px] p-4 w-full delay-100 duration-200"
        }
      >
        <div className="flex items-start justify-between pb-4 mb-4">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
          <button
            onClick={() => setShow(false)}
            className="text-zinc-800 p-2 bg-zinc-300 rounded-md"
          >
            <FaTimes size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-2 text-zinc-700">
          <Link href="/">Home</Link>
          <Link href="/">Workpacks Solution</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Resources</Link>
          <Link href="/">News</Link>
          <Link href="/">Company</Link>
        </div>
      </div>
    </div>
  );
}

// const Submenu = ({ label, items }: { label: string; items: DROPDOWN_ITEM }) => {
//   return <div></div>;
// };
