import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container xl-12 l-12 m-12 s-12 xs-12">
          <div className="tabs col">
            <div className="flex-container col xl-12 no-padding tab-container">
              <div className="tab-title col xl-2 l-2 m-2 s-2 xs-2 tab-active">
                Insured Informatmion
              </div>
              <div className="tab-title col xl-2 l-2 m-2 s-2 xs-2">
                Owner Informatmion
              </div>
            </div>
            <div className="col">
              <div className="tab-header">
                <h3>
                  {this.props.tabHeader}
              </h3>
              </div>
              <div className="tab-body">
                  {this.props.tabBody}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;