"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { DROPDOWN_ITEM } from "../../types";
import { COMPANY_DROPDOWN, NEWS_DROPDOWN, RESOURCE_DROPDOWN } from "@/lib/data";

const SOLUTION_MENU = [
  { label: "WorkPacks Plan", url: "/solutions/plan" },
  { label: "WorkPacks Delta", url: "/solutions/delta" },
  { label: "WorkPacks Build", url: "/solutions/build" },
  { label: "WorkPacks Analyze", url: "/solutions/analyze" },
];

export default function MobileMenu() {
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(-1);

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
        <div className="flex flex-col text-zinc-700">
          <Link
            href="/"
            onClick={() => setShow(false)}
            className="p-2 hover:bg-zinc-200 hover:text-orange-400 duration-200"
          >
            Home
          </Link>
          <Submenu
            label="Workpacks Solution"
            index={1}
            expand={expand}
            setExpand={setExpand}
            setShow={setShow}
            items={SOLUTION_MENU}
          />
          <Link
            href="/customers"
            onClick={() => setShow(false)}
            className="p-2 hover:bg-zinc-200 hover:text-orange-400 duration-200"
          >
            Customers
          </Link>
          <Submenu
            label="Resources"
            items={RESOURCE_DROPDOWN}
            index={2}
            expand={expand}
            setShow={setShow}
            setExpand={setExpand}
          />
          <Submenu
            label="News"
            items={NEWS_DROPDOWN}
            index={3}
            expand={expand}
            setShow={setShow}
            setExpand={setExpand}
          />
          <Submenu
            label="Company"
            items={COMPANY_DROPDOWN}
            index={4}
            expand={expand}
            setShow={setShow}
            setExpand={setExpand}
          />
        </div>
      </div>
    </div>
  );
}

const Submenu = ({
  label,
  items,
  expand,
  index,
  setExpand,
  setShow,
}: {
  label: string;
  items?: DROPDOWN_ITEM[];
  expand: number;
  index: number;
  setExpand: Dispatch<SetStateAction<number>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="">
      <button
        onClick={() => setExpand((curr) => (curr === index ? -1 : index))}
        className="p-2 flex items-center justify-between gap-4 w-full hover:bg-zinc-200 hover:text-orange-400 duration-200"
      >
        <span>{label}</span>
        <FaChevronRight
          className={(expand === index ? "rotate-90" : "") + " duration-200"}
        />
      </button>
      {items && (
        <div
          className={
            (expand === index
              ? `h-[${items.length * 40}px]`
              : "h-0 invisible opacity-0") + " flex flex-col duration-200"
          }
        >
          {items.map((item, idx) => (
            <Link
              href={item.url}
              key={idx}
              onClick={() => setShow(false)}
              className="py-2 px-4 hover:bg-zinc-200 hover:text-orange-400 duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
