import React, { useState, useEffect } from 'react';
//
// custom hook to run reusable and important functionality!
//
// custom hooks are just functions that have access to useState/useEffect and such...
//
//
const useYourBrain = (data) => {
  // initial state
  const [iq, setIq] = useState(null);
  // on every change we will recalculate the 'value' if iq provided
  useEffect(() => {
    if (data.length) {
      if (+data > 120) {
        setIq('high');
      } else {
        setIq('not high');
      }
    }
  });
  return iq;
};
export default useYourBrain;
