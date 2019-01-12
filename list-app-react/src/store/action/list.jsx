import * as actionTypes from './actionTypes';
import axios from '../../axios-setup';

export const addListItem = (name, comment) => {
    return {
        type: actionTypes.ADD_LIST_ITEM,
        name: name,
        comment: comment
    };
};

export const removeListItem = (id) => {
    return {
        type: actionTypes.REMOVE_LIST_ITEM,
        listItemId: id
    };
};

export const setListItems = (items) => {
    return {
        type: actionTypes.SET_LIST_ITEMS,
        items: items
    };
};

export const fetchListItems = (listName) => {
    return dispatch => {
        axios.get('lists.json?orderBy="$key"&equalTo="'+listName+'"')
            .then(response => {
                dispatch(setListItems(response.data[listName].items));
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const fetchListItemsFailed = () => {
    return {
        type: actionTypes.FETCH_LIST_ITEMS_FAILED
    };
};