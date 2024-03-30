import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    console.log('Render called');
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default Lifecycle;
