import React, { useState } from 'react';

const LongerForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [fuck, setFuck] = useState('');
  //
  // clearly repetative and not pretty
  //
  const handleClick = (e) => {
    e.preventDefault();
    // construct and object from all the state values
    const obj = { name, lastname, email, fuck };
    console.log(obj);
  };
  //
  // handle each piece with a separate function
  // don't ever talk about DRY principle anymore
  //
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFuck = (e) => {
    setFuck(e.target.value);
  };

  return (
    <div>
      <h1>Long form(shitty)</h1>
      <form>
        <input
          autoComplete="off"
          value={name}
          onChange={handleName}
          placeholder="name"
          name="name"
        />
        <input
          autoComplete="off"
          value={lastname}
          onChange={handleLastName}
          placeholder="lastname"
          name="lastname"
        />
        <input
          autoComplete="off"
          value={email}
          onChange={handleEmail}
          placeholder="email"
          name="email"
        />
        <input
          autoComplete="off"
          value={fuck}
          onChange={handleFuck}
          placeholder="fuck"
          name="fuck"
        />

        <button onClick={handleClick} type="button">
          Print the name!
        </button>
      </form>
      <div>
        Name:
        {name}
      </div>
      <div>
        Lastname:
        {lastname}
      </div>
      <div>
        Email:
        {email}
      </div>
      <div>
        Fuck:
        {fuck}
      </div>
    </div>
  );
};

export default LongerForm;
