import React from "react";
const MyContext = React.createContext();

// class MyProvider extends React.Component {
//     state = {
//       data: 'Hello from Context!' // Sample data to be shared
//     };
  
//     render() {
//       return (
//         <MyContext.Provider value={this.state.data}>
//           {this.props.children}
//         </MyContext.Provider>
//       );
//     }
//   }

  const MyProvider = ({ children }) => {
    const data = 'Hello from Context!'; // Sample data to be shared
  
    return (
      <MyContext.Provider value={data}>
        {children}
      </MyContext.Provider>
    );
  };

export default MyProvider;
