import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar fit-width">
          <div className="nav-brand font-white">
            <a href="jsx-a11y/href-no-hash">
              BPM
            </a>
          </div>
          <div className="navmenu">
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
        </nav>
      </div>
    );
  }
}

export default Nav;