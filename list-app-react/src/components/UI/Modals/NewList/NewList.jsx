import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/action/index';

export class NewList extends Component {
    state = {
        newName: ""
    }

    handleChangeName = (e) => {
        this.setState({newName: e.target.value});
    }

    handleAddNewList = () => {;
        const newList = {
            [this.state.newName]: {
                "id": Math.random().toString(36).substring(2),
                "items": {}
            }
        }

        this.props.onAddList(newList);
    }

    render() {
        return (
            <div>
                <div>
                    <input type='input' value={this.state.newName} onChange={this.handleChangeName} />
                </div>
                <div>
                    <button onClick={this.handleAddNewList}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddList: (newList) => dispatch(actions.addList(newList))
    }
}

export default connect(null, mapDispatchToProps)(NewList);
