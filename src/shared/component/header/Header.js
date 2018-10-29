// TODO: FIX import

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header header-container flex f-justify-space-between bg-white f-center">
        <div className="header-brand flex">
          <h3 className="font-prulife">
            BPM
          </h3>
          <h3>
            Aftersales
          </h3>
        </div>
        <div className="header-action dropdown">
          <a href="#" className="flex f-row f-center">
            <span className="fa fa-user"></span> &nbsp;&nbsp;
            <p>
              Welcome, Admin
            </p>
            &nbsp;&nbsp;<span className="fa fa-chevron-down"></span>
          </a>
          <div className="dropdown-menu">
            <ul>
              <a href="#logout">
                <li>
                  <span className="fa fa-sign-out-alt"></span> &nbsp;
                  Logout
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;