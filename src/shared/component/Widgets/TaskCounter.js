import React, { Component } from 'react';

class TaskCounter extends Component {
  render() {
    return (
      <div className="App">
        <div className={this.props.tCounter}>
          <div className="">
            <div className="task-widget bg-bright-blue">
              <div className="task-counter">
                <h1>
                  {this.props.taskDone}
              </h1>
                <h1>
                  /
              </h1>
                <h3>
                  Task left
              <br />
                  {this.props.overallTask}
            </h3>
              </div>
              <div className="flex f-end">
                <button className="btn">
                  More info
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCounter;