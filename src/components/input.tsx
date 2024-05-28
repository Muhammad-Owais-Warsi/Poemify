import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useFormContext } from "@/context/formContext";
import { toast } from "sonner";
import Button from "./button";
import { SubmitProvider } from "@/context/submitContext";

export default function Input() {
  const placeholders = [
    "In every image, a verse lies hidden, waiting to be found",
  ];

  const { formData, updateForm } = useFormContext();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm("text", e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.text === null || formData.image === null) {
      toast.warning('Missing');
    } else {
      toast.success('Well done');
      setIsSubmit(true);
    }
  };

  return (
    <SubmitProvider>
      <div className="w-screen z-30 flex flex-col items-center justify-center">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="mt-4 md:mt-6">
          {isSubmit ? null : <Button />}
        </div>
      </div>
    </SubmitProvider>
  );
}
