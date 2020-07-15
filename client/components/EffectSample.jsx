import React, { useState, useEffect } from 'react';

const EffectSample = () => {
  const [someState, setSomeState] = useState(0);
  const [moreState, setMoreState] = useState(0);
  const [counter, setCounter] = useState(0);
  //
  // this one only runs on initial mount, empty array is an array of 'dependencies'
  // so if one of those change - it runs
  // empty array will never have any of its elements change
  //
  useEffect(() => {
    console.log('I dont give a ****, dont even try, I only run once.');
  }, []);
  //
  //
  // every time component updates(new state) we invoke run this console.log
  //
  // if we set state inside of this useEffect call => we are totally fucked.
  //
  useEffect(() => {
    console.log('I RUN ALL THE TIME BUT I HATE CARDIO');
    // setCounter(counter + 1);
    // dont change state here, we dont want infinite loops, do we?
  });
  //
  //
  // now we add some state our useEffect is looking at
  // it will only run if 'moreState' changes
  //
  useEffect(() => {
    console.log('I only give a damn about my piece of state');
  }, [moreState]);
  //
  //
  //
  // this one is really cool, it runs when you unmount the component
  // why? imagine you made a fetch request but before it got resolved - you closed the component
  // following best practices you want to let the browser know to cancel that request
  // so this is a perfect place to run this type of functionality
  //
  //
  useEffect(() => {
    return () => {
      console.log('Get out I need to clean this mess');
      // cancel unfinished fetches
    };
  }, []);

  const handleClick1 = (e) => {
    e.preventDefault();
    setSomeState(Math.floor(Math.random() * 100));
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    setMoreState(Math.floor(Math.random() * 100));
  };
  return (
    <div className="effect1">
      <h1>{someState}</h1>
      <h1>{moreState}</h1>
      <button type="button" onClick={handleClick1}>
        Cardio trigger.
      </button>
      <button type="button" onClick={handleClick2}>
        Change the target state.
      </button>
    </div>
  );
};

export default EffectSample;
