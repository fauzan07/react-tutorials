import React, { Component } from 'react'

//event handler in react
class ConditionalRendering extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value : "waiting",
        showHeading : true
      };
    }

    abu = () =>{
        this.setState({showHeading: !this.state.showHeading})
    }

    render() {
      return (
        <div>
          <h1>Hello state</h1>
          <h2>value : {this.state.value}</h2>
         {this.state.showHeading ?  <h2>value : {this.state.value}</h2> : <h2>No Heading</h2> }
         {/* {this.state.showHeading &&  <h2>value : {this.state.value}</h2>} */}
          <button type="button" onClick={this.abu}>Toggle Me</button>
        </div>
      );
    }
  }

  export default ConditionalRendering