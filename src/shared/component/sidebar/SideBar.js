import React, { Component, Fragment } from 'react';
import CheckBox from '../checkbox/CheckBox';
import { TaskService } from '../../../services/index';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarTab: 0,
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleClaimClick = this.handleClaimClick.bind(this);
  }

  handleTabClick(e) {
    this.setState({
      sidebarTab: e
    });
    
    this.props.onTabClick(e);
  }

  handleClaimClick(tid, uid) {
    TaskService.claim(tid, uid).then((res) => {
      console.log(res);
      window.location.href = `/tasks/edit?id=${tid}`
    }).finally(() => {

    });
  }


  render() {

    const taskList = this.props.tasks
      .map((task, i) => { 
        // return <li key={i}> <a href={"/tasks/edit?id=" + task.id}> {task.variables.policy.appNo} </a></li>
        let buttons = [];
        if(!task.claimTime && !task.endTime){
          buttons =
            <Fragment>
              <li className="btn-sidebar">
                <span className="fa fa-eye">&nbsp;
                  <a href="#">
                    View
                  </a>
                </span>
              </li>
              <li className="btn-sidebar">
                <span className="fa fa-check">&nbsp;
                  <a tid={task.id} onClick={() => {this.handleClaimClick(task.id, JSON.parse(sessionStorage.getItem('user_info')).id)}}>
                    Claim
                  </a>
                </span>
              </li>
            </Fragment>;
                    
        }else{
          buttons =
          <li className="btn-sidebar">
            <span className="fa fa-edit">&nbsp;
              <a href={"/tasks/edit?id=" + task.id}>
                {task.endTime ? 'View' : 'Edit'}
              </a>
            </span>
          </li>;
                    
        }
        
        return <ul key={i} className="item-list">
                <li>
                  {task.variables.policy.number}
                </li>
                <li>
                  {task.variables.policy.appNo}
                </li>
                <li>
                  {(new Date(task.startTime)).toDateString()}
                </li>
                {buttons}
              </ul>
      
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
          <div className="sidebar-tab">
            <div className="sidebar-tab-title ">
              <ul className="flex-container">
                <li className={this.state.sidebarTab == 0 ? "xl-6 text-center active" : "xl-6 text-center"}>
                  <a name="available" onClick={()=>{this.handleTabClick(0)}}>
                    Available
                  </a>
                </li>
                <li className={this.state.sidebarTab == 1 ? "xl-6 text-center active" : "xl-6 text-center"}>
                  <a name="completed" onClick={()=>{this.handleTabClick(1)}}>
                    Completed
                  </a>
                </li>
              </ul>
            </div>
            <ul className="sidebar-list">
              {taskList}
            </ul>
          </div>
          {/* <ul className="sidebar-list">
            {taskList}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default SideBar;