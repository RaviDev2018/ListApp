import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const ListMenuItem = (props) => (
    <Nav.Item>
        <Nav.Link as={NavLink} to={'/List/' + props.listName}>
            {props.listName}
        </Nav.Link>
    </Nav.Item>
);

export default ListMenuItem;
