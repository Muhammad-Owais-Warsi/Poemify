'use client'

import Image from "next/image";
import Hero from "@/components/hero";
import Header from "@/components/header";
import { Toaster} from 'sonner';
import { FormProvider } from "@/context/formContext";

export default function Home() {
  return (
      <FormProvider>
         <Toaster richColors position="top-center" />
          <Header/>
          <Hero/>
          
      </FormProvider>
  );
}
