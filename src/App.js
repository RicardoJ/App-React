import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TasksForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends Component {
  state = {
    tasks: tasks
  };
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
  deleteTask = id => {
    const taskOut = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: taskOut });
  };
  checkDone = id => {
    const taskfinished = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: taskfinished });
  };
  render() {
    return (
      <div className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TasksForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          />
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    );
  }
}
export default App;
