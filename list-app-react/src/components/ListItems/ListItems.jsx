import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItem from './ListItem/ListItem';

import ListGroup from 'react-bootstrap/ListGroup';

export class ListItems extends Component {
    handleItemClick = (itemName) => {
        if(this.props.isItemClickable) {
            this.props.history.push('/editListItem/'+itemName);
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

export default withRouter(connect(null, null)(ListItems));
