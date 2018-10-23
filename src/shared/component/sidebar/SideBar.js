import React, { Component } from 'react';
import CheckBox from '../checkbox/CheckBox';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarTab: 0,
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(e) {
    if (e.target.name === 'available') {
      this.setState({
        sidebarTab: 0
      });
    }
    else {
      this.setState({
        sidebarTab: 1
      });
    }
  }

  render() {
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
                  <a name="available" onClick={this.handleTabClick}>
                    Available
                  </a>
                </li>
                <li className={this.state.sidebarTab == 1 ? "xl-6 text-center active" : "xl-6 text-center"}>
                  <a name="completed" onClick={this.handleTabClick}>
                    Completed
                  </a>
                </li>
              </ul>
            </div>
            <ul className="sidebar-list">
              {/* <li className="items">
                <ul className="item-list">
                  <li>
                    PN-220133-0222155
                  </li>
                  <li>
                    ACC-225015ASP
                  </li>
                  <li>
                    10/21/18
                  </li>
                </ul>
                <ul className="sidebar-list-button">
                  <a href="#" className="btn primary xl-6 l-6 m-6 s-6 xs-6">
                    View
                  </a>
                  <a href="#" className="btn success xl-6 l-6 m-6 s-6 xs-6">
                    Accept
                  </a>
                </ul>
              </li> */}
              <li className="items">
                <ul className="item-list">
                  <li>
                    PN-220133-0222155
                  </li>
                  <li>
                    ACC-225015ASP
                  </li>
                  <li>
                    10/21/18
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-eye">&nbsp;
                      <a href="#">
                         View
                      </a>
                    </span>
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-check">&nbsp;
                      <a href="#">
                        Accept
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="items">
                <ul className="item-list">
                  <li>
                    PN-220133-0222155
                  </li>
                  <li>
                    ACC-225015ASP
                  </li>
                  <li>
                    10/21/18
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-eye">&nbsp;
                      <a href="#">
                         View
                      </a>
                    </span>
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-check">&nbsp;
                      <a href="#">
                        Accept
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="items">
                <ul className="item-list">
                  <li>
                    PN-220133-0222155
                  </li>
                  <li>
                    ACC-225015ASP
                  </li>
                  <li>
                    10/21/18
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-eye">&nbsp;
                      <a href="#">
                         View
                      </a>
                    </span>
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-check">&nbsp;
                      <a href="#">
                        Accept
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
              <li className="items">
                <ul className="item-list">
                  <li>
                    PN-220133-0222155
                  </li>
                  <li>
                    ACC-225015ASP
                  </li>
                  <li>
                    10/21/18
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-eye">&nbsp;
                      <a href="#">
                         View
                      </a>
                    </span>
                  </li>
                  <li className="btn-sidebar">
                    <span className="fa fa-check">&nbsp;
                      <a href="#">
                        Claim
                      </a>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;