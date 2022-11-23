import React from "react";
import { useState, createContext, useContext } from "react";


const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [nome, setNome] = useState(null);
    const [opinion, setOpinion] = useState(
        null
    );
    
    return (
        <MyContext.Provider
            value={{
                nome, setNome,
                opinion, setOpinion,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};