import React, { Component } from 'react';

import ListItem from './ListItem/ListItem';

import ListGroup from 'react-bootstrap/ListGroup';

export class ListItems extends Component {
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
                                                    comment={this.props.listItems[itemName].comment} />
                                            )
                                        })}
                                </ListGroup>
        }

        return listItemsDisplay;
    }
}

export default ListItems;
