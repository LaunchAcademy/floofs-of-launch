import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import animals from './constants/data';
import App from './components/App'

import FluffyFriends from './components/FluffyFriends'

ReactDOM.render(
  <FluffyFriends saying="I LOVE YOU"/>, 
  document.getElementById('app')
  );
  
