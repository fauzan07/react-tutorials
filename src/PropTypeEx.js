import React from 'react';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}

MyComponent.propTypes = {
  message: PropTypes.number.isRequired,
};


export default MyComponent;