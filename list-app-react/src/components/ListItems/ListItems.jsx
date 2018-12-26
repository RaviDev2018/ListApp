import React from 'react';

import ListItem from './ListItem/ListItem';

const ListItems = (props) => (
    <div>
        {props.listItems.map(item => (
            <ListItem
                key={item.id}
                name={item.name}
                comment={item.comment} />
        ))}
    </div>
);

export default ListItems;
