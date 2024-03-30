import React, { Component } from 'react'

//event handler in react
class EventHandler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data : "waiting"
      };
    }

    handleClick = (event) =>{
        this.setState({data: "clicked"})
    }

    handleInput = (event) =>{
        this.setState({data: event.target.value})
    }

    render() {
      return (
        <div>
          <h1>Hello state</h1>
          <h2>value : {this.state.data}</h2>
          <button type="button" onClick={this.handleClick}>Click Me 1</button>
          <input type="text" onChange={this.handleInput}/>
        </div>
      );
    }
  }

  export default EventHandler