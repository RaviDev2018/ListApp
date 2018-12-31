import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    summaryLists: [],
    listNames: [],
    error: false
};

const addList = (state, action) => {
    //need to add list to both summary and list names
    return state;
};

const removeList = (state, action) => {
    //need to remove list from both summary and list names
    return state;
};

const setLists = (state, action) => {
    return updatedObject(state, {
        listNames: action.names,
        summaryLists: action.summary
    });
};

const fetchListsFailed = (state, action) => {
    return updatedObject(state, {
        error: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST: return addList(state, action);
        case actionTypes.REMOVE_LIST: return removeList(state, action);
        case actionTypes.SET_LISTS: return setLists(state, action);
        case actionTypes.FETCH_LISTS_FAILED: return fetchListsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;