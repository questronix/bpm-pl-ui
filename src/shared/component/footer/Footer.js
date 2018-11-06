// TODO: FIX import

import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  } 

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div className="footer">
       <img src="https://i.imgur.com/vjUoo1H.png"></img>
      </div>
    );
  }
}

export default Footer;