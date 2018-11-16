// TODO: FIX import

import React, { Component } from 'react';
// import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';
import { TaskService } from '../../../services/index';
import Nav from '../component/nav/Nav'
import CardImg from '../../../shared/component/Widgets/CardImg';
import Input from '../../../shared/component/input/Input';
import ProcessorContainer from '../component/processor/ProcessorContainer';

export default class Main extends Component {
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
        {/* <SideBar tasks={this.state.tasks} onTabClick={this.handleSidebarTabClick} /> */}
        {/* <Processor/> */}
        <div className="margin-top-70">
          <div className="flex-container flex-wrap">
            <div className="xl-2 l-2 m-3 s-3 xs-4 col"></div>
            <div className="xl-10 l-10 m-9 s-9 xs-8 col">
              {/* <div className="xl-4">
                <CardImg
                  docLabel="This document"
                  docDate="12/31/18"
                  docs="https://images.unsplash.com/photo-1540349946389-8ea10a9da3cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73648bc8f9b4c8067106d4da017386ac&auto=format&fit=crop&w=634&q=80"
                  docsId="333" />
              </div> */}
              <ProcessorContainer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}