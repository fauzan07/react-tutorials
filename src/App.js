import React, {Component} from "react";
import ClassAndFunctions from "./ClassAndFunctions";
import ConditionalRendering from "./ConditionalRendering";
import EventHandler from "./EventHandler";
import Lifecycle from "./LifeCycle";
import ListRendering from "./ListRendering";

class App extends Component{
    render(){
        return <>
        {/* <ClassAndFunctions/>
        <Lifecycle/> */}
        {/* <EventHandler/> */}
        {/* <ConditionalRendering/> */}
        <ListRendering/>
        </>
    }

}
export default App;