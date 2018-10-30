import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';
import FilterButton from '../../../../shared/component/filterbutton/FilterButton';

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
          <hr />
          <div className="xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
            <div className="search-container xl-3">
              <input className="search" placeholder="Search Policy Number" />
              <a href="#" className="search-icon float-left">
                <span className="fa fa-search input-icon"></span>
              </a>
            </div>
            <div className="flex f-row">
              <FilterButton/>
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