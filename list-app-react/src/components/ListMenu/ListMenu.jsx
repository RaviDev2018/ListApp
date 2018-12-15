import React from 'react';

import ListMenuItem from './ListMenuItem/ListMenuItem';

const ListMenu = (props) => (
    <div>
        {props.lists.map(list => (
            <ListMenuItem listName={list.name} />
        ))}
    </div>
);

export default ListMenu;
