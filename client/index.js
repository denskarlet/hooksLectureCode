import { BrowserRouter as Router } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import LocalContext from './context.jsx';

const localization = {
  english: {
    question: 'what the f*ck?',
    answer: 'dope sh*t',
    suggestion: 'go f*ck yourself',
  },
  russian: {
    question: 'что за херня?',
    answer: 'ахеренное дерьмо',
    suggestion: 'иди нах*й',
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
