import React, { Component } from 'react';
import HomePage from './containers/Homepage/Homepage'
import './App.css';

class App extends Component {
  state = {
    menuData: [],
    listData: []
  }

  componentDidMount() {
    this.setUpMenuTestData();
    this.setUpListTestData();
  }

  setUpMenuTestData() {
    let menuData = [];

    for(let i = 1; i <= 5; i++) {
      menuData.push({id: i, name: "list " + i});
    }

    this.setState({menuData: menuData});
  }

  setUpListTestData() {
    let listData = [];
    let listItemsData = [];

    for(let i = 1; i <= 5; i++) {
      listItemsData.push({id: i, name: "item " + i, comment: "test " + i});
    }

    for(let i = 1; i <= 5; i++) {
      listData.push({id: i, name: "list " + i, listItems: listItemsData});
    }

    this.setState({listData: listData});
  }

  render() {
    return (
      <HomePage lists={this.state.menuData} listItems={this.state.listData} />
    );
  }
}

export default App;
