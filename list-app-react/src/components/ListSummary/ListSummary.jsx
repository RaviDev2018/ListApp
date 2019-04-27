import React from 'react';

import ListItems from '../ListItems/ListItems';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const ListSummary = (props) => (
    <CardDeck>
        {props.topLists.map(list => (
            <Card key={list.id} bg="dark" text="white">
                <Card.Header>{list.name}</Card.Header>
                <ListItems listItems={list.items} />
            </Card>
        ))}
    </CardDeck>
);

export default ListSummary;
