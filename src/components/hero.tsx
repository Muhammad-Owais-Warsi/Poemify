import React from "react";
import { Vortex } from "./ui/vortex";
import Input from "./input";
import Button from "./button";

export default function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center mt-8 md:mt-16">
          Lens to Lyric
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl text-center mt-4 md:mt-8">
          Every picture has a poem, let us find yours.
        </p>
        <div className="mt-6 md:mt-8 w-full flex justify-center">
          <Input />
        </div>
        <div className="mt-4 md:mt-6 w-full flex justify-center">
          <Button />
        </div>
      </Vortex>
    </div>
  );
}
