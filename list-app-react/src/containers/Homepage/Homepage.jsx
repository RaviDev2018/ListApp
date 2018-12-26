import React from 'react';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListSummary from '../../components/ListSummary/ListSummary'; 

const Homepage = (props) => (
    <div>
        <ListMenu lists={props.lists} className={"listMenu"} />
        <ListSummary topLists={props.listItems} className={"listSummary"} />
    </div>
);

export default Homepage;
