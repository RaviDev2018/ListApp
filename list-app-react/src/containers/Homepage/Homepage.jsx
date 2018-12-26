import React from 'react';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListSummary from '../../components/ListSummary/ListSummary'; 

const Homepage = (props) => (
    <div>
        <ListMenu lists={props.lists} />
        <ListSummary topLists={props.listItems} />
    </div>
);

export default Homepage;
