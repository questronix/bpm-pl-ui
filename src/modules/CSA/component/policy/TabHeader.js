import React, { Component } from 'react';
import PolicyInformationNew from './PolicyInformationNew';
import AgentinformationNew from './AgentinformationNew';

class TabHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {},
      visible: false
    }
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible(){
    this.setState({
      visible: !this.state.visible})
  }

  render() {

    return (
      <div className="App">
        <div className="box-body">
          <div className={this.state.visible ? "policyinfo-container active" : "policyinfo-container"}>
            <h3 className="box-header no-margin">
              Policy Information
              </h3>
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Policy Information
            </h2>
            </div>
            <PolicyInformationNew policy={this.state.policy} />
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Agent Information
            </h2>
            </div>
            <AgentinformationNew policy={this.state.policy} />
          </div>
          <div className="flex f-end showmore">
            <a href="#" className="text-with-icon" onClick={this.isVisible}>
              Show more
              &nbsp; <span className="fa fa-chevron-down"></span>
            </a>
          </div>
          <hr />
        </div>
      </div >
    );
  }
}

export default TabHeader;