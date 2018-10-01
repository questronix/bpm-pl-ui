import React, {Component} from 'react';

class SideBar extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar col xl-2 l-2  m-2  s-hide  xs-hide">
          <div className="sidebar-header">
            <h3>
              Tasks
            </h3>
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