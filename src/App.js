import React, { Component } from 'react';

import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TasksForm from './components/TaskForm';

class App extends Component {
  state = {
    tasks: tasks
  };
  render() {
    return (
      <div className="App-header">
        <TasksForm />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
