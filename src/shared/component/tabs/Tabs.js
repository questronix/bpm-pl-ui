import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container xl-12 l-12 m-12 s-12 xs-12">
          <div className="tabs col">
            <div className="flex-container col xl-12 no-padding">
              <div className="tab-title col xl-1 l-1 m-1 s-1 xs-1 tab-active">
                Tab 1
            </div>
              <div className="tab-title col xl-1 l-1 m-1 s-1 xs-1 disabled">
                Tab 1
            </div>
            </div>
            <div className="tab-header">
              <h3>
                This is a tab header
              </h3>
            </div>
            <div className="tab-body">
              <div className="card-alt">
                <div className="card-header">
                  <h3 className="no-padding no-margin">
                    Card header
                  </h3>
                </div>
                <div className="card-body">
                  <p>
                    This is a card body
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;