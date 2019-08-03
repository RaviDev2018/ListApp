import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    listId: "",
    items: {},
    error: false,
    fetchedItems: false,
    showEditListItem: false,
    itemName: "",
    itemId: ""
};

const addListItem = (state, action) => {
    if(action.isAppendingItem) {
        return {
            ...state,
            items: {
                ...state.items,
                ...action.newListItem
            }
        };
    } else {
        const newListItemName = Object.keys(action.newListItem)[0];

        return updatedObject(state, {
            items: action.newListItem[newListItemName]
        });
    }
};

const removeListItem = (state, action) => {
    return updatedObject(state, {
        isListItemRemoved: true
    });
};

const setListItems = (state, action) => {
    return updatedObject(state, {
        items: action.items,
        fetchedItems: true,
        listId: action.listId
    });
};

const editListItem = (state, action) => {
    const newItems = {...state.items, [action.itemId]: action.newListItem};
    return updatedObject(state, {
        items: newItems,
        showEditListItem: false
    });
};

const toggleEditListItem = (state, action) => {
    return updatedObject(state, {
        showEditListItem: action.showEditListItem,
        itemId: action.itemId
    });
};

const fetchListItemsFailed = (state, action) => {
    return updatedObject(state, {
        error: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST_ITEM: return addListItem(state, action);
        case actionTypes.REMOVE_LIST_ITEM: return removeListItem(state, action);
        case actionTypes.SET_LIST_ITEMS: return setListItems(state, action);
        case actionTypes.EDIT_LIST_ITEM: return editListItem(state, action);
        case actionTypes.TOGGLE_EDIT_LIST_ITEM: return toggleEditListItem(state, action);
        case actionTypes.FETCH_LIST_ITEMS_FAILED: return fetchListItemsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;