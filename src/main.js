import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import animalData from './constants/data';
import App from './components/App'

ReactDOM.render(
  <App
    data={animalData}
  />, 
  document.getElementById('app')
);
