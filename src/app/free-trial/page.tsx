import Wrapper from "@/features/Wrapper";
import Image from "next/image";
import React from "react";

export default function FreeTrialPage() {
  return (
    <main>
      <section className="py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-900 to-sky-950 relative overflow-x-clip">
        <div className="wave absolute left-0 right-0 bottom-0 min-w-[1000px] bg-zinc-200 z-10 h-10" />
        <Wrapper className="text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Try WorkPacks with a 30-day Trial
          </p>
          <p className="font-medium mb-4">
            Start building IWPs instantaneously .. not in days and months.
          </p>
          <div className="w-full aspect-video relative">
            <Image
              src="/Image-for-Trial-Period-scaled-1.webp"
              alt="free-trial-preview"
              fill
              className="object-contain object-center"
            />
          </div>
        </Wrapper>
      </section>
      <section className="lg:p-20 bg-zinc-200">
        <Wrapper className="flex flex-col lg:flex-row items-stretch lg:items-start gap-10">
          <div className="flex-1 py-10 relative z-0">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gradient-to-br from-indigo-300/40 to-transparent rounded-full -z-10"></div>
            <div className="text-5xl font-semibold text-sky-900">
              <p>Expertise you need.</p>
              <p>Service you deserve.</p>
            </div>
            <p className="text-zinc-950 text-xl my-6">
              Get your access to the most scalable, affordable and complete AWP
              solution.
            </p>
            <div className="flex flex-col md:flex-row items-stretch gap-4 text-center">
              <div className="p-4 space-y-2 border-[1px] border-zinc-100 bg-white">
                <p className="text-sky-900 font-semibold text-6xl">150+</p>
                <p className="text-sky-900 font-medium text-xl">
                  Combined Years of Experience
                </p>
                <p className="text-zinc-600">
                  Designing, implementing, and managing AWP-associated systems
                  for global, Fortune 100 firms.
                </p>
              </div>
              <div className="p-4 space-y-2 border-4 border-zinc-100">
                <p className="text-sky-900 font-semibold text-6xl">$24B+</p>
                <p className="text-sky-900 font-medium text-xl">
                  Giga Projects
                </p>
                <p className="text-zinc-600">
                  Our WorkPacks solution has been deployed on projects with a
                  total cumulative value of 24+ Billion Dollars.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-300 flex-1 p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  First Name
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Last Name
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
                  Company
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Country
                </label>
                <input type="text" className="bg-zinc-100 text-black p-2" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-zinc-700 font-bold">
                  Work Title
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
            <div className="text-zinc-800 font-medium">
              <p className="text-zinc-900 font-semibold text-xl">
                What is your Primary Interest?
              </p>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Testing the Product</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Creating Packages</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Constraints Management</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Data Integration</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Status Visualization</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Path of Construction</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">4D Simulation</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Change Management</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">AWP Digital Threads</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Dashboard</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label htmlFor="">Portofolio Management</label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-900 font-semibold text-base">
                Additional Interests and Information
              </label>
              <textarea />
            </div>
            <div className="flex">
              <button className="btn-blue mx-auto mt-8">Send</button>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
