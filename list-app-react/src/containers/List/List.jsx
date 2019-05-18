import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import ListItems from '../../components/ListItems/ListItems';
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
        if(this.props.items !== undefined && Object.keys(this.props.items).length) {
            listItemsDisplay = <ListItems listItems={this.props.items} />;
        }

        return (
            <Card bg="dark" text="white">
                <Card.Header as={Row}>
                    <Col xs={9}>
                        {this.props.match.params.id}
                    </Col>
                    <Col xs={3} className="text-right">
                        <Button variant="primary" as={NavLink} to={'/newListItem'} className="mr-3">Add list item</Button>
                        <Button variant="danger" onClick={() => this.props.onRemoveList(this.props.match.params.id)}>Delete list</Button>
                    </Col>
                </Card.Header>
                {listItemsDisplay}
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.summary.summaryLists,
        items: state.list.items,
        isListRemoved: state.summary.isListRemoved
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchListItems: (listName) => dispatch(actions.fetchListItems(listName)),
        onRemoveList: (listName) => dispatch(actions.removeList(listName)),
        onResetListRemoved: () => dispatch(actions.resetListRemoved())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
