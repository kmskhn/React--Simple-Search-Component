import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from '../src/Data/Data';
import App from './Container/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App 
    alignicon="right"
    searchOnKey="name"
    dataList= {Data}
    disableicon= "false"
    placeholder="Search for cities in india"
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
