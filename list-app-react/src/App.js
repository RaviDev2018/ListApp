import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/Homepage/Homepage';
import List from './containers/List/List';
import NewList from './components/UI/Modals/NewList/NewList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/List/:id" component={List} />
        <Route path="/NewList" component={NewList} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    );
  }
}

export default withRouter(connect(null, null)(App));
