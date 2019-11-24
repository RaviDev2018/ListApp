import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    summaryLists: [],
    listNames: [],
    error: false,
    isListRemoved: false,
    showNewList: false
};

const setLists = (state, action) => {
    return updatedObject(state, {
        listNames: action.names,
        summaryLists: action.summary
    });
};

const addList = (state, action) => {
    let updatedListNames = {...state.listNames};
    updatedListNames[Object.keys(action.newList)[0]] = action.newList[Object.keys(action.newList)[0]].name;

    return updatedObject(state, {
        listNames: updatedListNames,
        showNewList: false
    });
};

const removeList = (state, action) => {
    return updatedObject(state, {
        isListRemoved: true
    });
};

const resetListRemoved = (state, action) => {
    return updatedObject(state, {
        isListRemoved: false
    });
};

const toggleNewList = (state, action) => {
    return updatedObject(state, {
        showNewList: action.showNewList
    });
};

const fetchListsFailed = (state, action) => {
    return updatedObject(state, {
        error: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LISTS: return setLists(state, action);
        case actionTypes.ADD_LIST: return addList(state, action);
        case actionTypes.REMOVE_LIST: return removeList(state, action);
        case actionTypes.RESET_LIST_REMOVED: return resetListRemoved(state, action);
        case actionTypes.FETCH_LISTS_FAILED: return fetchListsFailed(state, action);
        case actionTypes.TOGGLE_NEW_LIST: return toggleNewList(state, action);
        default:
            return state;
    }
};

export default reducer;