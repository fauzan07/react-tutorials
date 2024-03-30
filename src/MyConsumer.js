import React from "react";
const MyContext = React.createContext();


// class MyConsumer extends React.Component {
//     render() {
//       return (
//         <div>
//           <h2>Class Component</h2>
//           {/* Step 4: Use the context */}
//           <MyContext.Consumer>
//             {data => <p>Data from context: {data}</p>}
//           </MyContext.Consumer>
//         </div>
//       );
//     }
//   }

  const MyConsumer = () => {
    const data = useContext(MyContext);
  
    return (
      <div>
        <h2>Function Component</h2>
        <p>Data from context: {data}</p>
      </div>
    );
  };

export default MyConsumer;
