import React, { useState, useEffect } from 'react';

function LifecycleB() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component did mount');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
  }, [counter]);

  console.log('Render called');

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>
    </div>
  );
}

export default LifecycleB;
