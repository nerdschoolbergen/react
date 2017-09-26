import React from 'react';
import PropTypes from 'prop-types';
import './todoItem.css';

const TodoItem = ({ id, description }) => (
  <div>
    <div className="todo-item">
      <input type="checkbox" id={`todoItemCheckbox-${id}`} />
      <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
      <input type="button" value="Delete" />
      </div>
  </div>
);

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default TodoItem;
