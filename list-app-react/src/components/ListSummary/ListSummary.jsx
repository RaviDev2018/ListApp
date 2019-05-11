import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItems from '../ListItems/ListItems';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const ListSummary = (props) => (
    <CardDeck>
        {props.topLists.map(list => (
            <Card key={list.id} bg="dark" text="white" style={{textDecoration: "none"}}
            as={NavLink} to={'/List/' + list.name}>
                <Card.Header>{list.name}</Card.Header>
                <ListItems listItems={list.items} />
            </Card>
        ))}
    </CardDeck>
);

export default ListSummary;
