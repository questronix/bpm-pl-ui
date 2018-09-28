import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import './override.css';
import './App.css';
import Login from './modules/login/component/Login';
import Policy from './modules/policy/component/Policy';
import Nav from './shared/component/nav/Nav';
import SideBar from './shared/component/sidebar/SideBar';

// TODO: temporary only
function Home() {
  return (
    <div>
      <Nav/>
      <SideBar/>
      <Policy/>
    </div>
  );
}

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        {/* <Redirect from="/" to="login" /> */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
    );
  }
}

export default App;
