 'use client';

import React, { useState } from "react";
import ModalBox from "./ui/modal";

type ImageBtnProps = {
    id: string;
    url: string;
    onRemove: (id: string) => void;
}

const ImageBtn: React.FC<ImageBtnProps> = ({ id, url, onRemove }) => {
    const [isModal, setIsModal] = useState<boolean>(false);

    return (
        <div className="mt-10 relative max-w-[350px] mx-auto flex flex-col-reverse sm:flex-row justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bottom-4 ">
            <button className="shadow-[0_0_0_3px_#000000_inset] px-4 py-2 bg-transparent border border-red-500 dark:border-red-500 dark:text-red-500 text-red-500 rounded-lg font-bold w-full sm:w-auto h-10"
                onClick={() => onRemove(id)}
            >
                Remove
            </button>
            <button
                onClick={() => setIsModal(true)}
                className="shadow-[inset_0_0_0_2px_#616467] text-black px-4 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 w-full sm:w-screen sm:top-[0.1px] bottom-2 relative h-10">
                View Image
            </button>
            {isModal && (
                <>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white w-80 p-6 rounded-lg shadow-lg relative">
                            <ModalBox setIsModal={setIsModal} url={url}/>
                        </div>
                    </div>
                    <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsModal(false)}></div>
                </>
            )}
        </div>
    );
};

export default ImageBtn;
