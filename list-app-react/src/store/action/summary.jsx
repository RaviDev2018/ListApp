import * as actionTypes from './actionTypes';
import axios from '../../axios-setup';

export const addList = (name) => {
    return {
        type: actionTypes.ADD_LIST,
        listName: name
    };
};

export const removeList = (id) => {
    return {
        type: actionTypes.REMOVE_LIST,
        listId: id
    };
};

export const setLists = (names, summary) => {
    return {
        type: actionTypes.SET_LISTS,
        names: names,
        summary: summary
    };
};

export const fetchLists = () => {
    return dispatch => {
        axios.get('lists.json')
            .then(response => {
                let counter = 0;
                let newListNames = [];
                let newSummaryLists = [];

                for(let listName in response.data) {
                    newListNames.push({id: response.data[listName].id, name: listName});

                    if(counter < 5) {
                        let summaryList = response.data[listName];
                        summaryList.name = listName;

                        newSummaryLists.push(summaryList);
                        counter++;
                    }
                }
                dispatch(setLists(newListNames, newSummaryLists));
            })
            .catch(error => {
                dispatch(fetchListsFailed());
            });
    };
};

export const fetchListsFailed = () => {
    return {
        type: actionTypes.FETCH_LISTS_FAILED
    };
};