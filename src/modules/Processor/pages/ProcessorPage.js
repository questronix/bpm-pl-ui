// TODO: FIX import

import React, {Component} from 'react';
import links from '../routes';
import Nav from '../../../shared/component/nav/Nav';
import SideBar from '../../../shared/component/sidebar/SideBar';
import Processor from '../component/processor/ProcessorContainer';
import { TaskService } from '../../../services/index';

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
        <Nav links={links}/> 
        <SideBar tasks={this.state.tasks} onTabClick={this.handleSidebarTabClick}/> 
        {/* <Processor/> */}
      </div>
    );
  }
}