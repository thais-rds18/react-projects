import React from "react";
import { useState, createContext, useContext } from "react";


const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [nome, setNome] = useState(null);
    const [opinion, setOpinion] = useState(
        null
    );
    const [quest1Value, setQuest1Value] = useState([
        null,
    ]);
    
    const [quest2, setQuest2] = useState([
        null,
    ]);
    const [quest3, setQuest3] = useState([
        null,
    ]);
    const [respostas, setRespostas] = useState([
        0,
    ]);
    return (
        <MyContext.Provider
            value={{
                nome, setNome,
                opinion, setOpinion,
                quest1Value, setQuest1Value,
                quest2, setQuest2,
                quest3, setQuest3,
                respostas, setRespostas,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => {
    return useContext(MyContext);
};