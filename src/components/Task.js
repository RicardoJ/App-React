import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Task extends Component {
  StyleCompleted() {
    return {
      fontsize: '20px',
      color: this.props.task.done ? '#E6E0DF' : 'black',
      textDecoration: 'none'
    };
  }

  render() {
    const { task } = this.props;
    return (
      <div style={this.StyleCompleted()}>
        {task.id} -{task.title} -{task.description} -{task.done}
        <input type="checkbox" />
        <button style={btnDelete}>X</button>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};
const btnDelete = {
  fontsize: '18px',
  background: '#7B7472',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
};
export default Task;
