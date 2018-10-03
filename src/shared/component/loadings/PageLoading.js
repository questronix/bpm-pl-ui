import React, { Component } from 'react';

class PageLoading extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="col xl-3 bg-lightgray">
            <h3 className="invisible">
              Placehonder Header
            </h3>
          </div>
          <div className="card-body">
            this is a card body
          </div>
        </div>
      </div>
    );
  }
}

export default PageLoading;