'use client'

import React, { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import { useFormContext } from "@/context/formContext";
import ImageBtn from "./imageBtn";
import { v4 as uuidv4 } from 'uuid';

type ButtonProp = {
    isSubmit: boolean;
    setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

type ImageData = {
    id: string;
    url: string;
}

export default function Button({ isSubmit, setIsSubmit }: ButtonProp) {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [imageData, setImageData] = useState<ImageData[]>([]);
    const { formData, updateForm } = useFormContext();

    const openFileExplorer = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newImageData: ImageData[] = [];
            const readers = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();

                    readers.push(new Promise<void>((resolve) => {
                        reader.onload = () => {
                            const base64 = (reader.result as string).split(',')[1];
                            const id = uuidv4();
                            newImageData.push({ id, url: reader.result as string });
                            resolve();
                        };
                        reader.readAsDataURL(file);
                    }));
                } else {
                    toast.error("Please select an image file.");
                }
            }

            Promise.all(readers).then(() => {
                setImageData((prev) => [...prev, ...newImageData]);
                const newImages = newImageData.map(image => image.url.split(',')[1]);
                updateForm("images", [...formData.images, ...newImages]); // Append new images to the existing array
                setIsSubmit(false);
            });
        }
    };

    const handleRemoveImage = (id: string) => {
        const updatedImageData = imageData.filter((image) => image.id !== id);
        setImageData(updatedImageData);
        const updatedImages = updatedImageData.map(image => image.url.split(',')[1]);
        updateForm("images", updatedImages); // Update the form context with the remaining images
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
                    multiple
                    ref={inputFileRef}
                    style={{ display: "none" }}
                    onChange={handleFileSelection}
                />
                {/* Image previews */}
                {imageData.length > 0 && !isSubmit && (
                    <div className={`w-full mt-4 ${imageData.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-4'}`}>
                        {imageData.map(({ id, url }) => (
                            <ImageBtn key={id} id={id} url={url} onRemove={() => handleRemoveImage(id)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
