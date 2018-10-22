import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';
import CardWidget from '../../../../shared/component/Widgets/CardWidget';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskHistory: [],
    }
    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    TaskService.createNewTask({ username: sessionStorage.getItem('username') }).then((res) => {
      // alert(res.data.id);
      window.location.href = `/tasks`;
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    const user = JSON.parse(sessionStorage.getItem('user_info'));

    TaskService.getAllTasks(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });

    TaskService.getAllTaskHistory(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        taskHistory: res.data
      })
    }).finally(() => {

    });
  }

  render() {
    return (
      <div className="flex-container flex-wrap flex f-center">
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Tasks</h1>
          <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
            <div className="">
              <input className="input-search" placeholder="Search task..."/>
                <span className="fa fa-search input-icon"></span>
              <button className="btn bright-blue">
                Search
              </button>
            </div>
            <div className="tooltip">
            <span className="tooltip-text">
            Add a task
            </span>
            <button className="round-btn grass-green" onClick={this.createTask}><span className="fa fa-plus"></span></button>
            </div>
          </div>
          <TaskList tasks={this.state.tasks} />
          <h1>Task History</h1>
          <TaskList tasks={this.state.taskHistory} />
          
        </div>
      </div>
    );
  }
}

export default TaskContainer;