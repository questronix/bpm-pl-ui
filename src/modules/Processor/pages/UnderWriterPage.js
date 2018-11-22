// TODO: FIX import

import React, { Component } from 'react';
// import Nav from '../../../shared/component/nav/Nav';
import { TaskService } from '../../../services/index';
import Nav from '../component/nav/Nav'
import UnderwriterContainer from '../component/processor/UnderwriterContainer';

export default class UnderWriter extends Component {
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
          <div className="xl-2 l-2 m-3 s-3 xs-4 col no-padding"></div>
          <div className="xl-10 l-10 m-9 s-9 xs-8 col p-x2">
            <UnderwriterContainer/>
          </div>
        </div>
      </div>
    );
  }
}