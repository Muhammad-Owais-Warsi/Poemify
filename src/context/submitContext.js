'use client'

import React, { createContext, useContext, useState } from "react";

const SubmitContext = createContext();

export const useSubmitContext = () => {
    return useContext(SubmitContext);
};

export const SubmitProvider = ({ children }) => {
    const [isSubmit, setisSubmit] = useState(false);
    const updateState = () => {
        setisSubmit((prev) => !prev);
    };
  
    return (
      <SubmitContext.Provider value={{ isSubmit, updateState }}>
        {children}
      </SubmitContext.Provider>
    );
};