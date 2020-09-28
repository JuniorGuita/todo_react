import React, { Component } from 'react'
import TodoForm from './../components/TodoForm';
import TodoList from './../components/TodoList';
import ContainerApp from './../components/ContainerApp';

class TodoListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    pushToItems = (todo) => {
        const { items } = this.state;
        this.setState({
            items: [...items, todo]
        });
    }

    removeFromItems = (index) => {
        const { items } = this.state;
        items.splice(index, 1);
        this.setState({ items });
    }

    render() {
        const { items } = this.state;
        return (
            <ContainerApp>
                <div className="col-md-12 col-xs-12">
                    <h2>Todo List</h2>
                </div>
                <div className="col-md-12 col-xs-12">
                    <TodoForm pushToItems={this.pushToItems} />
                </div>
                <hr />
                <div className="col-md-12 col-xs-12">
                    <TodoList items={items} removeFromItems={this.removeFromItems} />
                </div>
            </ContainerApp>
        )
    }
}

export default TodoListApp;
