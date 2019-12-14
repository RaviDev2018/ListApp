import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export class NewList extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            newName: ""
        }
    }

    handleChangeName = (e) => {
        this.setState({newName: e.target.value});
    }

    handleAddNewList = () => {;
        const newList = {
            [Math.random().toString(36).substring(2)]: {
                "name": this.state.newName
            }
        }

        this.props.onAddList(newList);
    }

    handleClose() {
        this.setState({newName: ""});
        this.props.onToggleNewList(false);
    }

    handleShow() {
        this.props.onToggleNewList(true);
    }

    render() {
        return (
            <Modal show={this.props.showNewList} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.newName} onChange={this.handleChangeName} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    <Button variant="primary" onClick={this.handleAddNewList}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    };
}

const mapStateToProps = state => {
    return {
        showNewList: state.summary.showNewList
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddList: (newList) => dispatch(actions.addList(newList)),
        onToggleNewList: (toggleNewList) => dispatch(actions.toggleNewList(toggleNewList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
