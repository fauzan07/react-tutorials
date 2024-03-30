import React from 'react';
import ReactDOM from 'react-dom';


const Styling = () => {

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
    fontSize : "10px"
  };
  
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello inline Style!</h1>
      <h1 style={myStyle}>Hello internal Style!</h1>
      <p className="text-primary">Add a little style!</p>
    </>
  );
}

export default Styling