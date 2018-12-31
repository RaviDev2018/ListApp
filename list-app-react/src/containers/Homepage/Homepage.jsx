import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListMenu from '../../components/ListMenu/ListMenu';
import ListSummary from '../../components/ListSummary/ListSummary';
import * as actions from '../../store/action/index';

export class Homepage extends Component {
    componentDidMount() {
        this.props.onFetchLists();
    }

    render() {
        let display = <div>No lists found</div>;
        if(this.props.names != null && this.props.lists) {
            display =   <div>
                            <ListMenu lists={this.props.names} />
                            <ListSummary topLists={this.props.lists} />
                        </div>;
        }

        return (display);
    }
}

const mapStateToProps = state => {
    return {
        lists: state.summary.summaryLists,
        names: state.summary.listNames
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onListAdded: (listName) => dispatch(actions.addList(listName)),
        onListRemoved: (listId) => dispatch(actions.removeList(listId)),
        onFetchLists: () => dispatch(actions.fetchLists())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
