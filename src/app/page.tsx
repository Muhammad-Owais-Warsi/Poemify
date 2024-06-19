"use client"
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Toaster } from 'sonner';
import { FormProvider } from "@/context/formContext";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import * as location from "./1055-world-locations.json";
import * as success from "./1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Spinner() {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true); 
      setTimeout(() => {
        setCompleted(true); 
      }, 1000);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col  bg-black">
      {!completed ? (
        <div className="flex flex-grow justify-center items-center">
          {!loading ? (
            <Lottie
              options={defaultOptions1}
              width={"250px"}
            />
          ) : (
            <Lottie
              options={defaultOptions2}
              width={"150px"}
            />
          )}
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
