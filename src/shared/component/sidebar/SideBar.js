import React, {Component} from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar col xl-2">
          <div className="sidebar-header">
            <h3>
              Tasks
            </h3>
          </div>
          <ul className="sidebar-list">
            <li>
              <a href="#">
                This is a test
              </a>
            </li>
            <li>
              <a href="#">
                This is a test
              </a>
            </li>
            <li>
              <a href="#">
                This is a test
              </a>
            </li>
            <li>
              <a href="#">
                This is a test
              </a>
            </li>
            <li>
              <a href="#">
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