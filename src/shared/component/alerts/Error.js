import React, { Component } from 'react';

class ErrorAlert extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="col xl-12 l-12 m-12 s-12 xs-12 bg-danger">
            <h3 className="font-white text-center">
              <span className="fa fa-exclamation-triangle font-white "></span> &nbsp;
              {this.props.children}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorAlert;