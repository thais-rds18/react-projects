import React from "react";
import { useState, createContext, useContext } from "react";


const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [opinion, setOpinion] = useState('');
    const [quest1, setQuest1] = useState('');
    const [quest2, setQuest2] = useState('');
    const [quest3, setQuest3] = useState('');
    const [quest4, setQuest4] = useState('');


    return (
        <MyContext.Provider
            value={{
                nome, setNome,
                opinion, setOpinion,
                quest1, setQuest1,
                quest2, setQuest2,
                quest3, setQuest3,
                quest4, setQuest4,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};