// TODO: FIX import

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  } 

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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
        <div className="header-action dropdown" onClick={() => this.toggleMenu()}>
          <a href="#" className="flex f-row f-center">
            <span className="fa fa-user"></span> &nbsp;&nbsp;
            <p>
              Welcome, Admin
            </p>
            &nbsp;&nbsp;<span className="fa fa-chevron-down"></span>
          </a>
          <div className={this.state.isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
            <ul>
              <a href="/logout">
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