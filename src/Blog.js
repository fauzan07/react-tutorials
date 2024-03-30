import React, { useContext } from 'react';
import Context from './Context';
import MyContext from './Context';

const Blog = () => {

  // const value = useContext(MyContext)
  
  return (
    <>
    <h2>this is my blog</h2>
    {/* <Context.Consumer>
      {value => <h1>{value.data}</h1>}
    </Context.Consumer> */}
    {/* {value.MyData} */}
    </>
  );
}

export default Blog