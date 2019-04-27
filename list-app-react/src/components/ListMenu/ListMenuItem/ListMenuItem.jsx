import React from 'react';

import Nav from 'react-bootstrap/Nav';

const ListMenuItem = (props) => (
    <Nav.Item>
        <Nav.Link href={'/List/' + props.listName}>{props.listName}</Nav.Link>
    </Nav.Item>
);

export default ListMenuItem;
