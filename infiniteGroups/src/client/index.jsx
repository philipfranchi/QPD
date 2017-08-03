import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './resources/css/index.scss';

import Home from './resources/js/Home.jsx';
import About from './resources/js/About.jsx';
import Login from './resources/js/Login.jsx';

render((
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
), document.getElementById('app'));