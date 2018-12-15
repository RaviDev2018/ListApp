import React from 'react';

import ListItem from './ListItem/ListItem';

const ListItems = (props) => (
    <div>
        {props.listItems.map(item => (
            <ListItem
                name={item.name}
                comment={item.comment} />
        ))}
    </div>
);

export default ListItems;
