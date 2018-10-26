import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

class Nav extends Component {


  render() {
    const path = window.location.pathname;

    const links = this.props.links.map((link, i) => (
      < Link to={link.path}>
        <li key={i}>
          <span className={link.icon}></span>
          <div className={path == link.path && 'true'}></div>
          {link.label}
        </li>
      </Link>
    ));

    return (
      <div className="App header-container">
        <Header/>
        <nav className="navbar">
          <div className="navmenu m-hide s-hide xs-hide">
            <ul>
              {links}
                <a className="btn xl-10 prulife login-btn " href="/login">
                  Logout
                </a>
            </ul>
          </div>
          <div className="navmenu xl-hide l-hide">
            <ul>
                <a href="/login">
                  Logout2
                </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;