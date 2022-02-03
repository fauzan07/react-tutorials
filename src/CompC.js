import React, { Component } from 'react';
import CompC from './CompC'
import { FirstName, LastName } from './ContextApi';

// const CompC = () =>{
//     return(

//        <h1>hello my name is Aquib</h1>
//     )
// }

const CompC = () =>{
    return(
        <>
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <LastName.Consumer>
                        {(lname)=>{
                            return(
                                <h1>hello my name is {fname} {lname}</h1>  
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
        </>
    )
}


const CompC = () =>{
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return(

       <h1>hello my name is {fname} {lname}</h1>
    )
}

export default CompC