import React, { useMemo, useCallback, useState } from 'react';

const Memoized = () => {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState('');
  //
  //
  // lets imagine this function is super expensive to calculate
  // running it every time state changes is a bad idea
  // we can memoize it with hook and add [parameter] it depends on
  //
  const calculate = (num) => {
    console.log('EXPENSIVE FUNCTION');
    return num * 2;
  };
  // value we're going to render
  // with a current setup itll recalculate itself every time we type something in the input box
  const toRender = calculate(number);

  // uncomment the one bellow and comment out the one above
  // now the 'calculate' function will only run if 'number' changes
  // const toRender = useMemo(() => calculate(number), [number]);

  const handleClick = (e) => {
    setNumber(Math.round(Math.random() * 100));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      <h1>{toRender}</h1>
      <button type="button" onClick={handleClick}>
        Change Number
      </button>
      <label htmlFor="input">Just to trigger render</label>
      <input name="input" value={value} onChange={handleChange} />
    </div>
  );
};

export default Memoized;
