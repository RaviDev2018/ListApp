import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export class EditListItem extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            editItemName: '',
            editItemComment: ''
        }
    }

    componentDidMount() {
        if(this.props.itemId !== "" && this.props.itemId !== undefined
            && this.props.items[this.props.itemId] !== undefined) {
            let currentItem = this.props.items[this.props.itemId];
            this.setState({editItemName: currentItem.name,
                            editItemComment: currentItem.comment});
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.itemId !== undefined && newProps.itemId !== ""
            && newProps.items != null
            && newProps.items[newProps.itemId] !== undefined) {
            let currentItem = newProps.items[newProps.itemId];
            this.setState({editItemName: currentItem.name,
                            editItemComment: currentItem.comment});
        }
    }

    handleChangeEditName = (e) => {
        this.setState({editItemName: e.target.value});
    }

    handleChangeEditComment = (e) => {
        this.setState({editItemComment: e.target.value});
    }

    handleEditListItem = () => {
        let newListItem = {
            "name": this.state.editItemName,
            "comment": this.state.editItemComment
        }

        this.props.onEditListItem(this.props.listId, this.props.itemId, newListItem);
    }

    handleRemoveListItem = () => {
        this.props.onRemoveListItem(this.props.listId, this.props.itemId);
    }

    handleClose() {
        this.props.onToggleEditListItem(false);
    }

    handleShow() {
        this.props.onToggleEditListItem(true);
    }

    render() {
        return (
            <Modal show={this.props.showEditListItem} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modify List Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.editItemName} onChange={this.handleChangeEditName} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Comment</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" value={this.state.editItemComment} onChange={this.handleChangeEditComment} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    <Button variant="primary" onClick={this.handleEditListItem}>Save</Button>
                    <Button variant="danger" onClick={this.handleRemoveListItem}>Delete</Button>
                </Modal.Footer>
            </Modal>
        )
    };
}

const mapStateToProps = state => {
    return {
        items: state.list.items,
        listId: state.list.listId,
        isListItemRemoved: state.list.isListItemRemoved,
        showEditListItem: state.list.showEditListItem,
        itemId: state.list.itemId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEditListItem: (listId, itemId, newListItem) => dispatch(actions.editListItem(listId, itemId, newListItem)),
        onRemoveListItem: (listId, itemId) => dispatch(actions.removeListItem(listId, itemId)),
        onToggleEditListItem: (toggleEditListItem) => dispatch(actions.toggleEditListItem(toggleEditListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);