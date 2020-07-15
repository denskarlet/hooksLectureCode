import React, { useState } from 'react';

const BasicForm = () => {
  const [name, setName] = useState('');
  const handleClick = (e) => {
    e.preventDefault();

    if (!name) return;

    console.log('The name we would send:', name);

    setName('');
  };
  //
  //
  const handleChange = (e) => {
    // e == SyntheticEvent = BigAssObject == everything about the element that triggered the 'event'
    setName(e.target.value);
  };
  return (
    <>
      <h1>Form 1</h1>
      <form>
        <input
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="Name"
          name="name"
        />
        <button onClick={handleClick} type="button">
          Print the name!
        </button>
      </form>
      <div>
        Current state:
        <br />
        {name}
      </div>
    </>
  );
};

export default BasicForm;
