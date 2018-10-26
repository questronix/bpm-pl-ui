import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';

class Nav extends Component {


  render() {

    const links = this.props.links.map((link, i) => (
      < Link to={link.path}>
        <li key={i}>
          <span className={link.icon}></span>
          <div className={link.active}></div>
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
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;