import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/Homepage/Homepage';
import List from './containers/List/List';
import NewList from './components/UI/Modals/NewList/NewList';
import NewListItem from './components/UI/Modals/NewListItem/NewListItem';
import EditListItem from './components/UI/Modals/EditListItem/EditListItem';
import ListMenu from './components/ListMenu/ListMenu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ListMenu lists={this.props.names} />
        <Switch>
          <Route path="/List/:id" component={List} />
          <Route path="/editListItem/:id" component={EditListItem} />
          <Route path="/NewList" component={NewList} />
          <Route path="/NewListItem" component={NewListItem} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      names: state.summary.listNames
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
