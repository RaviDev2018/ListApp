import React from 'react';
import { NavLink } from 'react-router-dom';

import ListMenuItem from './ListMenuItem/ListMenuItem';
import './ListMenu.css';

const ListMenu = (props) => (
    <div className="listMenu">
        <NavLink to={'/newList'}>Add new list</NavLink>
        {props.lists.map(list => (
            <ListMenuItem key={list.id} listName={list.name} />
        ))}
    </div>
);

export default ListMenu;
