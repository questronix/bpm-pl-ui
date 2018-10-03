import React, { Component } from 'react';

class PageLoading extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-3 page-loading-header">
            <h4 className="no-margin invisible">
              Placehonder Header
            </h4>
          </div>
          <div className="col xl-12 page-loading-body">
            <p className="invisible">
              this is a card body
            </p>
          </div>
          <div className="col xl-3 page-loading-header">
            <h4 className="no-margin invisible">
              Placehonder Header
            </h4>
          </div>
          <div className="col xl-12 page-loading-body">
            <p className="invisible">
              this is a card body
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageLoading;