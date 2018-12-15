import React from 'react';

const ListItemInfo = (props) => (
    <div>
        <div>
            <input type='input' value={props.name} />
            <input type='input' value={props.comment} />
        </div>
        <div>
            <button>Save</button>
            <button>Cancel</button>
        </div>
    </div>
);

export default ListItemInfo;
