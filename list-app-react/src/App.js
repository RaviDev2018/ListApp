import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './containers/Homepage/Homepage';
import List from './containers/List/List';
import NewList from './components/UI/Modals/NewList/NewList';
import NewListItem from './components/UI/Modals/NewListItem/NewListItem';
import EditListItem from './components/UI/Modals/EditListItem/EditListItem';
import ListMenu from './components/ListMenu/ListMenu';
import NewListModal from './components/UI/Modals/NewList/NewList';

import * as actions from './store/action/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={2}>
            <ListMenu lists={this.props.names} />
            <Button block variant="dark" onClick={() => this.props.onToggleNewList(true)}>Add new list</Button>
          </Col>
          <Col xs={10}>
            <Switch>
              <Route path="/List/:id" component={List} />
              <Route path="/editListItem/:id" component={EditListItem} />
              <Route path="/NewList" component={NewList} />
              <Route path="/NewListItem" component={NewListItem} />
              <Route path="/" exact component={HomePage} />
            </Switch>
          </Col>
        </Row>
        <NewListModal></NewListModal>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      names: state.summary.listNames
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onToggleNewList: (toggleNewList) => dispatch(actions.toggleNewList(toggleNewList))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
