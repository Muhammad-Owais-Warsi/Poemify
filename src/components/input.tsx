import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useFormContext } from "@/context/formContext";
import { toast } from "sonner";
import Button from "./button";
import { useRouter } from "next/navigation"; // Changed import
import api from "@/config/api";

export default function Input() {
  const placeholders = [
    "In every image, a verse lies hidden, waiting to be found",
  ];

  const { formData, updateForm } = useFormContext();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isPoem, setPoem] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm("text", e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.text || formData.images.length === 0) {
      toast.warning("Please enter some text");
    } else {
      setIsSubmit(true);

      const generatePoemPromise = async () => {
        try {
          const prompt: string = `Using the provided images and text, write a rhyming poem with the following specifications:
            - Title: Create an engaging title for the poem.
            - Poem: Write a 3-paragraph poem, each line containing 7-8 words.
            Return the result as a JSON object with the following structure:
            {
              "title": "Your Poem Title",
              "poem": "First paragraph of the poem.\nSecond paragraph of the poem.\nThird paragraph of the poem."
            }`;

          const poem = await api.generate(
            prompt + formData.text,
            formData.images
          );
          setPoem(poem);
          return poem;
        } catch (error) {
          throw new Error("Error while generating a poem");
        }
      };

      toast.promise(generatePoemPromise(), {
        loading: "Redirecting",
        success: (data) => {
          router.push(`/poem?data=${encodeURIComponent(JSON.stringify(data))}`); // Serialized data before passing
          return "Success";
        },
        error: (error) => {
          console.error(error);
          return "Error while generating a poem";
        },
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
    </div>
  );
}
