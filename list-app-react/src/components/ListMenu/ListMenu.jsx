import React from 'react';

import ListMenuItem from './ListMenuItem/ListMenuItem';
import './ListMenu.css';

const ListMenu = (props) => (
    <div className="listMenu">
        {props.lists.map(list => (
            <ListMenuItem key={list.id} listName={list.name} />
        ))}
    </div>
);

export default ListMenu;
