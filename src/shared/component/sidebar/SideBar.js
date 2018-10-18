import React, {Component} from 'react';

class SideBar extends Component {

  render() {

    const taskList = this.props.tasks
      .map((task, i) => {
        return <li key={i}> <a href={"/tasks/edit?id=" + task.id}> {task.variables.policy.appNo} </a></li>
    });

    return (
      <div className="App">
        <div className="sidebar col xl-2 l-2  m-2  s-hide  xs-hide">
          <div className="sidebar-header flex-container xl-12 flex f-center">
          <div className="xl-4">
            <h1>
            <span className="fa fa-user"></span>  
            </h1>
          </div>
          <div className="xl-8 ">
            <b>
              Jerome Patiga
            </b>
            <p className="no-margin no-border">
              Task: 120/500
            </p>
          </div>
          </div>
          <ul className="sidebar-list">
            {taskList}
            {/* {this.props.tasks ? 
              {taskList}
            : 
              <li>
                <a href="jsx-a11y/href-no-hash">
                  No Tasks Found
                </a>
              </li>  
            } */}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;