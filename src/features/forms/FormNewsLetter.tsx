import React from "react";

export default function FormNewsLetter() {
  return (
    <div className="bg-zinc-200 p-6 flex flex-col gap-4 mb-6">
      <p className="text-indigo-950 text-3xl font-semibold">Newsletter</p>
      <p className="text-zinc-700">
        Signup to our newsletter to get update information, news, insight or
        promotions.
      </p>
      <input
        type="text"
        placeholder="Full Name"
        className="py-2 px-4 text-black border-2 border-zinc-400 rounded-md bg-transparent"
      />
      <input
        type="text"
        placeholder="Email"
        className="py-2 px-4 text-black border-2 border-zinc-400 rounded-md bg-transparent"
      />
      <button className="py-2 px-4 bg-sky-600 text-white font-bold rounded-md mx-auto">
        Sign Up
      </button>
    </div>
  );
}
