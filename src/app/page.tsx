import Accordion from "@/features/Accordion";
import CardStatistics from "@/features/CardStatistics";
import CardStatisticsContainer from "@/features/CardStatisticsContainer";
import SectionFreeDemo from "@/features/SectionFreeDemo";
import SectionSuccessStories from "@/features/SectionSuccessStories";
import Wrapper from "@/features/Wrapper";
import { INDUSTRY_GENERAL_KNOWLEDGE, WORKPACKS_FAQ } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
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
      <section className="min-h-[90vh] bg-gradient-to-b from-sky-900 to-sky-950 flex items-center justify-center pt-32 relative z-0 overflow-x-clip">
        <div className="wave absolute left-0 right-0 bottom-0 min-w-[1000px] bg-white z-10 h-10" />
        <div className="absolute opacity-40 top-[100px] left-[30vw] size-[50px] bg-gradient-to-br from-indigo-600/30 to-indigo-500/10 shadow-[0_0_200px_50px] shadow-indigo-600 z-20 rounded-full" />
        <Wrapper className="flex items-center justify-center gap-6 h-full flex-col lg:flex-row z-20">
          <div className="flex-1 space-y-6">
            <p className="sm:text-5xl md:text-6xl text-4xl font-extrabold">
              Where innovation meets experience.
            </p>
            <p className="text-sm sm:text-base md:text-xl">
              WorkPacks is the Digital Construction Planning solution and
              Advanced Work Packaging software of choice for the world&apos;s
              largest Giga projects. Supporting the AWP process, it is trusted
              by the world&apos;s largest owners for site work in their existing
              facilities and utilized by the world&apos;s leading EPC
              contractors.
            </p>
            <Link href="/free-trial" className="btn-blue inline-block">
              Request a Trial
            </Link>
          </div>
          <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px]">
            <Image
              src="/Home-WorkPacks.webp"
              alt="hero-image"
              fill
              className="inset-0"
            />
          </div>
        </Wrapper>
      </section>
      <section className="flex items-center justify-center py-14 gap-6">
        <Wrapper className="flex items-stretch gap-8 flex-col lg:flex-row">
          <div className="p-8 w-full lg:w-[400px] shadow-md shadow-zinc-600 flex flex-col items-center justify-center">
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
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-900">
              The modern Advanced Work Packaging platform for delivering safe,
              productive projects
            </p>
            <div className="my-6 flex flex-wrap gap-4 justify-center">
              <Link href={"/#demo"} className="btn-blue">
                Book Your Demo
              </Link>
              <button className="btn-blue">
                Access our Award wining case study
              </button>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="py-8">
        <Wrapper className="flex items-center gap-6 flex-col lg:flex-row">
          <div className="">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/to8cASHoiV8?si=fi649C8McJCwYrZu"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen={true}
              className="w-[350px] sm:w-[400px] md:w-[500px] lg:[600px] aspect-video"
            ></iframe>
          </div>
          <div className="">
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
            <Link
              href={"https://www.youtube.com/@WorkPacks"}
              target="_blank"
              className="btn-blue mx-auto lg:mx-none"
            >
              Watch More
            </Link>
          </div>
        </Wrapper>
      </section>
      <section className="py-10 lg:py-20">
        <Wrapper className="bg-gradient-to-b from-sky-800 to-transparent via-sky-800/70">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6">
            <div className="flex-1 flex flex-col gap-4">
              <Image
                src="/MicrosoftTeams-image-2.png"
                alt="Workpacks delta"
                height={50}
                width={170}
                className="max-w-[250px] md:max-w-none md:w-[400px] w-full h-auto"
              />
              <p className="text-pretty">
                WorkPacks Delta connects information and project stakeholders
                across vendor point solutions, engineering platforms and
                construction automation tools based upon AWP Best Practices
              </p>
            </div>
            <div className="w-[300px] md:w-[400px] h-[200px] md:h-[300px] relative mx-auto">
              <Image
                src="/WorkPacks-Delta-2048x1633.webp"
                alt="Microsoft teams"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-sky-950 text-center">
              WorkPacks Delta comes with a configurable{" "}
              <span className="p-2 bg-sky-900 text-white font-medium text-nowrap">
                Neo Flow Solution
              </span>{" "}
              for your capital project(s)
            </p>
            <Link href={"/solutions/delta"} className="btn-blue w-fit mx-auto">
              Learn More
            </Link>
          </div>
        </Wrapper>
      </section>
      <section className="min-h-screen bg-sky-800 flex flex-col justify-center">
        <Wrapper className="flex-1 flex flex-col items-center justify-center">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-8 text-center text-balance">
              We commit to our responsibilities to drive successful partnerships
            </p>
            <div className="flex flex-col md:flex-row gap-6 w-full">
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
        </Wrapper>
        <CardStatisticsContainer>
          <CardStatistics />
        </CardStatisticsContainer>
      </section>
      <section className="p-10 bg-gradient-to-l from-zinc-500/70 to-zinc-200 via-zinc-300/50 my-10">
        <Wrapper>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-950 max-w-[500px] mb-6">
            The Award Winning Results on the Largest LNG Projects in the World
          </p>
          <button className="btn-blue">
            Access Our Award Wining Case Study
          </button>
        </Wrapper>
      </section>
      <section className="py-10 lg:p-20">
        <Wrapper>
          <p className="text-blue-900 mb-4 text-center">What we do</p>
          <p className="text-sky-950 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Listening to you, and answering{" "}
          </p>
          <p className="text-sky-950 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            with software
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {items.map((item, idx) => (
              <div key={idx} className="p-4 border-[1px] border-zinc-200">
                {item?.icon ?? null}
                <p className="text-2xl font-semibold text-zinc-900 my-2">
                  {item.title}
                </p>
                <p className="text-zinc-600 text-balance">{item.detail}</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <p className="text-sky-950 font-semibold text-2xl sm:text-3xl md:text-4xl text-center">
            WorkPacks is a Software Solution{" "}
            <span className="text-sky-400">Certified</span> by AICPA's SOC2 Type
            II
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            <div className="relative h-[200px] md:h-[300px] w-[200px] md:w-[300px]">
              <Image
                src="/AiCPA-logo.png"
                alt="AICPA Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] md:h-[250px] w-[170px] md:w-[250px]">
              <Image
                src="/SOC-2.webp"
                alt="AICPA SOC-2"
                fill
                className="object-contain absolute"
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="pb-20">
        <Wrapper className="flex flex-col items-center justify-center">
          <p className="text-sky-900 font-semibold text-2xl mt-6">
            INDUSTRY / GENERAL KNOWLEDGE
          </p>
          <div className="h-2 w-[300px] md:w-[400px] relative bg-zinc-800 my-4">
            <div className="w-[50%] h-full bg-blue-500"></div>
          </div>
          <button className="btn-blue mb-6">Frequently Asked Questions</button>
          <Accordion items={INDUSTRY_GENERAL_KNOWLEDGE} />
          <p className="text-sky-900 font-semibold text-2xl mt-6">
            MEET WORKPACKS
          </p>
          <div className="h-2 w-[300px] md:w-[400px] relative bg-zinc-800 my-4">
            <div className="w-[50%] h-full bg-blue-500"></div>
          </div>
          <button className="btn-blue mb-6">Frequently Asked Questions</button>
          <Accordion items={WORKPACKS_FAQ} />
        </Wrapper>
      </section>
      <SectionFreeDemo />
      <SectionSuccessStories />
    </main>
  );
}
