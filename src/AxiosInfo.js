import React, {Component} from "react";
import axios from 'axios';
class AxiosInfo extends Component{
// npm install axios

// Axios is a library, Promise based HTTP client that work in both browser and Node.js environment 
 
// As we remeber concept in js if.e fetch
// what we do in fetch is that...

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


//   Axios us wrapper over the fetch api to make our life more easier
//   Axios make it easy to send async HTTP request to end point


componentDidMount() {
    // Simple GET request using axios
    axios.get('http://example.com/movies.json')
        .then(response => this.setState({ movies: response.data }));
}

}

export default AxiosInfo;
