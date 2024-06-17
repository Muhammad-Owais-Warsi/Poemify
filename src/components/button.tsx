'use client'

import React, { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import { useFormContext } from "@/context/formContext";
import ImageBtn from "./imageBtn";

type ButtonProp =  {
    isSubmit: boolean;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({isSubmit, setIsSubmit}: ButtonProp) {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [imageDataURL, setImageDataURL] = useState<string | null>(null);
    const { updateForm } = useFormContext();

    const openFileExplorer = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };


    //     const selectedFile = event.target.files?.[0];
    //     console.log(selectedFile)
    //     if (selectedFile) {
    //         if (selectedFile.type.startsWith("image/")) {
    //             const reader = new FileReader();

    //             reader.onload = () => {
    //                 setImageDataURL(reader.result as string);

    //             };
    //             updateForm("image", reader.result);
    //             setIsSubmit(false);
    //             reader.readAsDataURL(selectedFile);
    //         } else {
    //             toast.error("Please select an image file.");
    //         }
    //     }
    // };

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = () => {
                    setImageDataURL(reader.result as string);
                    let base64: string | null = null;

                    if (typeof reader.result === "string") {
                        base64 = reader.result.split(',')[1];
                    }

                    updateForm("image",base64); // Extracting base64 data

                };
                setIsSubmit(false);
                reader.readAsDataURL(selectedFile);
            } else {
                toast.error("Please select an image file.");
            }
        }
    };



    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <Toaster position="top-center" />
            <div className="mx-auto w-full max-w-7xl flex flex-col items-center">
                <button className="relative p-1 uppercase mb-4" onClick={openFileExplorer}>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-4 py-2 bg-black rounded-[6px] relative text-white hover:bg-transparent transition duration-200">
                        Add Image +
                    </div>
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={inputFileRef}
                    style={{ display: "none" }}
                    onChange={handleFileSelection}
                />
                {/* Image preview */}
                {imageDataURL && !isSubmit && (
                    <div className="w-full mt-4">
                        <ImageBtn url={imageDataURL} />
                    </div>
                )}
            </div>
        </div>
    );
}
