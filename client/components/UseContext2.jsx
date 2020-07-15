import React, { useState, useContext } from 'react';
import LocalContext from '../context.jsx';

const UseContext2 = () => {
  const [language, data, setLanguage] = useContext(LocalContext);
  const prettyJSON = JSON.stringify(data, null, 2);

  return (
    <div>
      <pre>{prettyJSON}</pre>
    </div>
  );
};
export default UseContext2;
