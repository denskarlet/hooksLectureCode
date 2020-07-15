import { BrowserRouter as Router } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LocalContext from './context.jsx';
// state we want to shate with entire component tree
const localization = {
  english: {
    question: 'what the hell?',
    answer: 'dope stuff',
    suggestion: 'go away plz',
  },
  russian: {
    question: 'что за херня?',
    answer: 'крутая фигня',
    suggestion: 'уйди отсюда',
  },
};
// just a wrapper component to provide App with context
const Wrapper = () => {
  // default language is now 'english', setLanguage is a function to change the language
  const [language, setLanguage] = useState('english');
  return (
    // wrap App with context provider, value={} is what we can now access from anywhere
    // what language, piece of localization under the key of the language, and a function to change context.
    <LocalContext.Provider value={[language, localization[language], setLanguage]}>
      <App />
    </LocalContext.Provider>
  );
};
// render wrapper component that will render app ^
ReactDOM.render(
  <Router>
    <Wrapper />
  </Router>,
  document.getElementById('root')
);
