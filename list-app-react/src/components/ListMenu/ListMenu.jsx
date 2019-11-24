import React from 'react';
import { NavLink } from 'react-router-dom';

import ListMenuItem from './ListMenuItem/ListMenuItem';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ListMenu = (props) => (
    <Navbar bg="dark" variant="dark">
        <Nav defaultActiveKey="/" className="flex-column" variant="pills" style={{width: "100%"}}>
            <Nav.Item>
                <Nav.Link as={NavLink} to={'/'} exact>Home</Nav.Link>
            </Nav.Item>
            {Object.keys(props.lists).map((listId) => (
                <ListMenuItem key={listId} listName={props.lists[listId]} listId={listId} />
            ))}
        </Nav>
    </Navbar>
);

export default ListMenu;
