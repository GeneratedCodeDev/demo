import React from 'react';
import ReactDOM from 'react-dom';
import { CroodsProvider } from 'croods';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
