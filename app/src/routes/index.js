import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Albums from '../components/Albums';
import Album from '../components/Album';

const Routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/search/results/:value" component={Albums}></Route>
      <Route exact path="/album/:name" component={Album}></Route>
      <Route render={() => <Redirect to='/' />}></Route>
    </Switch>
  </Router>
)

export default Routes