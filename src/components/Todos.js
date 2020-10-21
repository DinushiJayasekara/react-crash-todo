import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}></TodoItem>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
