import React from 'react';

import ListItem from './ListItem/ListItem';

const ListItems = (props) => (
    <div>
    {Object.keys(props.listItems)
        .map(itemName => {
            return (
                <ListItem
                    key={props.listItems[itemName].id}
                    name={itemName}
                    comment={props.listItems[itemName].comment} />
            )
        })}
    </div>
);

export default ListItems;
