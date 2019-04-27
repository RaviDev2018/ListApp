import React from 'react';

import ListMenuItem from './ListMenuItem/ListMenuItem';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ListMenu = (props) => (
    <Navbar bg="dark" variant="dark">
        <Nav defaultActiveKey="/newList" className="flex-column" variant="pills" style={{width: "100%"}}>
            <Nav.Item>
                <Nav.Link href={'/newList'}>Add new list</Nav.Link>
            </Nav.Item>
            {props.lists.map(list => (
                <ListMenuItem key={list.id} listName={list.name} />
            ))}
        </Nav>
    </Navbar>
);

export default ListMenu;
