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
    const ROLE = JSON.parse(sessionStorage.getItem('user_info')).Role_Description;

    return (
      <div className="sidebar col no-padding  ">
        <div className="sidebar-title">
          <div className="logo">
            <div className="wrapper"><i className="icon fa fa-file-signature"></i></div>
            <div className="title white"><span>BPM</span> After-sales</div>
          </div>
        </div>
        <div className="sidebar-header">
          Menu
        </div>
        <div className="sidebar-body">
            {ROLE == 'CSA' && (
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
            </ul>
            )}
            {ROLE == 'PROCESSOR' && (
            <ul>
              <NavLink to="/tasks" className="flex f-start f-center" activeClassName="active flex f-start f-center" accessKey="1">
                <li>
                  <span className="fa fa-clipboard-list font-bright-blue"></span>
                  TASKS
              </li>
              </NavLink>
            </ul>
            )}
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