import React, { Component } from 'react';
import { TaskService } from '../../services';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
    }
  }
  
  componentDidMount() {
    const username = sessionStorage.getItem('username');
    TaskService.getAllTasks(username).then((res) => {
      console.log(res.data);
      this.setState({
        tasks: res.data
      })
    }).finally(() => {
      
    });
  }

  render() {
    // console.log("YAAAY", this.state.tasks);
    return(
      <div>
        {this.state.tasks ? (
          <TaskList tasks={this.state.tasks} />
        ): 'WALA'}
      </div>
    );
  }
}

export default TaskContainer;