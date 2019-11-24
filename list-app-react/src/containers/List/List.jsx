import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItems from '../../components/ListItems/ListItems';
import EditItemModal from '../../components/UI/Modals/EditListItem/EditListItem';
import NewItemModal from '../../components/UI/Modals/NewListItem/NewListItem';
import * as actions from '../../store/action/index';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class List extends Component {
    componentDidMount() {
        this.props.onFetchListItems(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if(this.props.isListRemoved) {
            this.props.onResetListRemoved();
            this.props.history.push('/');
        } else if(this.props.match.params.id !== prevProps.match.params.id) {
            this.props.onFetchListItems(this.props.match.params.id);
        }
    }

    render() {
        let listItemsDisplay = null;
        if(this.props.items !== undefined && this.props.items !== null 
            && Object.keys(this.props.items).length) {
            listItemsDisplay = <ListItems listItems={this.props.items} isItemClickable editItemModal={this._editItemModal} />;
        }

        let listNameDisplay = this.props.match.params.id;
        if(this.props.listNames !== undefined) {
            listNameDisplay = this.props.listNames[this.props.match.params.id];
        }

        return (
            <div>
                <Card bg="dark" text="white">
                    <Card.Header as={Row}>
                        <Col xs={9}>
                            {listNameDisplay}
                        </Col>
                        <Col xs={3} className="text-right">
                            <Button variant="primary" onClick={() => this.props.onToggleNewListItem(true)} className="mr-3">Add list item</Button>
                            <Button variant="danger" onClick={() => this.props.onRemoveList(this.props.match.params.id)}>Delete list</Button>
                        </Col>
                    </Card.Header>
                    {listItemsDisplay}
                </Card>
                <EditItemModal></EditItemModal>
                <NewItemModal></NewItemModal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listNames: state.summary.listNames,
        items: state.list.items,
        isListRemoved: state.summary.isListRemoved
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchListItems: (listName) => dispatch(actions.fetchListItems(listName)),
        onRemoveList: (listName) => dispatch(actions.removeList(listName)),
        onResetListRemoved: () => dispatch(actions.resetListRemoved()),
        onToggleNewListItem: (toggleNewListItem) => dispatch(actions.toggleNewListItem(toggleNewListItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
