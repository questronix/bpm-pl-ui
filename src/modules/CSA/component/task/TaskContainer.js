import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';

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
    TaskService.createNewTask().then((res) => {
      window.location.href = `/tasks`;
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  componentDidMount() {
    TaskService.getAllTasks().then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });

    TaskService.getAllTaskHistory().then((res) => {
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
        <div className="col xl-10 l-10 m-10 s-11 xs-11">
          <h1 className="flex s-f-center xs-f-center">My tasks</h1>
          <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
            <div className=" xl-5 flex f-justify-space-between">
              <div className="search-container">
                {/* <FilterButton/> */}
                <select>
                  <option value="Policy Number">Policy Number</option>
                  <option value="Policy Owner">Policy Owner</option>
                  <option value="Insured Name">Insured Name</option>
                  <option value="Policy">Policy</option>
                </select>
                <input className="search" placeholder="Search..." />
              </div>
              <a href="#" className="btn prulife flex f-center">
                <span className="fa fa-search font-white"></span> &nbsp;
                <span>
                SEARCH
                </span>
              </a>
            </div>
            <div className="flex f-row">
              <a
                href="#"
                className="btn prulife"
                onClick={this.createTask}>
                <span className="fa fa-plus"></span> &nbsp;
                CREATE NEW TRANSACTION
              </a>
            </div>
          </div>
          <TaskList tasks={this.state.tasks} />
          <h1>Task History</h1>
          {/* <TaskList tasks={this.state.taskHistory} /> */}
        </div>
      </div>
    );
  }
}

export default TaskContainer;