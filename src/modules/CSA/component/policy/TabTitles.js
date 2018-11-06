import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

class TabTitles extends Component {

  render() {

    return (
      <div className="App">
        <div className="tab-title-container">
          <div className={this.state.Tabs == 0 ? "tab-title active" : "tab-title"}>
            <h4 className="circle">
              1
                </h4>
            <a onClick={() => { this.handleTabClick(0) }}>
              <h4>
                Transaction Selection
                  </h4>
            </a>
            <span class="white"></span><span class="gray"></span>
          </div>
          <div className={this.state.Tabs == 1 ? "tab-title active" : "tab-title"}>
            <h4 className="circle">
              2
                </h4>
            <a onClick={() => { this.handleTabClick(1) }}>
              <h4>
                Additional Prolicy info
                  </h4>
            </a>
            <span class="white"></span><span class="gray"></span>
          </div>
          <div className={this.state.Tabs == 2 ? "tab-title active" : "tab-title"}>
            <h4 className="circle">
              3
                </h4>
            <a onClick={() => { this.handleTabClick(2) }}>
              <h4>
                Insured Details
                  </h4>
            </a>
            <span class="white"></span><span class="gray"></span>
          </div>
          <div className={this.state.Tabs == 3 ? "tab-title active" : "tab-title"}>
            <h4 className="circle">
              4
                        </h4>
            <a onClick={() => { this.handleTabClick(3) }}>
              <h4>
                Insured Details
                          </h4>
            </a>
          </div>
        </div>
      </div >
    );
  }
}

export default TabTitles;