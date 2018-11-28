// TODO: FIX import

import React, { Component } from 'react';
// import Nav from '../../../shared/component/nav/Nav';
import { TaskService } from '../../../services/index';
import Nav from '../component/nav/Nav'
import ApproverContainer from '../component/approver/ApproverContainer';

export default class Approver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    }

    this.handleSidebarTabClick = this.handleSidebarTabClick.bind(this);
  }

  handleSidebarTabClick(tab) {
    this.setState({
      tasks: [],
    });
    if (tab == 0) {
      this.getTasks();
    }
    else {
      this.getTaskHistory();
    }
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.getAllTasks(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });
  }

  getTaskHistory() {
    const user = JSON.parse(sessionStorage.getItem('user_info'));
    TaskService.getAllTaskHistory(user.id).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {

    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="flex-container flex-wrap margin-top-70">
          <div className="col ghost-sidebar no-padding"></div>
          <div className="margin-left-250 col p-x2">
            <ApproverContainer />

          </div>
        </div>
      </div>
    );
  }
}