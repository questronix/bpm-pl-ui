import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';
import PolicyInformationNew from './PolicyInformationNew';
import AgentinformationNew from './AgentinformationNew';

class TabHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {},
    }
  }

  render() {

    return (
      <div className="App">
        <div className="box-body">
          <div className="policyinfo-container active">
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
            <a href="#" className="text-with-icon">
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