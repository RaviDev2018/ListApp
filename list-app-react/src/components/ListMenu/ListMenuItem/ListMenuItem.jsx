import React from 'react';
import { NavLink } from 'react-router-dom';

const ListMenuItem = (props) => (
    <NavLink to={'/List/' + props.listName}>{props.listName}</NavLink>
);

export default ListMenuItem;
