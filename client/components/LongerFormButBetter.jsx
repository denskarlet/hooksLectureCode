import React, { useState } from 'react';

const LongerFormButBetter = () => {
  //
  // make initial state 'bigger'
  //
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    email: '',
    fuck: '',
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Current value of state:', userData);
    //
    // you would make fetch with body of 'userData'
    //
    // clear the forms by defaulting the state
    //
    setUserData({
      name: '',
      lastname: '',
      email: '',
      fuck: '',
    });
  };

  const handleChange = (e) => {
    //
    // to know which input field sent the data - access 'name' property on the form
    //
    const { name, value } = e.target;
    //
    // some spreading p*rn
    //
    setUserData({ ...userData, [name]: value });
  };
  //
  //
  // if you ever need to render json in a readable format:
  //
  const prettyJSON = JSON.stringify(userData, null, 2);
  //
  //
  return (
    <div>
      <h1>Long form</h1>
      <form>
        <input
          autoComplete="off"
          value={userData.name}
          onChange={handleChange}
          placeholder="name"
          name="name"
        />
        <input
          autoComplete="off"
          value={userData.lastname}
          onChange={handleChange}
          placeholder="lastname"
          name="lastname"
        />
        <input
          autoComplete="off"
          value={userData.email}
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
        <input
          autoComplete="off"
          value={userData.fuck}
          onChange={handleChange}
          placeholder="fuck"
          name="fuck"
        />

        <button onClick={handleClick} type="button">
          Print the name!
        </button>
      </form>
      <pre>{prettyJSON}</pre>
    </div>
  );
};

export default LongerFormButBetter;
