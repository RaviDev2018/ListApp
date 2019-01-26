import * as actionTypes from '../action/actionTypes';
import { updatedObject } from '../../shared/utility';

const initialState = {
    summaryLists: [],
    listNames: [],
    error: false
};

const setLists = (state, action) => {
    return updatedObject(state, {
        listNames: action.names,
        summaryLists: action.summary
    });
};

const addList = (state, action) => {
    const newListName = Object.keys(action.newList)[0];

    const newListNameObj = {
        "id": action.newList[newListName].id,
        "name": newListName
    };

    const newList = {
        ...action.newList[newListName],
        "name": newListName
    };

    return {
        ...state,
        listNames: [
            ...state.listNames,
            newListNameObj
        ],
        summaryLists: [
            ...state.summaryLists,
            newList
        ]
    };
};

const removeList = (state, action) => {
    //need to remove list from both summary and list names
    return state;
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
        case actionTypes.FETCH_LISTS_FAILED: return fetchListsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;