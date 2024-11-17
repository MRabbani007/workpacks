import Wrapper from "@/features/Wrapper";
import FormNewsLetter from "@/features/forms/FormNewsLetter";
import React from "react";

export default function AnnouncementsPage() {
  return (
    <main>
      <section className="min-h-[50vh] bg-gradient-to-b from-sky-800 to-sky-950 rounded-br-[100px] flex items-center justify-center">
        <p className="text-6xl font-extrabold text-white">Announcements</p>
      </section>
      <section className="min-h-screen py-10">
        <Wrapper className="grid grid-cols-[1fr_300px] gap-6">
          <div className="">
            <p className="text-zinc-700 text-xl">No Announcements for now!</p>
          </div>
          <div>
            <FormNewsLetter />
            <div className="p-6">
              <p className="text-indigo-950 text-3xl font-semibold mb-6">
                Latest Post
              </p>
              <p className="text-zinc-700 text-xl">No Posts Yet!</p>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
