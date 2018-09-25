import React, { Component } from 'react';
// import logo from './logo.svg';s
// import './App.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input className="input" type="text" placeholder="Seach policy information">
        </input>          
        <button className="btn primary">
          Search
        </button>
        <button className="btn warning">
          Search
        </button>
        <button className="btn success">
          Search
        </button>
        <button className="btn danger">
          Search
        </button>
        <button className="btn info">
          Search
        </button>
      </div>
    );
  }
}

export default Search;