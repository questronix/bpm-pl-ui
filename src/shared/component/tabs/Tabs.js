import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container xl-12 l-12 m-12 s-12 xs-12">
          <div className="tabs col">
            <div className="flex-container col xl-12 no-padding tab-container">
              <div className="tab-title col xl-2 l-2 m-2 s-2 xs-2 tab-active">
                active tab
              </div>
              <div className="tab-title col xl-2 l-2 m-2 s-2 xs-2 tab-disabled">
                disabled tab
              </div>
              <div className="tab-title col xl-2 l-2 m-2 s-2 xs-2">
                other tab
              </div>
            </div>
            <div className="col">
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
      </div>
    );
  }
}

export default Tabs;