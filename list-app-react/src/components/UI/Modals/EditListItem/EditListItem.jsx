import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

export class EditListItem extends Component {
    state = {
        editItemName: this.props.match.params.id,
        editItemComment: this.props.items[this.props.match.params.id].comment
    }

    handleChangeEditName = (e) => {
        this.setState({editItemName: e.target.value});
    }

    handleChangeEditComment = (e) => {
        this.setState({editItemComment: e.target.value});
    }

    handleEditListItem = () => {
        let oldItem = this.props.items[this.props.match.params.id];

        let newListItem = {
            [this.state.editItemName]: {
                "id": oldItem.id,
                "comment": this.state.editItemComment
            }
        }

        this.props.onEditListItem(this.props.listName, this.props.match.params.id, newListItem);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='input' value={this.state.editItemName} onChange={this.handleChangeEditName} />
                </div>
                <div>
                    <textarea value={this.state.editItemComment} onChange={this.handleChangeEditComment} />
                </div>
                <div>
                    <button onClick={this.handleEditListItem}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        items: state.list.items,
        listName:state.list.name
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEditListItem: (listName, oldItemName, newListItem) => dispatch(actions.editListItem(listName, oldItemName, newListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);