import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import data from './constants/data';
import App from './components/App'

import FluffyFriends from './components/FluffyFriends'





ReactDOM.render(
  <App petData={data} />,
  document.getElementById('app')
  );
  
