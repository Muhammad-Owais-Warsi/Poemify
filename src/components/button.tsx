'use client'

import React, { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import { useFormContext } from "@/context/formContext";
import ImageBtn from "./imageBtn";



export default function Button() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [imageDataURL, setImageDataURL] = useState<string | null>(null);
    const { updateForm } = useFormContext();

    const openFileExplorer = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = () => {
                    setImageDataURL(reader.result as string);
                };
                updateForm("image", selectedFile);
                reader.readAsDataURL(selectedFile);
            } else {
                toast.error("Please select an image file.");
            }
        }
    };



    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <Toaster position="top-center" />
            <div className="mx-auto w-full max-w-7xl">
                <button className="relative p-1" onClick={openFileExplorer}>
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
                {imageDataURL  && (
                    <ImageBtn url={imageDataURL}/>
                )}
            </div>
        </div>
    );
}
