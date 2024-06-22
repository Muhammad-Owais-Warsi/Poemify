import React from "react";
import { Vortex } from "./ui/vortex";
import Input from "./input";
import Button from "./button";

export default function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden ">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h3 className="text-white text-xl md:text-5xl font-bold text-center mt-8 md:mt-16">
          {/* Image to Verse */} Unleash the Magic Behind Words and Images
        </h3>
        <p className="text-white text-sm md:text-xl max-w-xl text-center mt-4 md:mt-8">
          {/* Every picture has a poem, let us find yours. */}
          An enchanting world where your text and images are transformed into
          beautiful poems.
        </p>
        <div className="mt-6 md:mt-8 w-full flex justify-center">
          <Input />
        </div>
      </Vortex>
    </div>
  );
}
