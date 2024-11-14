import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-4 py-6 max-w-[80vw] mx-auto absolute top-0 left-0 right-0">
      <Image src="/logo-white.png" alt="Work Packs" width={100} height={40} />
      <div className="flex items-center gap-4 mx-auto">
        <Link href="/" className="hover:text-orange-300 duration-200">
          Home
        </Link>
        <Link
          href="/"
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
      <div className="flex items-center gap-4">
        <button className="btn-blue">Login</button>
        <button className="btn-blue">Book a Demo</button>
      </div>
    </nav>
  );
}
