import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/action/index';

import ListItem from './ListItem/ListItem';

import ListGroup from 'react-bootstrap/ListGroup';

export class ListItems extends Component {
    handleItemClick = (itemName) => {
        if(this.props.isItemClickable) {
            this.props.onToggleEditListItem(true);
        }
    }

    render() {
        let listItemsDisplay = null;
        if(this.props.listItems !== undefined && Object.keys(this.props.listItems).length) {
            listItemsDisplay = <ListGroup className="list-group-flush">
                                        {Object.keys(this.props.listItems)
                                        .map(itemName => {
                                            return (
                                                <ListItem
                                                    key={this.props.listItems[itemName].id}
                                                    name={itemName}
                                                    comment={this.props.listItems[itemName].comment} 
                                                    itemClick={this.handleItemClick} />
                                            )
                                        })}
                                </ListGroup>
        }

        return listItemsDisplay;
    }
}

const mapStateToProps = state => {
    return {
        showEditListItem: state.list.showEditListItem
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleEditListItem: (toggleEditListItem) => dispatch(actions.toggleEditListItem(toggleEditListItem))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItems));
