import React, {Component} from "react";
import ClassAndFunctions from "./ClassAndFunctions";
import ConditionalRendering from "./ConditionalRendering";
import EventHandler from "./EventHandler";
import Lifecycle from "./LifeCycle";
import ListRendering from "./ListRendering";
import Styling from "./Styling";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import FunctionHooks from "./FunctionHooks";



class App extends Component{
    render(){
        return <>
        {/* <ClassAndFunctions/>
        <Lifecycle/> */}
        {/* <EventHandler/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <Styling/> */}
        <FunctionHooks/>


{/* npm install react-router-dom */}
        {/* <Router>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/blogs">Blog Articles</Link>
            </div>
            <div>
                <Link to="/contact">Contact Me</Link>
            </div>

                <hr />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blogs">
                    <Blog />
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