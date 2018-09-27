import React, { Component } from 'react';

import './App.css';
import './override.css';
import Search from './modules/search/component/Search';
import './App.css';
// import Login from './modules/login/component/Login';
import Policy from './modules/policy/component/Policy';


class App extends Component {

  render() {
    return (
      <div>
      <Policy/>
      </div>
    );
  }
}

export default App;
