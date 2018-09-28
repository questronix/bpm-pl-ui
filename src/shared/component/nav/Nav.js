import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar fit-width">
          <div className="nav-brand font-white">
            <a href="#">
              BPM
            </a>
          </div>
          <div className="navmenu">
            <ul>
              <li>
                <a href="#">
                  Item 1
                </a>
              </li>
              <li>
                <a href="#">
                  Item 2
                </a>
              </li>
              <li>
                <a href="#">
                  Item 3
                </a>
              </li>
              <li>
                <a href="#">
                  Item 4
                </a>
              </li>
              <li>
                <a href="#">
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