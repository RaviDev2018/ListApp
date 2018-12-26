import React from 'react';

import ListItems from '../ListItems/ListItems';
import './ListSummary.css';

const ListSummary = (props) => (
    <div className="listSummaryPage">
        {props.topLists.map(list => (
            <div key={list.id} className="listSummary">
                <p>{list.name}</p>
                <ListItems listItems={list.listItems} />
            </div>
        ))}
    </div>
);

export default ListSummary;
