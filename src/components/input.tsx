'use client'

import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useFormContext } from "@/context/formContext";
import { toast } from "sonner";
import Button from "./button";
import api from "@/config/api";
import { useRouter } from "next/navigation";

export default function Input() {
  const placeholders = [
    "In every image, a verse lies hidden, waiting to be found",
  ];

  const { formData, updateForm } = useFormContext();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isPoem, setPoem] = useState<String>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm("text", e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.text || !formData.image) {
      toast.warning('Missing form data');
      console.log(formData);
    } else {
      console.log(formData);
      setIsSubmit(true);

      const generatePoemPromise = async () => {
        const poem = await api.generate(formData.text, formData.image);
        setPoem(poem);
        return poem;
      };

      toast.promise(generatePoemPromise, {
        loading: 'Redirecting',
        success: () => {
          router.push("/poem");
          return "Success"
        },
        error: 'Error generating poem',
      });
    }
  };

  return (
    <div className="w-screen z-30 flex flex-col items-center justify-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="mt-4 md:mt-6">
        <Button isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
      </div>
      {isPoem && (
        <div>
          {isPoem}
        </div>
      )}
    </div>
  );
}
