import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './override.css';
import routes from './routes';

class App extends Component {

  // componentDidMount() {
  //   window.addEventListener('beforeunload', this.handleLeavePage);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.handleLeavePage);
  // }

  // handleLeavePage(e) {
  //   // if there's unsaved tasks
  //   const confirmationMessage = '';
  //   e.returnValue = confirmationMessage;
  //   return confirmationMessage;              
  // }

  render() {
    return (
      <Router>
        <Switch>
            {routes.map((route, index) => 
              <Route key={index} {...route} />
            )}
        </Switch>
    </Router>
    );
  }
}

export default App;
