import * as actionTypes from './actionTypes';
import axios from '../../axios-setup';

export const addListItem = (listName, newListItem, isAppendingItem) => {
    let newListUrl = 'lists/'+listName+'.json';
    if(isAppendingItem) {
        newListUrl = 'lists/'+listName+'/items.json';
    }

    return dispatch => {
        axios.patch(newListUrl, newListItem)
            .then(response => {
                dispatch(addedListItem(newListItem, isAppendingItem));
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const addedListItem = (newListItem, isAppendingItem) => {
    return {
        type: actionTypes.ADD_LIST_ITEM,
        newListItem: newListItem,
        isAppendingItem: isAppendingItem
    };
};

export const removeListItem = (listName, listItemName, newListItem) => {
    return dispatch => {
        axios.delete('lists/'+listName+'/items/'+listItemName+'.json')
            .then(response => {
                if(newListItem != null) {
                    dispatch(addListItem(listName, newListItem, true));
                } else {
                    dispatch(removedListItem());
                }
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const removedListItem = () => {
    return {
        type: actionTypes.REMOVE_LIST_ITEM
    };
};

export const setListItems = (items, listName) => {
    return {
        type: actionTypes.SET_LIST_ITEMS,
        items: items,
        name: listName
    };
};

export const fetchListItems = (listName) => {
    return dispatch => {
        axios.get('lists.json?orderBy="$key"&equalTo="'+listName+'"')
            .then(response => {
                dispatch(setListItems(response.data[listName].items, listName));
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const editListItem = (listName, oldItemName, newListItem) => {
    return removeListItem(listName, oldItemName, newListItem);
};

export const editedListItem = () => {
    return {
        type: actionTypes.EDIT_LIST_ITEM
    };
};

export const fetchListItemsFailed = () => {
    return {
        type: actionTypes.FETCH_LIST_ITEMS_FAILED
    };
};