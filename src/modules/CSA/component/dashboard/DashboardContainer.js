import React, { Component } from 'react';
import { TaskService } from '../../services';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  createTask() {
    TaskService.createNewTask({ username: sessionStorage.getItem('username') }).then((res) => {
      window.location.href = "/csa";
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="flex-container flex-wrap f-center flex margin-top-70">
        <div className="col no-padding ghost-sidebar"/>
        <div className="col p-x2 margin-left-250 ">
          <div className="col xl-12 l-12 m-12 s-12 xs-12">
            <h1 className="font-prulife flex s-f-center xs-f-center">Dashboard</h1>
            <button className="btn prulife" onClick={this.createTask} accessKey="n">Create Task</button>
            <h3 className="flex s-f-center xs-f-center">Welcome back, {JSON.parse(sessionStorage.getItem('user_info')).firstName}.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;