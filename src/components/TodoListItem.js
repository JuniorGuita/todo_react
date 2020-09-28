import React, { Component } from 'react'

 class TodoListItem extends Component {
    constructor(props) {
        super(props);
    }

    onRemove = () => {
        this.props.removeFromItems(this.props.index);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.item}
                <button type="button" className="btn btn-danger ml-2" onClick={this.onRemove}>X</button>
            </li>
        )
    }
}

export default TodoListItem;