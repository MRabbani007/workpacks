import Wrapper from "@/features/Wrapper";
import React from "react";

export default function CareerPage() {
  return (
    <main className="bg-zinc-200 space-y-0">
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 rounded-br-[100px] flex items-center justify-center">
        <p className="text-6xl font-extrabold text-white">
          Like to Join WorkPacks Team?
        </p>
      </section>
      <section className="py-20 min-h-screen">
        <Wrapper>
          <p className="text-4xl text-indigo-950 font-semibold text-center">
            Fill this form and we will get in touch with you
          </p>
          <div className="bg-white p-4 lg:p-10 lg:w-[70%] mt-10 w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Your Name
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Company Name
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Phone Number
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Email
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Job Title
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Company Type
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
            </div>
            <div className="flex">
              <button className="btn-blue mx-auto mt-8">Send Message</button>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
