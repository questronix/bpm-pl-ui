import React, { Component } from 'react';
import './App.css';
// import Login from './modules/login/component/Login';
import Policy from './modules/policy/component/Policy';

class App extends Component {

  render() {
    return (
      <div>
        {/* <Login /> */}
        <Policy />
      </div>
    );
  }
}

export default App;
