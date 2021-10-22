import React, { Component } from 'react'

//event handler in react
class EventHandler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value : "waiting"
      };
    }

    handleClick = (event) =>{
        this.setState({value: "clicked"})
    }

    handleInput = (event) =>{
        this.setState({value: event.target.value})
    }

    render() {
      return (
        <div>
          <h1>Hello state</h1>
          <h2>value : {this.state.value}</h2>
          <button type="button" onClick={this.handleClick}>Click Me 1</button>
          <input type="text" onChange={this.handleInput}/>
        </div>
      );
    }
  }

  export default EventHandler