import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {


  render() {

    const links = this.props.links.map((link, i) => (
      <li key={i}>
        <Link to={link.path}> {link.label} </Link>
      </li>
    ));

    return (
      <div className="App">
        <nav className="navbar">
          <div className="nav-brand font-prulife">
            <a href="jsx-a11y/href-no-hash">
              BPM
            </a>
          </div>
          <div className="navmenu m-hide s-hide xs-hide">
            <ul>
              {links}
              <li>
                <a className="btn prulife" href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="navmenu xl-hide l-hide">
            <ul>
              {/* <button className="btn-alt-s info">Dropdown</button> */}
              <li>
                <a href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;