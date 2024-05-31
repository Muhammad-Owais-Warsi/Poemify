"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { PoemCard } from "./poemCard";
import { PoemText } from "./poemText";

export function PoemBackground() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <PoemCard/>
      <BackgroundBeams />
    </div>
  );
}
