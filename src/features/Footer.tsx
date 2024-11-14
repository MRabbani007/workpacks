import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-sky-800 to-sky-950">
      <Wrapper className="py-10 lg:py-20 flex flex-col sm:flex-row flex-wrap gap-6 md:max-w-[85vw] mx-auto text-sm ">
        <div className="mr-4 flex-1">
          <div className="h-[1px] bg-blue-400/40" />
          <div className="flex flex-wrap items-center justify-center gap-6 my-6">
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
          <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-8 mt-6">
            <Image src="/logo-white.png" alt="logo" width={100} height={40} />
            <p className="md:border-l-2 border-white md:pl-6">
              The new scalable solution for applying AWP to capital projects.
            </p>
          </div>
        </div>
        <div className="mr-6">
          <p className="font-semibold text-2xl mb-4 text-pretty">
            WorkPacks Solution
          </p>
          <p>WorkPacks Plan™</p>
          <p>WorkPacks Delta™</p>
          <p>WorkPacks Build™</p>
          <p>WorkPacks Analyze™</p>
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
