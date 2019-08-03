import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/action/index';

import ListItem from './ListItem/ListItem';

import ListGroup from 'react-bootstrap/ListGroup';

export class ListItems extends Component {
    handleItemClick = (itemId) => {
        if(this.props.isItemClickable) {
            this.props.onToggleEditListItem(true, itemId);
        }
    }

    render() {
        let listItemsDisplay = null;
        if(this.props.listItems !== undefined && Object.keys(this.props.listItems).length) {
            listItemsDisplay = <ListGroup className="list-group-flush">
                                        {Object.keys(this.props.listItems)
                                        .map((itemId) => {
                                            return (
                                                <ListItem
                                                    key={itemId}
                                                    name={this.props.listItems[itemId].name}
                                                    comment={this.props.listItems[itemId].comment} 
                                                    itemClick={this.handleItemClick} 
                                                    itemId={itemId} />
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
        onToggleEditListItem: (toggleEditListItem, itemId) => dispatch(actions.toggleEditListItem(toggleEditListItem, itemId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItems));
