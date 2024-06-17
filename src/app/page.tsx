'use client'

import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from 'sonner';
import { FormProvider } from "@/context/formContext";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        <FormProvider>
           <Toaster richColors position="top-center" />
            <Header/>
            <div className="flex-grow flex items-center justify-center">
              <Hero/>
            </div>
            <Footer/>
        </FormProvider>
      </div>
  );
}
