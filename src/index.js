import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/index.scss';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// https://bit.ly/CRA-vitals
reportWebVitals();
