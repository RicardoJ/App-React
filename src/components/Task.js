import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        {task.id} -{task.title} -{task.description} -{task.done}
        <input type="checkbox" />
        <button>X</button>
      </div>
    );
  }
}

export default Task;
