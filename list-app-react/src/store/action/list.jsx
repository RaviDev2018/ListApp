import * as actionTypes from './actionTypes';
import axios from '../../axios-setup';

export const addListItem = (listId, newListItem, isAppendingItem) => {
    let newListUrl = 'list-items.json';
    if(isAppendingItem) {
        newListUrl = 'list-items/'+listId+'.json';
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
                    dispatch(addListItem(listName, newListItem, true, listItemName));
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

export const setListItems = (items, listId) => {
    return {
        type: actionTypes.SET_LIST_ITEMS,
        items: items,
        listId: listId
    };
};

export const fetchListItems = (listId) => {
    return dispatch => {
        axios.get('list-items/'+listId+'.json')
            .then(response => {
                dispatch(setListItems(response.data, listId));
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const editListItem = (listId, itemId, newListItem) => {
    return dispatch => {
        axios.patch('list-items/'+listId+'/'+itemId+'.json', newListItem)
            .then(response => {
                dispatch(editedListItem(itemId, newListItem));
            })
            .catch(error => {
                dispatch(fetchListItemsFailed());
            });
    };
};

export const editedListItem = (itemId, newListItem) => {
    return {
        type: actionTypes.EDIT_LIST_ITEM,
        itemId: itemId,
        newListItem: newListItem
    };
};

export const toggleEditListItem = (showEditListItem, itemId) => {
    return {
        type: actionTypes.TOGGLE_EDIT_LIST_ITEM,
        showEditListItem: showEditListItem,
        itemId: itemId
    };
};

export const toggleNewListItem = (showNewListItem) => {
    return {
        type: actionTypes.TOGGLE_NEW_LIST_ITEM,
        showNewListItem: showNewListItem
    };
};

export const fetchListItemsFailed = () => {
    return {
        type: actionTypes.FETCH_LIST_ITEMS_FAILED
    };
};