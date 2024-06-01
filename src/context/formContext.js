'use client'

import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext);
};


export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
      text: "Write a rhyming poem on this given picture. The poem should be of 3 para witha a title, each line should contains 7-8 words. Return it as a object with title and poem"
      image:"",
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
