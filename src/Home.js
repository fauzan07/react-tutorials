import React from 'react';
import About from './About';
import Contact from './Contact';
import styles from './Home.module.css'


const Home = () => {
  
  return (
    <>
      <h1 className={styles["apply-red"]}>Hello Home !</h1>
      {/* <About name={"danish"} age={"23"}/> */}
      <Contact/>
    </>
  );
}

export default Home