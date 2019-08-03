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
        axios.get('list-info.json')
            .then(response => {
                let counter = 0;
                let newListNames = [];
                let topLists = [];
                let newSummaryLists = [];

                for(let listId in response.data) {
                    newListNames[listId] = response.data[listId].name;

                    if(counter < 5) {
                        topLists.push(listId);
                        counter++;
                    }
                }

                axios.get('list-items.json?orderBy="$key"&startAt="'+topLists[0]+'"&endAt="'+topLists[4]+'"')
                    .then(itemResponse => {
                        for(let listIndex in topLists) {
                            let listId = topLists[listIndex];
                            let summaryList = itemResponse.data[listId];
                        
                            let newItems = {};
                            let itemCounter = 0;

                            for(let itemId in summaryList) {
                                if(itemCounter < 5) {
                                    newItems[itemId] = summaryList[itemId];
                                    itemCounter++;
                                }
                            }
                                
                            summaryList.items = newItems;
                            summaryList.id = listId;
                            summaryList.name = newListNames[listId];

                            newSummaryLists.push(summaryList);
                        }

                        dispatch(setLists(newListNames, newSummaryLists));
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch(fetchListsFailed());
                    });
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