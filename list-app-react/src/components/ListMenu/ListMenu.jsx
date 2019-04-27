import React from 'react';

import ListMenuItem from './ListMenuItem/ListMenuItem';

import Nav from 'react-bootstrap/Nav';

const ListMenu = (props) => (
    <Nav defaultActiveKey="/newList" className="flex-column">
        <Nav.Link href={'/newList'}>Add new list</Nav.Link>
        {props.lists.map(list => (
            <ListMenuItem key={list.id} listName={list.name} />
        ))}
    </Nav>
);

export default ListMenu;
