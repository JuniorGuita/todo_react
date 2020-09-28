import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { items, removeFromItems } = this.props
        return (
            <ul className="list-group">
                { items.map((item, index) => (
                    <TodoListItem key={index} index={index} item={item} removeFromItems={removeFromItems}/>
                ))}
            </ul>
        );
    }
}

export default TodoList;