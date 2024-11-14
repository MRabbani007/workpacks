import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import Wrapper from "./Wrapper";

export default function Navbar() {
  return (
    <nav className="lg:py-6 lg:px-0 absolute top-0 left-0 right-0">
      <Wrapper className="flex items-center justify-center gap-4">
        <Link href="/" className="">
          <Image
            src="/logo-white.png"
            alt="Work Packs"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-4 mx-auto">
          <Link href="/" className="hover:text-orange-300 duration-200">
            Home
          </Link>
          <Link
            href="/workpacks-solution"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            WorkPacks Solution
            <FaChevronDown size={10} className="text-blue-400" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            Customers
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            Resources
            <FaChevronDown size={10} className="text-blue-400" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            News
            <FaChevronDown size={10} className="text-blue-400" />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            Company
            <FaChevronDown size={10} className="text-blue-400" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button className="btn-blue">Login</button>
          <button className="btn-blue">Book a Demo</button>
        </div>
        <button className="ml-auto btn-blue block lg:hidden">
          <CgMenuRight size={25} />
        </button>
      </Wrapper>
    </nav>
  );
}
