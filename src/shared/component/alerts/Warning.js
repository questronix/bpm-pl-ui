import React, { Component } from 'react';

class WarningAlert extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="col xl-12 l-12 m-12 s-12 xs-12 bg-warning">
            <h3 className="font-white text-center">
              This is an error
          </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WarningAlert;