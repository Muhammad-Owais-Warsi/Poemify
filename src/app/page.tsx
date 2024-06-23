"use client";
import React, { useEffect, useState } from "react";
import Player from "lottie-react";
import { Toaster } from 'sonner';
import { FormProvider } from "@/context/formContext";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import location from "./1055-world-locations.json"; // Directly import the JSON

function Spinner() {
  const [completed, setCompleted] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true); 
    }, 2500); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {!completed ? (
        <div className="flex flex-grow justify-center items-center">
          <Player
            animationData={location}
            loop
            autoplay
            style={{ width: 250, height: 250 }}
          />
        </div>
      ) : (
        <div className="flex flex-grow flex-col">
          <FormProvider>
            <Toaster richColors position="top-center" />
            <Header />
            <div className="flex-grow flex items-center justify-center">
              <Hero />
            </div>
            <Footer />
          </FormProvider>
        </div>
      )}
    </div>
  );
}

export default Spinner;
