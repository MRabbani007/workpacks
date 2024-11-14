import Accordion from "@/features/Accordion";
import { INDUSTRY_GENERAL_KNOWLEDGE, WORKPACKS_FAQ } from "@/lib/data";
import Image from "next/image";
import { FaChartBar, FaRegFileAlt } from "react-icons/fa";
import {
  FaArrowRightArrowLeft,
  FaChartLine,
  FaCode,
  FaFilterCircleDollar,
  FaHandsAslInterpreting,
  FaMapLocation,
} from "react-icons/fa6";

const items = [
  {
    icon: <FaChartBar className="text-yellow-400" size={35} />,
    title: "Enterprise Analytics",
    detail:
      "Portfolio level and Project specific reports and KPI’s to optimize productivity, predictability, and safety!",
  },
  {
    icon: <FaArrowRightArrowLeft className="text-green-600" size={35} />,
    title: "Change Management",
    detail:
      "Advanced change management with detailed history tracking and delta differentials on all project deliverables in real-time, at any time.",
  },
  {
    icon: <FaMapLocation className="text-sky-500" size={35} />,
    title: "Planning",
    detail:
      "From Early path Construction Planning to Detailed Short Range Production Planning, WorkPacks has it all!",
  },
  {
    icon: <FaHandsAslInterpreting className="text-rose-500" size={35} />,
    title: "Integrations",
    detail:
      "Seamless integrations built upon CII’s best practice of AWP Digital Threads.",
  },
  {
    icon: <FaCode className="text-lime-600" size={35} />,
    title: "Low Code to No Code Solutions Flows",
    detail:
      "Data flows configured to run automatically on a routine basis pre-configured for AWP work processes.",
  },
  {
    icon: <FaRegFileAlt className="text-indigo-600" size={35} />,
    title: "Next Gen Package Templates",
    detail:
      "Batch publish intelligent Work Package templates with auto-generated package content!",
  },
  {
    icon: <FaChartLine className="text-blue-800" size={35} />,
    title: "Trully Scallable",
    detail:
      "From small cap to the world’s largest giga-projects, WorkPacks is easy to deploy and scales based on your needs.",
  },
  {
    icon: <FaFilterCircleDollar className="text-green-800" size={35} />,
    title: "Affordable",
    detail:
      "Enterprise pricing for unlimited use across all projects, or project specific pricing based on TIC.",
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="min-h-[90vh] bg-gradient-to-b from-sky-900 to-sky-950 flex items-center justify-center">
        <div className="max-w-[80vw] mx-auto flex items-center gap-6 h-full">
          <div className="flex-1">
            <p className="text-6xl font-extrabold mb-6">
              Where innovation meets experience.
            </p>
            <p className="text-xl">
              WorkPacks is the Digital Construction Planning solution and
              Advanced Work Packaging software of choice for the world&apos;s
              largest Giga projects. Supporting the AWP process, it is trusted
              by the world&apos;s largest owners for site work in their existing
              facilities and utilized by the world&apos;s leading EPC
              contractors.
            </p>
            <button className="btn-blue mt-6">Request a Trial</button>
          </div>
          <div className="flex-1 relative min-h-[400px] shrink-0">
            <Image
              src="/Home-WorkPacks.webp"
              alt="hero-image"
              fill
              className="inset-0"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-14 gap-6">
        <div className="max-w-[80vw] mx-auto flex items-stretch gap-8">
          <div className="p-8 w-[400px] shadow-md shadow-zinc-600 flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              width={150}
              height={70}
              alt="workpacks-logo"
            />
            <p className="text-zinc-500 font-medium text-xl m-6 text-center">
              The new scalable solution for achieving a Construction Digital
              Twin.
            </p>
          </div>
          <div className="p-8 flex-1 shadow-md shadow-zinc-600">
            <p className="text-4xl font-semibold text-sky-900">
              The modern Advanced Work Packaging platform for delivering safe,
              productive projects
            </p>
            <div className="space-x-6 my-6">
              <button className="btn-blue">Book Your Demo</button>
              <button className="btn-blue">
                Access our Award wining case study
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <div className="max-w-[80vw] mx-auto flex items-center gap-6">
          <div className="flex-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/to8cASHoiV8?si=fi649C8McJCwYrZu"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="flex-1">
            <p className="text-sky-950 font-semibold text-2xl mb-4">
              Join us for a quick look into the future of work packaging!
            </p>
            <p className="text-sky-900 mb-4">
              WorkPacks™ software helps our clients efficiently pre-plan,
              create, and track work packages with our web-based work package
              management software, offering digital work packaging solutions.
              Our system streamlines the process for engineering work packages,
              construction work packages, and installation work packages. We’re
              proud to offer one of the best advanced work packaging solutions
              in the market, capable of catering to projects of all types and
              sizes. WorkPacks, through its Delta Functionalities, integrates
              with all 3rd party solutions on the market. Through planning,
              integrating, managing and visualizing, with WorkPacks™,
              establishing a successful AWP program is not just achievable but
              also straightforward.
            </p>
            <button className="btn-blue">Watch More</button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[80vw] mx-auto bg-gradient-to-b from-sky-800 to-transparent via-sky-800/70 p-6">
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <Image
                src="/MicrosoftTeams-image-2.png"
                alt="Workpacks delta"
                height={50}
                width={170}
                className="w-[400px] h-auto"
              />
              <p className="text-pretty">
                WorkPacks Delta connects information and project stakeholders
                across vendor point solutions, engineering platforms and
                construction automation tools based upon AWP Best Practices
              </p>
            </div>
            <div className="w-[400px] h-[300px] relative">
              <Image
                src="/WorkPacks-Delta-2048x1633.webp"
                alt="Microsoft teams"
                fill
              />
            </div>
          </div>
          <div>
            <p className="text-sky-950 text-center">
              WorkPacks Delta comes with a configurable{" "}
              <span className="p-2 bg-sky-900 text-white font-medium">
                Neo Flow Solution
              </span>{" "}
              for your capital project(s)
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-sky-800 flex flex-col">
        <div className="max-w-[80vw] mx-auto flex-1 flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold mb-8 text-center text-balance">
            We commit to our responsibilities to drive successful partnerships
          </p>
          <div className="flex gap-6 w-full">
            <div className="border-2 border-white rounded-sm py-6 px-10 flex-1 text-center">
              <p className="text-4xl font-bold">$24 Billion+</p>
              <p className="text-xl m-4 font-medium">
                Deployed on projects with a cumulative value of
              </p>
            </div>
            <div className="border-2 border-white rounded-sm py-6 px-10 flex-1 text-center">
              <p className="text-4xl font-bold">10+ Industries</p>
              <p className="text-xl m-4 font-medium">in 10 countries</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-zinc-300 to-white h-[20vh] relative">
          <div className="absolute top-0 left-0 right-0 -translate-y-1/2 p-10 bg-white shadow-md shadow-zinc-600 max-w-[80vw] mx-auto flex items-center">
            <div className="text-center space-y-2 flex-1">
              <p className="text-sky-700 font-extrabold text-4xl">40+</p>
              <p className="text-zinc-600 font-medium">Certified Experts</p>
            </div>
            <div className="text-center space-y-2 flex-1">
              <p className="text-sky-700 font-extrabold text-4xl">150+</p>
              <p className="text-zinc-600 font-medium">
                Combined Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 bg-gradient-to-l from-zinc-500/70 to-zinc-200 via-zinc-300/50 my-10">
        <div className="max-w-[80vw] mx-auto">
          <p className="text-4xl font-semibold text-sky-950 max-w-[500px] mb-6">
            The Award Winning Results on the Largest LNG Projects in the World
          </p>
          <button className="btn-blue">
            Access Our Award Wining Case Study
          </button>
        </div>
      </section>
      <section className="p-20">
        <div className="max-w-[80vw] mx-auto">
          <p className="text-blue-900 mb-4 text-center">What we do</p>
          <p className="text-sky-950 text-4xl font-bold text-center">
            Listening to you, and answering{" "}
          </p>
          <p className="text-sky-950 text-4xl font-bold text-center">
            with software
          </p>
          <div className="grid grid-cols-4 gap-6 mt-10">
            {items.map((item, idx) => (
              <div className="p-4 border-[1px] border-zinc-200">
                {item?.icon ?? null}
                <p className="text-2xl font-semibold text-zinc-900 my-2">
                  {item.title}
                </p>
                <p className="text-zinc-600 text-balance">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[80vw] mx-auto">
          <p className="text-sky-950 font-semibold text-4xl text-center">
            WorkPacks is a Software Solution{" "}
            <span className="text-sky-400">Certified</span> by AICPA's SOC2 Type
            II
          </p>
          <div className="flex items-center justify-center gap-10">
            <div className="relative h-[300px] w-[300px]">
              <Image
                src="/AiCPA-logo.png"
                alt="AICPA Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[250px] w-[250px]">
              <Image
                src="/SOC-2.webp"
                alt="AICPA SOC-2"
                fill
                className="object-contain absolute"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-[80vw] mx-auto flex flex-col items-center justify-center">
          <p className="text-sky-900 font-semibold text-2xl mt-6">
            INDUSTRY / GENERAL KNOWLEDGE
          </p>
          <div className="h-2 w-[400px] relative bg-zinc-800 my-4">
            <div className="w-[50%] h-full bg-blue-500"></div>
          </div>
          <button className="btn-blue mb-6">Frequently Asked Questions</button>
          <Accordion items={INDUSTRY_GENERAL_KNOWLEDGE} />
          <p className="text-sky-900 font-semibold text-2xl mt-6">
            MEET WORKPACKS
          </p>
          <div className="h-2 w-[400px] relative bg-zinc-800 my-4">
            <div className="w-[50%] h-full bg-blue-500"></div>
          </div>
          <button className="btn-blue mb-6">Frequently Asked Questions</button>
          <Accordion items={WORKPACKS_FAQ} />
        </div>
      </section>
      <section className="bg-sky-800 min-h-screen p-10 flex items-center">
        <div className="max-w-[80vw] mx-auto flex flex-col items-center justify-center flex-1">
          <p className="text-5xl font-semibold mb-4">
            Get a Free Demo from our experts
          </p>
          <p>
            Get your access to the most scalable, affordable and complete AWP
            solution.
          </p>
          <div className="bg-white p-10 w-[70%] mt-10">
            <div className="grid grid-cols-2 gap-8">
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
              <button className="btn-blue mx-auto mt-8">Get a Free Demo</button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen p-10 flex items-center">
        <div className="max-w-[80vw] mx-auto text-center">
          <p className="text-4xl text-sky-900 font-semibold mb-8">
            Success Stories
          </p>
          <div className="flex items-stretch gap-6 text-zinc-700">
            <div className="p-6 bg-zinc-200 rounded-sm flex-1">
              <p>
                “Real success in AWP requires planning for construction work
                packaging from the very beginning of the Engineering and
                Procurement part of the project. Historically, we’ve faced
                challenges due to a lack of availability of useful EP tools
                connecting engineering and procurement systems and data to
                implement AWP in the construction process. With the WorkPacks EP
                See™ Module, we finally have a seamless way of linking those
                processes. This is going to save us so much time and money.”
              </p>
              <p className="text-sky-800 mt-4 font-semibold">EPC IT Director</p>
            </div>
            <div className="p-6 bg-zinc-200 rounded-sm flex-1">
              <p>
                “In 2018 our organization committed to deploying AWP on new
                construction and turn-around projects. We selected WorkPacks for
                use on a trial basis on a single small turn-around site the
                following year. The results in terms of avoiding project delay
                and increased granular visibility into project status really
                exceeded expectations. We’re now rolling out the WorkPacks
                Solution Globally at all our Regional Project Offices.”
              </p>
              <p className="text-sky-800 mt-4 font-semibold">
                Construction Technical Services Manager, International Oil Major
              </p>
            </div>
            <div className="p-6 bg-zinc-200 rounded-sm flex-1">
              <p>
                “Everybody says they’re scalable. WorkPacks really does it. We
                rolled out the WorkPacks software on three giga-projects
                globally simultaneously. I honestly wasn’t expecting things to
                go so smoothly. Kudos to the WorkPacks team.”
              </p>
              <p className="text-sky-800 mt-4 font-semibold">
                EPC Digital Transformation Director, CEO Lokamart
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
