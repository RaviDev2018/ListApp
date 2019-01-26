import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

export class NewListItem extends Component {
    state = {
        newName: "",
        newComment: ""
    }

    handleChangeName = (e) => {
        this.setState({newName: e.target.value});
    }

    handleChangeComment = (e) => {
        this.setState({newComment: e.target.value});
    }

    handleAddNewListItem = () => {
        let newListItem = null;
        let isAppendingItem = false;

        if(this.props.items !== undefined && Object.keys(this.props.items).length) {
            newListItem = {
                [this.state.newName]: {
                    "id": 10,
                    "comment": this.state.newComment
                }
            }
            isAppendingItem = true;
        } else {
            newListItem = {
                "items": {
                    [this.state.newName]: {
                        "id": 10,
                        "comment": this.state.newComment
                    }
                }
            }
        }

        this.props.onAddListItem(this.props.name, newListItem, isAppendingItem);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='input' value={this.state.newName} onChange={this.handleChangeName} />
                </div>
                <div>
                    <textarea value={this.state.newComment} onChange={this.handleChangeComment} />
                </div>
                <div>
                    <button onClick={this.handleAddNewListItem}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        items: state.list.items,
        name: state.list.name
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddListItem: (listName, newListItem, onAddListItem) => dispatch(actions.addListItem(listName, newListItem, onAddListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewListItem);
