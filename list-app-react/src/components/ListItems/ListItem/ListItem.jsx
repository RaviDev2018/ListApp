import React from 'react';

import ListGroupItem from 'react-bootstrap/ListGroupItem';

const ListItem = (props) => (
    <ListGroupItem variant="dark">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.comment}</p>
    </ListGroupItem>
);

export default ListItem;
