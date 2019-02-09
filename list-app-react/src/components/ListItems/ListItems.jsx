import React, { Component } from 'react';

import ListItem from './ListItem/ListItem';

export class ListItems extends Component {
    render() {
        let listItemsDisplay = null;
        if(this.props.listItems !== undefined && Object.keys(this.props.listItems).length) {
            listItemsDisplay = <div>
                                    {Object.keys(this.props.listItems)
                                    .map(itemName => {
                                        return (
                                            <ListItem
                                                key={this.props.listItems[itemName].id}
                                                name={itemName}
                                                comment={this.props.listItems[itemName].comment} />
                                        )
                                    })}
                                </div>
        }

        return listItemsDisplay;
    }
}

export default ListItems;
