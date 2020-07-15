import React, { useState, useEffect, useRef, useReducer } from 'react';

const StaleProps = () => {
  // state #1
  const [count, setCount] = useState(0);
  // state #2
  const [randomNum, setRandomNum] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    console.log('i run....');
    function myFunc() {
      // update both states at the same time
      console.log('I run, thus both states are being updated');
      //
      console.log(ref.current);
      setCount(count + 1);
      //
      setRandomNum(Math.random());
    }

    const intervalCounter = setInterval(myFunc, 1000);
    // cleaning function that will clear the interval when component unmounts
    return () => clearInterval(intervalCounter);
  }, []);
  //
  // why did it happen? closures! count inside of our callback is always 0...
  // so it goes from 0 to 1... and from 0 to 1... and from 0 to 1...
  //
  // how to fix? pass count into dependency array (I find it a bit weird)
  // use function inside of update function: on line 14: setCount((count) => count + 1)
  // dont use dependency array... <-- bad practice
  // use eslint plugin from React team, it'll let you know if you f*cked it up
  //
  return (
    <>
      <p>
        Count:
        {count}
      </p>
      <p>
        Random:
        {randomNum}
      </p>
    </>
  );
};

export default StaleProps;
