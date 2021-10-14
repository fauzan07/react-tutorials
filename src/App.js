import React, {Component} from "react";


// ------------------------------Session 1------------------------------
// In this tutorial we're going to learn about Class Components as well as JSX. 
// JSX is nothing more than syntactic sugar for React.createElement 
// which allows us to more easily develop UI due to the fact of its similarity with HTML. 
// Components allow us to break down our webpage into smaller reusable pieces of UI.

// class App extends Component{
//     render(){
//         return <>
//         <h1>App Component</h1>
//         <h3>App Component</h3>
//         </>
//     }

    //------------fragment-----------------
    // render(){
    //     return (
    //     <>
    //         <h1>App Component</h1>
    //         <h3>new tag</h3>
    //     </>
    //     )
    // }

    //-------------need closing tag-----------
    // render(){
    //     return (
    //     <>
    //         <h1>App Component</h1>
    //         <br/>
    //         <h3>new tag</h3>
    //     </>
    //     )
    // }

    //-------------how to use js in jsx syntax---------
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

    //---------------how to call functions in class component & jsx-------------
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

    //----------------how to use object call in jsx----------------------
    //     add(num1, num2){
    //         return num1 + num2;
    //     }

    //   render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //     const someObj = {name : "Salim", age : "25"}
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

    //---------------conditional expresion in react jsx------------------
    //     add(num1, num2){
    //         return num1 + num2;
    //     }

    //   render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //     const someObj = {name : "Salim", age : "25"}
    //          return (
    //         <>
    //             <h1>App Component</h1>
    //             <h3>testing js code</h3>
    //             <span>{1 + 1}</span><br/>
    //             <span>{num1 + num2}</span>
    //             <h2>{new Date().toLocaleString()}</h2>
    //             <h2>{this.add(1,1)}</h2>
    //             <h1>My Name is {someObj.name}, my age is {someObj.age}</h1>
    //             {3 > 2 ? "3 is bigger than 2" : "its not"}
    //             {true && <h1>Thing i want to render</h1>}
    //         </>
    //         )
    //     }

    //------------------return jsx in jsx via function-------------------------
    //     add(num1, num2){
    //         return num1 + num2;
    //     }

    //     someJSX(){
    //         return (
    //             <>
    //                 <ul>
    //                     <li>Jsx List 1</li>
    //                     <li>Jsx List 2</li>
    //                     <li>Jsx List 3</li>
    //                 </ul>
    //             </>
    //         )
    //     }

    //   render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //     const someObj = {name : "Salim", age : "25"}
    //          return (
    //         <>
    //             <h1>App Component</h1>
    //             <h3>testing js code</h3>
    //             <span>{1 + 1}</span><br/>
    //             <span>{num1 + num2}</span>
    //             <h2>{new Date().toLocaleString()}</h2>
    //             <h2>{this.add(1,1)}</h2>
    //             <h1>My Name is {someObj.name}, my age is {someObj.age}</h1>
    //             {3 > 2 ? "3 is bigger than 2" : "its not"}
    //             {true && <h1>Thing i want to render</h1>}
    //             {this.someJSX()}
    //         </>
    //         )
    //     }

    //------------------conditional rendering in jsx--------------------------
    //     add(num1, num2){
    //         return num1 + num2;
    //     }

    //     someJSX(){
    //         return (
    //             <>
    //                 <ul>
    //                     <li>Jsx List 1</li>
    //                     <li>Jsx List 2</li>
    //                     <li>Jsx List 3</li>
    //                 </ul>
    //             </>
    //         )
    //     }

    //     condtionalRendering(){
    //         if(3 < 0){
    //             return(
    //                <h1>3 is greater than 2</h1>
    //             )
    //         }else{
    //             return(
    //                 <h1>3 is less than 2</h1>
    //              )
    //         }
    //     }

    //   render(){
    //     const num1 = 1;
    //     const num2 = 2;
    //     const someObj = {name : "Salim", age : "25"}
    //          return (
    //         <>
    //             <h1>App Component</h1>
    //             <h3>testing js code</h3>
    //             <span>{1 + 1}</span><br/>
    //             <span>{num1 + num2}</span>
    //             <h2>{new Date().toLocaleString()}</h2>
    //             <h2>{this.add(1,1)}</h2>
    //             <h1>My Name is {someObj.name}, my age is {someObj.age}</h1>
    //             {3 > 2 ? "3 is bigger than 2" : "its not"}
    //             {true && <h1>Thing i want to render</h1>}
    //             {this.someJSX()}
    //             {this.condtionalRendering()}
    //         </>
    //         )
    //     }

// }


// ------------------------------Session 2------------------------------
// In this session, we're going to be going over functional components. 
// A functional component, is just a regular function that returns jsx. 
// We declare a functional component using 2 different syntax's. 
// We can use es5 styled functions as well as arrow functions. 
// We'll also be talking about props which is short form for properties. 
// A prop is data that we can send from parent component to child component. 
// Props are also immutable. Meaning that they cannot be changed.

//function component
// function A(){
//     return(
//         <h1>Hello I am function component A</h1>
//     )
// }

// const B = ()=>{
//     return(
//         <h1>Hello I am arrow function component B</h1>
//     )
// }
// class App extends Component{
//     render(){
//         return <>
//         <h1>Hello I am Class Component</h1>
//         <A/>
//         <B/>
//         </>
//     }

// }

//function component
function A(props){
    console.log(props)
    // props.firstName = "salim"; //props are immutable i.e read only property , we cannot change props
    return(
        <div>
            <h1>Hello I am function component A</h1>
            <h2>{props.firstName}</h2>
            <h2>{props.lastName}</h2>
        </div>
    )
}

const B = (props)=>{
    return(
        <div>
            <h1>Hello I am function component A</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

class C extends Component{
    render(){
        console.log(this.props);
        const {age, someMath, someArray} = this.props;
        return(
            <div>
                <h1>Hello I am class component C</h1>
                <h2>{age}</h2>
                <h2>{someMath}</h2>
                <h2>{someArray}</h2>
            </div>
        )
    }
}
class App extends Component{
    render(){
        return (
        <>
            <h1>Hello I am Class Component</h1>
            <A firstName="Haris" lastName="xyz"/>
            <B name="Aquib"/>
            <C age={23} someMath={1 + 3} someArray={[1, 2, 3]}/>
        </>
        )
    }

}

export default App;