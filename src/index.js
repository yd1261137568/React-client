
import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/" component={Main}/>
    </Switch>
  </HashRouter>
  , document.getElementById('root'));



