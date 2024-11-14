import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";
import MobileMenu from "./MobileMenu";
import { COMPANY_DROPDOWN, NEWS_DROPDOWN, RESOURCE_DROPDOWN } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="lg:py-6 lg:px-0 absolute top-0 left-0 right-0 z-50">
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
            href="/customers"
            className="flex items-center gap-2 hover:text-orange-300 duration-200"
          >
            Customers
          </Link>
          <DropDown trigger="Resources" items={RESOURCE_DROPDOWN} />
          <DropDown trigger="News" items={NEWS_DROPDOWN} />
          <DropDown trigger="Resources" items={COMPANY_DROPDOWN} />
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button className="btn-blue">Login</button>
          <button className="btn-blue">Book a Demo</button>
        </div>
        <MobileMenu />
      </Wrapper>
    </nav>
  );
}
