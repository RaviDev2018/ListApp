import * as actionTypes from './actionTypes';
import axios from '../../axios-setup';

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
                        
                        if(Object.keys(summaryList.items).length > 5) {
                            let newItems = {};
                            let itemCounter = 0;

                            for(let itemName in summaryList.items) {
                                if(itemCounter < 5) {
                                    newItems[itemName] = summaryList.items[itemName];
                                    itemCounter++;
                                }
                            }
                            
                            summaryList.items = newItems;
                        }

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

export const addList = (newList) => {
    return dispatch => {
        axios.patch('lists.json', newList)
            .then(response => {
                dispatch(addedList(newList));
            })
            .catch(error => {
                dispatch(fetchListsFailed());
            });
    };
};

export const addedList = (newList) => {
    return {
        type: actionTypes.ADD_LIST,
        newList: newList
    };
};

export const removeList = (listName) => {
    return dispatch => {
        axios.delete('lists/'+listName+'.json')
            .then(response => {
                dispatch(removedList(listName));
            })
            .catch(error => {
                dispatch(fetchListsFailed());
            });
    };
};

export const removedList = (listName) => {
    return {
        type: actionTypes.REMOVE_LIST,
        listName: listName
    };
};

export const resetListRemoved = () => {
    return {
        type: actionTypes.RESET_LIST_REMOVED
    };
};

export const fetchListsFailed = () => {
    return {
        type: actionTypes.FETCH_LISTS_FAILED
    };
};