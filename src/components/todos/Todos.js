import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} removeItem={this.props.removeItem}></TodoItem>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
}

export default Todos;
