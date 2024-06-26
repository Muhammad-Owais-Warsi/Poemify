'use client'
import React from "react";
import { Meteors } from "./ui/meteors";
import { PoemText } from "./poemText";

import { useRef } from "react";
import html2canvas from "html2canvas"


export function PoemCard() {


  const ref = useRef<HTMLDivElement>(null);
  

  const handle = async ()=>{
    if (ref.current) {
      try {
        const canvas = await html2canvas(ref.current);
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'poem.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error('Error saving image:', error);
      }
    }

  }



  return (
<div className="z-40 flex flex-col justify-center items-center min-h-screen py-10">
      <div className="w-full max-w-lg relative" style={{ aspectRatio: '1 / 1.41', width: '80mm', height: '297mm' }}>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-10 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start" ref={ref}>
          <div className="font-normal text-base text-slate-500 mb-4 relative z-50 space-y-4">
            <PoemText />
          </div>
          {/* Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
      <button className="border px-4 py-2 rounded-lg border-gray-500 text-gray-300 mt-6" onClick={handle}>
        Save
      </button>
    </div>
  
  );
}
