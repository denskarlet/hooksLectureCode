import { BrowserRouter as Router } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LocalContext from './context.jsx';

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
const Wrapper = () => {
  const [language, setLanguage] = useState('english');
  return (
    <LocalContext.Provider value={[language, localization[language], setLanguage]}>
      <App />
    </LocalContext.Provider>
  );
};
ReactDOM.render(
  <Router>
    <Wrapper />
  </Router>,
  document.getElementById('root')
);
