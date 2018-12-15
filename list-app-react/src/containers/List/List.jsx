import React from 'react';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListItems from '../../components/ListItems/ListItems';

const List = (props) => (
    <div>
        <ListMenu lists={props.lists} />
        <p>{props.name}</p>
        <ListItems listItems={props.listItems} />
    </div>
);

export default List;
