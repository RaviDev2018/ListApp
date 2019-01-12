import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    name: "",
    items: [],
    error: false,
    fetchedItems: false
};

const addListItem = (state, action) => {
    return state;
};

const removeListItem = (state, action) => {
    return state;
};

const setListItems = (state, action) => {
    return updatedObject(state, {
        items: action.items,
        fetchedItems: true
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
        case actionTypes.FETCH_LIST_ITEMS_FAILED: return fetchListItemsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;