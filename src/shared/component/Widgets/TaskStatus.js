import React, { Component } from 'react';

class TaskCounter extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-widget">
          <div className="task-counter">
            <h1>
              250 &nbsp;/ &nbsp;
            </h1>
            <h3>
              Task left 
              <br/> 
              400
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCounter;