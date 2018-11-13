import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';
import PolicyInformationNew from './PolicyInformationNew';
import AgentinformationNew from './AgentinformationNew';
import PolicyInfoHeader from './PolicyInfoHeader';
import AgentInfoHeader from './AgentInfoHeader';

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
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Policy Information
            </h2>
            </div>
            <PolicyInfoHeader  policy={this.state.policy} />
            <div className="col xl-12">
              <h2 className="font-prulife no-margin">
                Agent Information
            </h2>
            </div>
            <AgentInfoHeader policy={this.state.policy} />
          </div>
          <div className="flex f-end showmore">
            <a href="#" className="text-with-icon container flex f-center" onClick={this.isVisible} accessKey="s">
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