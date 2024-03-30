import React, { Component } from 'react';
import Context from './Context';import Blog from './Blog';
;


const DummyData = (props) => {

    const contextValue = {
        data : "this is my dummy data",
    }
  
  return (
    <Context.Provider value={contextValue}>
     <Blog/>
    </Context.Provider>
  );
}


export default DummyData