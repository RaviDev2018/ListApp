import React from 'react';

import './ListItem.css';

const ListItem = (props) => (
    <div className="listItem">
        <div>{props.name}</div>
        <div>{props.comment}</div>
    </div>
);

export default ListItem;
