import React, { useState, useEffect } from 'react';

// class ClassAndFunctions extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         counters: 0
//       };
//     }

//     incrementCounter = () =>{
//         this.setState({counters: this.state.counters + 1})
//     }

//     render() {
//       return (
//         <div>
//           <h1>Hello state</h1>
//           <h2>counter : {this.state.counters}</h2>
//           <button type="button" onClick={this.incrementCounter}>Click Me 3</button>
//         </div>
//       );
//     }
//   }

// Hooks
// It gives to access state and lifecycle method inside the function component 
// Hooks are a new additional in react 
// They let you, use state & other react feature without writing the class 
// basically class are difficult to understand for our and compiler so hooks replace class component 
// Hooks make your app much cleaner by using functions 

function FunctionHooks() {
  // Declare a new state variable, which we'll call "count"
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>{
        setCounter(counter + 1)
    }

    return (
        <div>
        <p>You clicked {counter} times</p>
        <button onClick={incrementCounter}>
            Click me
        </button>
        </div>
    );
}

export default FunctionHooks