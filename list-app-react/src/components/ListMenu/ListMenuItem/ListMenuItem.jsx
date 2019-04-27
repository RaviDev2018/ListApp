import React from 'react';

import Nav from 'react-bootstrap/Nav';

const ListMenuItem = (props) => (
    <Nav.Link href={'/List/' + props.listName}>{props.listName}</Nav.Link>
);

export default ListMenuItem;
