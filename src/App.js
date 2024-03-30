import React, {Component} from "react";
import ClassAndFunctions from "./ClassAndFunctions";
import ConditionalRendering from "./ConditionalRendering";
import EventHandler from "./EventHandler";
import Lifecycle from "./LifeCycle";
import ListRendering from "./ListRendering";
import Styling from "./Styling";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import FunctionHooks from "./FunctionHooks";
import PropTypeEx from "./PropTypeEx";
import ErrorBounderiesEx from "./ErrorBounderiesEx";
import RefsEx from "./RefsEx";
import About from "./About";
import './App.css';
import DummyData from "./DummyData";
import MyContext from './Context';
import Header from "./components/Header";
import LifecycleB from "./LifeCycleB";
import MyComponent from "./PropTypeEx";
import MyConsumer from "./MyConsumer";
import MyProvider from "./MyProvider";



// const App = ({ children }) =>{
//     const contextValue = {
//         MyData : "this is my dummy data",
//     }

//     return (
//         <MyContext.Provider value={{contextValue}}>
//           {children}
//         </MyContext.Provider>
//       );
// }

class App extends Component{
    
    render(){
        return <>
        {/* <ClassAndFunctions/> */}
        {/* <LifecycleB/> */}
        {/* <EventHandler/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <Styling/> */}
        {/* <FunctionHooks/> */}
        {/* <PropTypeEx/> */}
        {/* <ErrorBounderiesEx/> */}
        {/* <RefsEx /> */}
        {/* <MyComponent message={1} /> */}
        {/* <DummyData/>
        <Blog/> */}
        {/* <Home/> */}

        <MyProvider>
        <div>
          <h1>Context Example</h1>
          <MyConsumer />
          <ListRendering />
        </div>
      </MyProvider>


{/* npm install react-router-dom */}
        {/* <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blogs">
                    <Blog />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router> */}
        </>
    }

}
export default App;