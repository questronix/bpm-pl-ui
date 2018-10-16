import React, { Component } from 'react';

class TaskCounter extends Component {
  render() {
    return (
      <div className="App">
        <div className="task-widget bg-bright-blue">
          <div className="task-counter">
            <h1>
              250
              </h1>
            <h1>
              /
              </h1>
            <h3>
              Task left
              <br />
              400
            </h3>
          </div>
          <button className="btn">
            More info
          </button>
        </div>
      </div>
    );
  }
}

export default TaskCounter;