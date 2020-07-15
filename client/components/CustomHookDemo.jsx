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
  // const func = () => {
  //   console.log('asd');
  // };
  // const memoFunc = useCallback(() => func(), []);

  return (
    <form>
      <input value={value} placeholder="Enter your IQ" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Submit
      </button>
      <MemoInner iq={iq} />
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

const MemoInner = React.memo(InnerComponent);

export default UseCustomHook;
