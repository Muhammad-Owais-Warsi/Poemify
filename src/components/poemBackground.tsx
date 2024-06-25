// "use client";
import React, { createContext, useContext, useState } from "react";

import { BackgroundBeams } from "./ui/background-beams";
import { PoemCard } from "./poemCard";

export function PoemBackground() {
  return ( 
    
      <div className="h-screen  max-w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <PoemCard />
        <BackgroundBeams />
      </div>
  );
}
