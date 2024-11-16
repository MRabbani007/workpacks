import React, { ReactNode } from "react";
import Wrapper from "./Wrapper";
import { BiCheck } from "react-icons/bi";

export default function SectionFeatures({
  text,
  points,
  children,
}: {
  text: string[];
  points: string[];
  children?: ReactNode;
}) {
  return (
    <section className="flex items-center justify-center py-14 gap-6">
      <Wrapper className="flex gap-6 flex-col md:flex-row ">
        <div className="text-zinc-700 space-y-4 flex-1">
          <p className="text-sky-900 font-semibold text-4xl mt-6">Features</p>
          {text.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
          <div className="space-y-2 mt-6">
            {points.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <BiCheck
                  className="text-white p-0 rounded-full bg-sky-600 shrink-0"
                  size={25}
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex-1 text-zinc-800 font-semibold">{children}</div>
      </Wrapper>
    </section>
  );
}
