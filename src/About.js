import React, { Component } from 'react';
import proptypes from 'prop-types';

const About = (props) => {
  
  return (
    <>
      <h1>Hello my name is {props.name}</h1>
      <p>My age after 5 yr will be {props.age + 5}</p>
    </>
  );
}

Component.proptypes = {
    name : proptypes.string.isRequired,
    age : proptypes.number.isRequired
}

export default About