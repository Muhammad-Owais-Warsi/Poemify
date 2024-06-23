'use client'

import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { FormProvider } from "@/context/formContext";

export default function Home() {

  return (
      <div className="min-h-screen flex flex-col">
            <FormProvider>
                <div className="flex-grow flex items-center justify-center">
                  <Hero/>
                </div>
                <Footer/>
            </FormProvider>
      </div>
  );
}
