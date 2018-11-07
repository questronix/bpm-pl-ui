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
      <div className="header-container flex f-justify-space-between bg-white f-center">
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
            <div className="text-right">
              <p className="no-margin">
                Welcome, Admin
              </p>
              <p className="no-margin">
                CSA / Processor / Approver
              </p>
            </div>
            <span className="fa fa-user font-prulife"></span>
          </a>
          <div className={this.state.isOpen ? 'dropdown-menu active' : 'dropdown-menu'}>
            <ul>
              <a href="/login">
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