import React from "react";
import { Meteors } from "./ui/meteors";
import { PoemText } from "./poemText";

export function PoemCard() {
  return (
    <div className="z-40 flex justify-center items-center">
      <div className="w-full max-w-lg relative h-[48rem]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start">
          <h1 className="font-bold text-2xl text-white mb-4 relative z-50">
            Blush of Twilight
          </h1>

          <div className="font-normal text-base text-slate-500 mb-4 relative z-50 space-y-4">
            <PoemText />
          </div>

          <button className="border px-4 py-2 rounded-lg border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
