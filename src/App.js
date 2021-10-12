import React, {Component} from "react";

class App extends Component{
    // render(){
    //     return <>
    //     <h1>App Component</h1>
    //     <h3>App Component</h3>
    //     </>
    // }

    //fragment
    // render(){
    //     return (
    //     <>
    //         <h1>App Component</h1>
    //         <h3>new tag</h3>
    //     </>
    //     )
    // }

    //need closing tag
    // render(){
    //     return (
    //     <>
    //         <h1>App Component</h1>
    //         <br/>
    //         <h3>new tag</h3>
    //     </>
    //     )
    // }

    //how to use js in jsx syntax
    // render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //          return (
    //         <>
    //             <h1>App Component</h1>
    //             <h3>testing js code</h3>
    //             <span>{1 + 1}</span><br/>
    //             <span>{num1 + num2}</span>
    //             <h2>{new Date().toLocaleString()}</h2>

    //         </>
    //         )
    //     }

    //how to call functions in class component & jsx
    // add(num1, num2){
    //     return num1 + num2;
    // }

    //   render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //          return (
    //         <>
    //             <h1>App Component</h1>
    //             <h3>testing js code</h3>
    //             <span>{1 + 1}</span><br/>
    //             <span>{num1 + num2}</span>
    //             <h2>{new Date().toLocaleString()}</h2>
    //             <h2>{this.add(1,1)}</h2>

    //         </>
    //         )
    //     }

    //how to use object call in jsx
        add(num1, num2){
            return num1 + num2;
        }

      render(){
        const num1 = 1;
        const num2 = 2;
        const someObj = {name : "Salim", age : "25"}
             return (
            <>
                <h1>App Component</h1>
                <h3>testing js code</h3>
                <span>{1 + 1}</span><br/>
                <span>{num1 + num2}</span>
                <h2>{new Date().toLocaleString()}</h2>
                <h2>{this.add(1,1)}</h2>
                <h1>My Name is {someObj.name}, my age is {someObj.age}</h1>

            </>
            )
        }
}

export default App;