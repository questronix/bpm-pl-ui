import React, { Component } from 'react';

import './App.css';
import './override.css';
// import Search from './modules/search/component/Search';
import './App.css';
import Policy from './modules/policy/component/Policy';
import Nav from './shared/component/nav/Nav';
import SideBar from './shared/component/sidebar/SideBar';


class App extends Component {

  render() {
    return (
      <div>
      <Nav/>
      <SideBar/>
      <Policy/>
      </div>
    );
  }
}

export default App;
