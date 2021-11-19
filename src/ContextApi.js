import React, { Component, createContext } from 'react';
import CompA from './CompA'

const ContextApi = () =>{
    return(
        <CompA />
    )
}


const FirstName = createContext();
const LastName = createContext();


const ContextApi = () =>{
    return(
        <FirstName.Provider value={"Aquib"}>
            <LastName.Provider value={"Aquib"}>
                <CompA />
            </LastName.Provider>
        </FirstName.Provider>
    )
}

export default ContextApi
export { FirstName, LastName };