import React, { useState, useContext } from 'react';
import LocalContext from '../context.jsx';

const UseContext = () => {
  //
  // desctructure the context
  // language is 'english' data is 'piece of localization', setLanguage is an update function
  const [language, data, setLanguage] = useContext(LocalContext);
  //
  const prettyJSON = JSON.stringify(data, null, 2);
  //
  const handleSwitch = (e) => {
    return language === 'english' ? setLanguage('russian') : setLanguage('english');
  };
  return (
    <div>
      <pre>{prettyJSON}</pre>
      <button onClick={handleSwitch} type="button">
        Switch
      </button>
    </div>
  );
};
export default UseContext;
