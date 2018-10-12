import React, { Component } from 'react';
import { TaskService } from '../../services';

class DashboardContainer extends Component {
  constructor(props){
    super(props);
    
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

  render() {
    return(
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide invisible">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife flex s-f-center xs-f-center">Dashboard</h1>
          <button className="btn btn-prulife" onClick={this.createTask}>Create Task</button>
          <h3 className="flex s-f-center xs-f-center">Welcome back, {JSON.parse(sessionStorage.getItem('user_info')).firstName}.</h3>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;