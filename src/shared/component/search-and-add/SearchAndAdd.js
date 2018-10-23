// TODO: FIX import

import React, { Component } from 'react';
class SearchAndAdd extends Component {
  render() {
    return (
      <div>
        <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
          <div className="">
            <input className="input-search" placeholder="Search task..." />
            <span className="fa fa-search input-icon"></span>
            <button className="btn bright-blue">
              Search
              </button>
          </div>
          <div className="tooltip">
            <span className="tooltip-text">
              Add a task
            </span>
            <button className="round-btn grass-green" onClick={this.createTask}><span className="fa fa-plus"></span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAndAdd;