import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data';
import App from './components/App'

import FluffyFriends from './components/FluffyFriends'

// <App animals={data} />
ReactDOM.render(
  <FluffyFriends saying="Hi everyone, I'm Bob. And I need some hugs" />, 
  document.getElementById('app')
  );
  
