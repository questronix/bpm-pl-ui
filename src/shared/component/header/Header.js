// TODO: FIX import

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  

  render() {

    return (
      <div className="header-container flex f-justify-space-between bg-white f-center">
        <div className="sidebar-title">
          <div className="logo col">
            <div className="wrapper"><i className="icon fa fa-file-signature"></i></div>
            <div className="title text-black"><span>BPM</span> After-sales</div>
          </div>
        </div>
        <div className="header-action dropdown" onClick={() => this.toggleMenu()}>
          <a className="flex f-row f-center">
            <div className="text-right">
              <p className="no-margin">
                Welcome, {JSON.parse(sessionStorage.getItem('user_info')).Firstname}
              </p>
              <p className="no-margin">
                {JSON.parse(sessionStorage.getItem('user_info')).Role_Description}
                {/* CSA / Processor / Approver */}
              </p>
            </div>
            <span className="fa fa-user font-prulife"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;