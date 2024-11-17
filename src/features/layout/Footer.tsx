import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-sky-800 to-sky-950">
      <Wrapper className="py-10 lg:py-20 flex flex-col sm:flex-row flex-wrap gap-6 md:max-w-[85vw] mx-auto text-sm ">
        <div className="mr-4 flex-1">
          <div className="h-[1px] bg-blue-400/40" />
          <div className="flex lg:flex-nowrap flex-wrap items-center justify-center gap-2 my-6 mx-auto">
            <Image src="/AiCPA-logo.png" alt="AiCPA" width={100} height={100} />
            <Image src="/SOC-2.webp" alt="SOC-2" width={90} height={90} />
            <Image
              src="/Badge_white.png"
              alt="Badge_white"
              width={90}
              height={90}
            />
          </div>
          <div className="h-[1px] bg-blue-400/40" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-4 mt-6">
            <Image src="/logo-white.png" alt="logo" width={100} height={40} />
            <p className="md:border-l-2 border-white md:pl-4">
              The new scalable solution for applying AWP to capital projects.
            </p>
          </div>
        </div>
        <div className="mr-6 flex flex-col gap-2">
          <p className="font-semibold text-2xl mb-4 text-pretty">
            WorkPacks Solution
          </p>
          <Link href="/solutions/plan">WorkPacks Plan™</Link>
          <Link href="/solutions/delta">WorkPacks Delta™</Link>
          <Link href="/solutions/build">WorkPacks Build™</Link>
          <Link href="/solutions/analyze">WorkPacks Analyze™</Link>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-4">Support</p>
          <p>Contact us</p>
          <p>Knowledge Center</p>
          <p>Submit Support Ticket</p>
          <p>FAQs</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-2xl mb-4">Company</p>
          <p>About us</p>
          <p>Leadership</p>
          <p>Partnerships</p>
          <p>Careers</p>
          <p>Pledges & Commitments</p>
          <p>Reforestation Commitment</p>
        </div>
        <div>
          <p className="font-semibold text-2xl mb-4">Links</p>
          <p>Privacy Policy</p>
          <p>SOC 2 Type II</p>
          <p>Information Security Commitment</p>
          <p>Terms and Conditions</p>
          <p>Work From Home (WFH) Policy</p>
          <p>Cookie Policy</p>
        </div>
      </Wrapper>
      <div className="border-t-[1px] mt-4 lg:mt-10 p-6 text-center">
        Copyright © 2024 Work Packs Inc. - All rights reserved.
      </div>
    </div>
  );
}
