import React, {Component} from 'react';

class SideBar extends Component {
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
          <ul className="sidebar-list">
            <li>
              <a href="jsx-a11y/href-no-hash">
                This is a test
              </a>
            </li>
            <li>
              <a href="jsx-a11y/href-no-hash">
                This is a test
              </a>
            </li>
            <li>
              <a href="jsx-a11y/href-no-hash">
                This is a test
              </a>
            </li>
            <li>
              <a href="jsx-a11y/href-no-hash">
                This is a test
              </a>
            </li>
            <li>
              <a href="jsx-a11y/href-no-hash">
                This is a test
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;