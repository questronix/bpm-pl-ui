import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskCounter from '../../../../shared/component/Widgets/TaskCounter';
import CardImg from '../../../../shared/component/Widgets/CardImg';
import CardPdf from '../../../../shared/component/Widgets/CardPdf';
import Footer from '../../../../shared/component/footer/Footer';

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
        <div className="col no-padding xl-2 l-2 m-3 s-3 xs-4">
          made by questronix
        </div>
        <div className="col xl-10 l-10 m-9 s-9 xs-8 ">
          <div className="col xl-12 l-12 m-12 s-12 xs-12">
            <h1 className="font-prulife flex s-f-center xs-f-center">Dashboard</h1>
            <button className="btn prulife" onClick={this.createTask}>Create Task</button>
            <h3 className="flex s-f-center xs-f-center">Welcome back, {JSON.parse(sessionStorage.getItem('user_info')).firstName}.</h3>
          </div>
         
        </div>
      </div>
    );
  }
}

export default DashboardContainer;