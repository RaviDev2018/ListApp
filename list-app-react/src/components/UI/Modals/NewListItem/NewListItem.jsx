import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class NewListItem extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            newName: "",
            newComment: ""
        }
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

        if(this.props.items !== undefined && this.props.items !== null
            && Object.keys(this.props.items).length) {
            newListItem = {
                [Math.random().toString(36).substring(2)]: {
                    "name": this.state.newName,
                    "comment": this.state.newComment
                }
            }
            isAppendingItem = true;
        } else {
            newListItem = {
                [this.props.listId]: {
                    [Math.random().toString(36).substring(2)]: {
                        "name": this.state.newName,
                        "comment": this.state.newComment
                    }
                }
            }
        }

        this.props.onAddListItem(this.props.listId, newListItem, isAppendingItem);
    }

    handleClose() {
        this.setState({newName: "", newComment: ""});
        this.props.onToggleNewListItem(false);
    }

    handleShow() {
        this.props.onToggleNewListItem(true);
    }

    render() {
        return (
            <Modal show={this.props.showNewListItem} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add List Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type='input' value={this.state.newName} onChange={this.handleChangeName} />
                    </div>
                    <div>
                        <textarea value={this.state.newComment} onChange={this.handleChangeComment} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    <Button variant="primary" onClick={this.handleAddNewListItem}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    };
}

const mapStateToProps = state => {
    return {
        items: state.list.items,
        listId: state.list.listId,
        showNewListItem: state.list.showNewListItem
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddListItem: (listId, newListItem, onAddListItem) => dispatch(actions.addListItem(listId, newListItem, onAddListItem)),
        onToggleNewListItem: (toggleNewListItem) => dispatch(actions.toggleNewListItem(toggleNewListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewListItem);
