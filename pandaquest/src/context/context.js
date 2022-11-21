import React from "react";

export const MyContext = React.createContext({});

export const ContextProvider = (props) => {
    const [base, setBase] = {
        nome: "teste",
        opinion: "teste",
        responses: "teste",
    }
    return (
        <MyContext.Provider value={{ base }}>
            {props.children}
        </MyContext.Provider>
    );
}