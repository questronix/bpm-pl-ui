// TODO: FIX import

import React, { Component } from 'react';

class SidebarNew extends Component {
  render() {

    return (
      <div className="sidebar col no-padding xl-2 l-2 m-3 s-3 xs-4 ">
        <div className="sidebar-title">
          <div class="logo">
            <div class="wrapper"><i class="icon fa fa-file-signature"></i></div>
            <div class="title white"><span>BPM</span> Aftersales</div>
          </div>
        </div>
        <div className="sidebar-header">
          Menu
        </div>
        <div className="sidebar-body">
          <ul>
            <a href="#">
              <li className="active flex f-start f-center">
                <span className="fa fa-clipboard-list font-bright-blue"></span>
                TASKS
              </li>
            </a>
            <a href="#">
              <li className="flex f-start f-center">
                <span className="fa fa-check font-grass-green"></span>
                MENU 1
              </li>
            </a>
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
            <a href="#">
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