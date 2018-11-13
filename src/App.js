import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './override.css';
import routes from './routes';
import { AppContext } from './context/app-context';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policy: {
        hey: 'sample'
      },
    }

    this.handleContextUpdate = this.handleContextUpdate.bind(this);
  }

  handleContextUpdate(state, val) {
    this.setState({
      [state]: val,
    });
  }

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
      <AppContext.Provider value={this.state}>
        <Router>
          <Switch>
              {routes.map((route, index) => 
                <Route key={index} {...route} />
              )}  
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
