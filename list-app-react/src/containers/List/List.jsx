import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListItems from '../../components/ListItems/ListItems';
import * as actions from '../../store/action/index';

import './List.css';

export class List extends Component {
    componentDidMount() {
        this.props.onFetchListItems(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.isListRemoved) {
            this.props.history.push('/');
        }
    }

    render() {
        let listItemsDisplay = null;
        if(this.props.items !== undefined && Object.keys(this.props.items).length) {
            listItemsDisplay = <ListItems listItems={this.props.items} />;
        }

        return (
            <div>
                <ListMenu lists={this.props.lists} />
                <div className="listPage">
                    <p>{this.props.match.params.id}</p>
                    {listItemsDisplay}
                </div>
                <NavLink to={'/newListItem'}>Add new list item</NavLink>
                <span onClick={() => this.props.onRemoveList(this.props.match.params.id)}>Delete list</span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.summary.summaryLists,
        items: state.list.items,
        isListRemoved: state.summary.isListRemoved
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchListItems: (listName) => dispatch(actions.fetchListItems(listName)),
        onRemoveList: (listName) => dispatch(actions.removeList(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
