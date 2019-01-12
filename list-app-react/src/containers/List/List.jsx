import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListItems from '../../components/ListItems/ListItems';
import * as actions from '../../store/action/index';

import './List.css';

export class List extends Component {
    componentDidMount() {
        this.props.onFetchListItems(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <ListMenu lists={this.props.lists} />
                <div className="listPage">
                    <p>{this.props.match.params.id}</p>
                    <ListItems listItems={this.props.items} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.summary.summaryLists,
        items: state.list.items
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchListItems: (listName) => dispatch(actions.fetchListItems(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
