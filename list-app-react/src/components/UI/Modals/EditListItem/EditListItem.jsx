import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        if(this.props.itemName !== "") {
            this.setState({editItemName: this.props.itemName,
                            editItemComment: this.props.items[this.props.itemName].comment});
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.isListItemRemoved) {
            this.props.history.push('/List/'+this.props.listName);
        }
        if(newProps.itemName !== undefined && newProps.itemName !== "") {
            this.setState({editItemName: newProps.itemName,
                            editItemComment: newProps.items[newProps.itemName].comment});
        }
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

    handleRemoveListItem = () => {
        this.props.onRemoveListItem(this.props.listName, this.props.match.params.id);
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
                    <div>
                        <input type='input' value={this.state.editItemName} onChange={this.handleChangeEditName} />
                    </div>
                    <div>
                        <textarea value={this.state.editItemComment} onChange={this.handleChangeEditComment} />
                    </div>
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
        listName: state.list.name,
        isListItemRemoved: state.list.isListItemRemoved,
        showEditListItem: state.list.showEditListItem,
        itemName: state.list.itemName
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEditListItem: (listName, oldItemName, newListItem) => dispatch(actions.editListItem(listName, oldItemName, newListItem)),
        onRemoveListItem: (listName, listItemName) => dispatch(actions.removeListItem(listName, listItemName)),
        onToggleEditListItem: (toggleEditListItem) => dispatch(actions.toggleEditListItem(toggleEditListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListItem);