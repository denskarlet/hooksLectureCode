import React, { useState } from 'react';

const FlagAndConditions = () => {
  const [flag, toggleFlag] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    toggleFlag(!flag);
  };
  return (
    <div>
      <h1>Flag & Condition</h1>
      <button type="button" onClick={handleClick}>
        Show me more...
      </button>
      {flag && <div>Surprise, motherfucker!</div>}
    </div>
  );
};

export default FlagAndConditions;
