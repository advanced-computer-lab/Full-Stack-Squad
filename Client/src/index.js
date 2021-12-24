import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoginProvider } from 'Contexts/LoginContext';
ReactDOM.render(
  <LoginProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </LoginProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

