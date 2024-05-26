'use client'

import React, { useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import Image from "next/image";

export default function Button() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [imageDataURL, setImageDataURL] = useState<string | null>(null);

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
                    const imageDataURL = reader.result as string;
                    setImageDataURL(imageDataURL);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                toast.error("Please select an image file.");
            }
        }
    };

    const openImage = () => {
        const popupWindow = window.open('', 'Image Preview', 'width=600,height=400,scrollbars=yes,resizable=yes');
        if (popupWindow) {
            popupWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Image Preview</title>
                    <style>
                        body {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            background-color: #000;
                        }
                        img {
                            max-width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                        }
                    </style>
                </head>
                <body>
                    <img src="${imageDataURL}" alt="Image Preview">
                </body>
                </html>
            `);
            popupWindow.document.close();
        }
    };

    const removeImage = () => {
        setImageDataURL(null);
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
                {imageDataURL && (
                    <div className="mt-10 relative max-w-[250px]">
                        <button
                            className="absolute top-[10px] right-[-10px] rounded text-white p-1 z-10 h-4"
                            onClick={removeImage}
                        >
                            X
                        </button>
                        <button 
                            className="mt-2 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-100 left-4" 
                            onClick={openImage}
                        >
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                                <span>{`Image`}</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                    ></path>
                                </svg>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
