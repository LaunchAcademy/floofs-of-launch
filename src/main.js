import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

import animals from './constants/data';

import FluffyFriends from './components/FluffyFriends'

ReactDOM.render(
  <App data={animals}/>, 
  document.getElementById('app')
  );
  
