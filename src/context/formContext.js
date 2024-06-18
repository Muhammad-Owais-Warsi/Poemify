'use client'

import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        text: "Write a rhyming poem on this given picture. The poem should be of 3 para with a title, each line should contain rhymes.",
        images: [],
    });

    const updateForm = (key, value) => {
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateForm }}>
            {children}
        </FormContext.Provider>
    );
};
