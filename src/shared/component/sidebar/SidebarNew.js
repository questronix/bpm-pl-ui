// TODO: FIX import

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SidebarNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideTabs: 0
    }
    this.handleSideTabs = this.handleSideTabs.bind(this);
  }

  handleSideTabs(e) {
    this.setState({
      sideTabs: e
    })

  }

  render() {

    return (
      <div className="sidebar col no-padding xl-2 l-2 m-3 s-3 xs-4 ">
        <div className="sidebar-title">
          <div class="logo">
            <div class="wrapper"><i class="icon fa fa-file-signature"></i></div>
            <div class="title white"><span>BPM</span> After-sales</div>
          </div>
        </div>
        <div className="sidebar-header">
          Menu
        </div>
        <div className="sidebar-body">
          <ul>
            <NavLink to="/tasks" className="flex f-start f-center" activeClassName="active flex f-start f-center" accessKey="1">
              <li>
                <span className="fa fa-clipboard-list font-bright-blue"></span>
                TASKS
            </li>
            </NavLink>

            <NavLink to="/dashboard" className="flex f-start f-center" activeClassName="active flex f-start f-center" accessKey="2">
              <li>
                <span className="fa fa-check font-grass-green"></span>
                Dashboard
              </li>
            </NavLink>


            {/* <a href="/tasks" onClick={() =>{this.handleSideTabs(0)}}> */}

            {/* <li className={this.state.sideTabs == 0 ? "active flex f-start f-center" : "flex f-start f-center"}>
                
              </li> */}
            {/* </a> */}
            {/* <a href="/dashboard"  onClick={() =>{this.handleSideTabs(1)}}>
              <li className={this.state.sideTabs == 1 ? "active flex f-start f-center" : "flex f-start f-center"}>
                <span className="fa fa-check font-grass-green"></span>
                MENU 1
              </li>
            </a> */}
          </ul>
        </div>
        <div className="sidebar-header">
          Systems
        </div>
        <div className="sidebar-body">
          <ul>
            <a href="#">
              <li className="flex f-start f-center">
                <span className="fa fa-cog font-prugray"></span>
                SETTINGS
              </li>
            </a>
            <a href="#">
              <li className="flex f-start f-center">
                <span className="fa fa-info-circle font-bright-blue"></span>
                MENU 1
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebar-body logout">
          <ul>
            <a href="/login">
              <li className="flex f-start f-center">
                <span className="fa fa-sign-out-alt font-prulife"></span>
                LOGOUT
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarNew;