// TODO: FIX import

import React, { Component } from 'react';

class FilterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpen: false
    }
  }

  toggleMenu() {
    this.setState({
      isFilterOpen: !this.state.isFilterOpen
      // console.log(th);

    });
  }

  render() {

    return (
      <div className="dropdown">
        <a
          className="btn alt"
          href="#"
          onClick={() => this.toggleMenu()}>
          <span className="fa fa-filter"></span>&nbsp;
          FILTER
        </a>
        <div className={this.state.isFilterOpen ? 'dropdown-menu active' : 'btn alt dropdown-menu'}>
          <ul>
            <a href="#">
              <li>
                Policy number
              </li>
            </a>
            <a href="#">
              <li>
                Transaction No.
              </li>
            </a>
            <a href="#">
              <li>
                TransactionType
              </li>
            </a>
            <a href="#">
              <li>
                Policy Owner
              </li>
            </a>
            <a href="#">
              <li>
                Insured Owner
              </li>
            </a>
            <a href="#">
              <li>
                Date created
              </li>
            </a>
            <a href="#">
              <li>
                Created By
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default FilterButton;