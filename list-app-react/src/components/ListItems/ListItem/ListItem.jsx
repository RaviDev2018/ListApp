import React from 'react';

const ListItem = (props) => (
    <div>
        <div>{props.name}</div>
        <div>{props.comment}</div>
    </div>
);

export default ListItem;
