import React from 'react';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListItems from '../../components/ListItems/ListItems';

import './List.css';

const List = (props) => (
    <div>
        <ListMenu lists={props.lists} />
        <div className="listPage">
            <p>{props.name}</p>
            <ListItems listItems={props.listItems} />
        </div>
    </div>
);

export default List;
