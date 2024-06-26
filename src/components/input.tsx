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
          const prompt: string = `You're an AI that converts images to beutiful poems.Using the provided images and text, write a rhyming poem with the following specifications:
          Whenever after this you see a $ sign means that is a description of how the user wants the poem, so genearte poem in that 
          context accurately as much as possible.
            - Title: Create an engaging title for the poem.
            - Poem: Write a 3-paragraph poem, each line containing 7-8 words.
            - Give a line break after each line and end of paragraph \n
            Return the result as a JSON object with the following structure:
            {
              "title": "Your Poem Title",
              "poem": str
            } $ 
             Return the respone in form of [{}]`;

          const poem = await api.generate(
            prompt + formData.text,
            formData.images
          );
          setPoem(poem);
          console.log(poem)
          return poem;
        } catch (error) {
          throw new Error("Error while generating a poem");
        }
      };

      toast.promise(generatePoemPromise(), {
        loading: "Redirecting",
        success: (data) => {
          router.push(`/poem?data=${encodeURIComponent(data)}`); // Serialized data before passing
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
    <div className="mt-5">
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
