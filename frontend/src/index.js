import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './pages/main/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
  <h1>Calculadora</h1>
  <Calculator />
  </>,
  document.getElementById('root')
);


serviceWorker.unregister();
