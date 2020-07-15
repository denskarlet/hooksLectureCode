/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import styles from './styles.css';
import BasicForm from './components/BasicForm.jsx';
import LongerForm from './components/LongerForm.jsx';
import LongerFormButBetter from './components/LongerFormButBetter.jsx';
import UseReducer from './components/UseReducer.jsx';
import FlagAndConditions from './components/FlagAndConditions.jsx';
import EffectSample from './components/EffectSample.jsx';
import StaleState from './components/StaleState.jsx';
import UseContext from './components/UseContext.jsx';
import UseContext2 from './components/UseContext2.jsx';
import UseCustomHook from './components/CustomHookDemo.jsx';
import Memoized from './components/MemoCallback.jsx';

import LocalContext from './context.jsx';

const App = () => {
  const [active, setActive] = useState('');
  const handleClick = (e) => {
    const { id } = e.target;
    return setActive(+id);
  };
  const components = {
    BasicForm,
    LongerForm,
    LongerFormButBetter,
    FlagAndConditions,
    EffectSample,
    UseReducer,
    StaleState,
    UseContext,
    UseContext2,
    Memoized,
    UseCustomHook,
  };

  const buttonElems = Object.keys(components).map((elem, index) => {
    return (
      <Link style={{ maxWidth: '150px' }} key={`link${index}`} to={elem}>
        <button
          style={
            index === active
              ? { color: 'red', width: '150px', margin: '10px 10px 10px 20px' }
              : { width: '150px', margin: '10px 10px 10px 10px' }
          }
          onClick={handleClick}
          id={index}
          type="button"
        >
          {elem}
        </button>
      </Link>
    );
  });
  const routes = Object.entries(components).map(([key, value], index) => {
    return <Route exact path={`/${key}`} component={value} key={`route${index}`} />;
  });
  return (
    <>
      <div
        style={{
          padding: '10px',
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          width: '700px',
          justifyContent: 'space-between',
        }}
      >
        {buttonElems}
      </div>
      <Switch>{routes}</Switch>
    </>
  );
};

export default App;
