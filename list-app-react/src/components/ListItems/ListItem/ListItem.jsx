import React from 'react';
import { NavLink } from 'react-router-dom';

import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ListItem = (props) => (
    <ListGroupItem variant="dark">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.comment}</p>
        <NavLink to={'/editListItem/'+props.name}>Edit</NavLink>
    </ListGroupItem>
);

export default ListItem;
