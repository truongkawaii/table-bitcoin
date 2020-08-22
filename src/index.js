// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line no-unused-vars
import Store from './state/store/store';

ReactDOM.render(

  <Store>
    <App />
  </Store>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();