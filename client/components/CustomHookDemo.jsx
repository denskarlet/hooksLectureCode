import React, { useState, useCallback } from 'react';
import useYourBrain from './CustomHook.jsx';

const UseCustomHook = () => {
  const [value, setValue] = useState('');
  const [iq, setIq] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setIq(value);
  };
  /* Right now every time we type anything it changes our state thus runs this component which causes InnerComponent
  to be rendered over and over again despite not being changed(console.log will prove it).
  On line 36 change InnerComponent with MemoInner and scroll down to line 59 where i have it declared.
  React.memo will remember the component and will only re-render it if props has changed! Since InnerComponent only
  relies on [iq] it will get re-rendered when [iq] changes.

  After you ensured that our console.log doesnt run like crazy anympore - grab function from line 53 and place it
  inside of 'UseCustomHook' component(anywhere before the return), and then pass 'func' as a prop
  to MemoInner - itll start getting re-rendered again!
  Why? Because on each render of 'UseCustomHook' our 'func' is redeclared and gets a new 'address' in memory,
  thus react will think its a new function and re-render memoized component.
  In order to fix it:
  Grab memoized version of this function from line 57, place it inside of component and pass it as prop to 'memoInner' instead.
  INFO: useCallback hook, just like useMemo, memoizes a value. Except the value is a function now.
  first argument to useCallback is a function that invokes our func, second - array of dependencies(when they change - react will redeclare the func)
  Now re-renders stopped again, no more 'new address' for func, so 'old props' === 'new props', meaning react doesnt recalculate the component:) */
  return (
    <form>
      <input value={value} placeholder="Enter your IQ" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
      <InnerComponent iq={iq} />
    </form>
  );
};

const InnerComponent = (props) => {
  const { iq } = props;
  console.log('Im running');
  const result = useYourBrain(iq);
  return (
    <div>
      Result:
      {result}
    </div>
  );
};

// const func = () => {
//   console.log('asd');
// };

// const memoFunc = useCallback(() => func(), []);

const MemoInner = React.memo(InnerComponent);

export default UseCustomHook;
