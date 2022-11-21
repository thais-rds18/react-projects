import React from "react";

export const MyContext = React.createContext({});

export const ContextProvider = (props) => {
    const [base, setBase] = {
        nome: "teste",
        opinion: "teste",
        responses: "teste",
        perg1: null,
        perg2: null,
        perg3: null,

    }
    return (
        <MyContext.Provider value={{ base }}>
            {props.children}
        </MyContext.Provider>
    );
}