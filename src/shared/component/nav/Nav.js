import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand font-white">
            <a href="jsx-a11y/href-no-hash">
              BPM
            </a>
          </div>
          <div className="navmenu m-hide s-hide xs-hide">
            <ul>
              <li>
                <a href="jsx-a11y/href-no-hash">
                  Item 1
                </a>
              </li>
              <li>
                <a href="jsx-a11y/href-no-hash">
                  Item 2
                </a>
              </li>
              <li>
                <a href="jsx-a11y/href-no-hash">
                  Item 3
                </a>
              </li>
              <li>
                <a href="jsx-a11y/href-no-hash">
                  Item 4
                </a>
              </li>
              <li>
                <a href="jsx-a11y/href-no-hash">
                  Item 5
                </a>
              </li>
              <button className="btn prulife">
                Logout
              </button>
            </ul>
          </div>
          <div className="navmenu xl-hide l-hide">
            <ul>
              <button className="btn-alt-s info">Dropdown</button>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;