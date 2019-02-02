import React from 'react';
import { NavLink } from 'react-router-dom';

import './ListItem.css';

const ListItem = (props) => (
    <div className="listItem">
        <NavLink to={'/editListItem/'+props.name}>{props.name}</NavLink>
        <div>{props.comment}</div>
    </div>
);

export default ListItem;
