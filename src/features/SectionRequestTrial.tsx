import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

export default function SectionRequestTrial() {
  return (
    <section className="min-h-screen py-10">
      <Wrapper className="text-center">
        <p className="text-4xl text-indigo-950 font-semibold mb-4">
          Request a Trial
        </p>
        <p className="text-zinc-600">
          Say goodbye to the expensive and inadequate tools that may “talk the
          talk” but really cannot “walk the walk”.
        </p>
        <p className="text-6xl text-indigo-950 font-bold my-10 mx-10">
          We are on a <span className="text-sky-700">Mission</span> to scale the
          AWP industry in a robust and most affordable way.
        </p>
        <p className="text-xl text-zinc-900">
          Start building IWPs in days.. not months and years.
        </p>
        <p className="text-xl text-zinc-900">
          Get your access to the most scalable, affordable and complete AWP
          solution.
        </p>
        <Link href={"/free-trial"} className="btn-blue mt-6 inline-block">
          Request a Trial
        </Link>
      </Wrapper>
    </section>
  );
}
