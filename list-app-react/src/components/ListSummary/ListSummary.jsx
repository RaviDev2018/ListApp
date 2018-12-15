import React from 'react';

import ListItems from '../ListItems/ListItems';

const ListSummary = (props) => (
    <div>
        {props.topLists.map(list => (
            <div>
                <p>{list.name}</p>
                <ListItems listItems={list.listItems} />
            </div>
        ))}
    </div>
);

export default ListSummary;
