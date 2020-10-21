import PropTypes from 'prop-types';
import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f4f4f4' }}>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
