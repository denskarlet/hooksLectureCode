import React, { useState, useContext } from 'react';
import LocalContext from '../context.jsx';

const UseContext2 = () => {
  const [language, data, setLanguage] = useContext(LocalContext);
  const prettyJSON = JSON.stringify(data, null, 2);
  // this component just renders provided data from the context
  // its here to shows that when you change the context in UseContext.jsx - it'll be reflected here as well
  // context is gloooooabal and it will cause rerender of every component that is 'subscribed' to it
  return (
    <div>
      <pre>{prettyJSON}</pre>
    </div>
  );
};
export default UseContext2;
