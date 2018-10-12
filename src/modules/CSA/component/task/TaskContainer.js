import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
    }
    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    TaskService.createNewTask({ username: sessionStorage.getItem('username')}).then((res) => {
      window.location.href="/csa";
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
  
  componentDidMount() {
    const username = sessionStorage.getItem('username');
    TaskService.getAllTasks(username).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {
      
    });
  }

  render() {
    return(
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Tasks</h1>
          <button className="btn btn-prulife" onClick={this.createTask}>Create Task</button>
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default TaskContainer;