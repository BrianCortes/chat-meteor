import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import '../imports/startup/accounts-config.js';

import Login from '../imports/ui/login.jsx'
import App from '../imports/ui/App.jsx'

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ Login } />
      <Route path="/home" component={ App } />
    </Router>, 
    document.getElementById('render-target')
  );
});