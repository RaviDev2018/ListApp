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
            <Nav.Item>
                <Nav.Link as={NavLink} to={'/newList'}>Add new list</Nav.Link>
            </Nav.Item>
            {props.lists.map(list => (
                <ListMenuItem key={list.id} listName={list.name} />
            ))}
        </Nav>
    </Navbar>
);

export default ListMenu;
