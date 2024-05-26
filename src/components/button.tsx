"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";


export default function Button() {
    const copy = (button: any) => {
        if (button.code) {
            copyToClipboard(button.code);
            return;
        }
        let buttonString = reactElementToJSXString(button.component);

        if (buttonString) {
            const textToCopy = buttonString;
            copyToClipboard(textToCopy);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log("Text copied to clipboard:", text);
                toast.success("Copied to clipboard");
            })
            .catch((err) => {
                console.error("Error copying text to clipboard:", err);
                toast.error("Error copying to clipboard");
            });
    };
    return (
        <div className="pb-40 px-4 w-full">
            <Toaster position="top-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  max-w-7xl mx-auto gap-10">
                {buttons.map((button, idx) => (
                    <div>
                        {button.component}
                    </div>

                ))}
            </div>
        </div>
    );
}
export const buttons = [

    {
        name: "Lit up borders",
        description: "Gradient button with perfect corners",
        component: (
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Lit up borders
                </div>
            </button>
        ),
    },

];
