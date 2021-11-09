import React from 'react';
import PropTypes from 'prop-types';


//npm install prop-types

//PropTypes.array
//PropTypes.bool
//PropTypes.func
//PropTypes.number
//PropTypes.object
//PropTypes.string
//PropTypes.symbol

//Parent Component
const PropTypeEx = () => {
    return (
        <div>
            <A
            // person={{firstName : "Salim", lastName : "Ansari"}}
            // person2={{firstName : "Aquib", lastName : "Nakwa", age : 23}}
            // x={123}
            // y={123223333}
            // array={["1", "2", "3", "6"]}
            // arrayObject={{firstName : "Salim", lastName : "Ansari"}}
            />
        </div>
    );
}
//Child Component
const A = (props) => {
    return(
        <div>
            <h1>{props.firstName}</h1>
            {/* <br/>
            <h1>{props.person.firstName}</h1>
            <h1>{props.person.lastName}</h1>
            <br/>
            <h1>{props.person2.firstName}</h1>
            <h1>{props.person2.lastName}</h1>
            <h1>{props.person2.age}</h1>
            <br/>
            <h1>{props.x}</h1>
            <br/>
            <h1>{props.y}</h1>
            <br/>
            <h1>{props.array}</h1> */}
        </div>
    )
}

A.prototype = {
     firstName : PropTypes.string.isRequired
    //  person : PropTypes.shape({
    //      firstName : PropTypes.string, lastName : PropTypes.string
    //  }),
    //  person2 : PropTypes.exact({
    //     firstName : PropTypes.string, lastName : PropTypes.string
    // }),
    // x : PropTypes.oneOf(["x",123]),
    // y : PropTypes.oneOfType([PropTypes.number,PropTypes.bool]),
    // array : PropTypes.arrayOf(PropTypes.string),
    // arrayObject : PropTypes.arrayOf({
    //     firstName : PropTypes.string, lastName : PropTypes.string
    // }),

}

export default PropTypeEx