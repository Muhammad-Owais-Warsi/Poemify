'use client';

import React from "react";

type ImageBtnProps = {
    url: string | null;
}

const ImageBtn: React.FC<ImageBtnProps> = ({ url }) => {
    const openImage = () => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="mt-10 relative max-w-[350px] mx-auto flex flex-col-reverse sm:flex-row justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bottom-4 ">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-4 py-2 bg-transparent border border-red-500 dark:border-red-500 dark:text-red-500 text-red-500 rounded-lg font-bold w-full sm:w-auto h-10">
                Remove
            </button>
            <button
                onClick={openImage}
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-4 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 w-full sm:w-screen sm:top-[0.1px] bottom-2 relative h-10">
                View Image
            </button>
        </div>
    );
};

export default ImageBtn;
