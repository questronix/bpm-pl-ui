import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import PolicyInfoHeader from '../../../CSA/component/policy/PolicyInfoHeader';
import AgentInfoHeader from '../../../CSA/component/policy/AgentInfoHeader';

class ReviewTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: {},
      visible: false
    }
    this.isVisible = this.isVisible.bind(this);
  }
  isVisible() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div className="App processor-container">
        <div className="showmore bg-bright-blue flex">
          <button className="col flex f-justify-space-between no-border bg-none text-with-icon flex f-center" onClick={this.isVisible} accessKey="s">
            <h3 className="font-white no-margin">
            Policy Information
            </h3>
              &nbsp; <span className="fa fa-chevron-down font-white"></span>
          </button>
        </div>
        <div className={this.state.visible ? "processor-dropdown active" : "processor-dropdown"}>
          <div className="col xl-12">
            <h2 className="font-prulife no-margin">
              Policy Information
            </h2>
          </div>
          {/* <PolicyInfoHeader /> */}
          <div className="col xl-12">
            <h2 className="font-prulife no-margin">
              Agent Information
            </h2>
          </div>
          <div className="col xl-12">
            <h2 className="font-prulife no-margin">
              Agent Information
            </h2>
          </div>
          <div className="col xl-12">
            <h2 className="font-prulife no-margin">
              Agent Information
            </h2>
          </div>
          <div className="col xl-12">
            <h2 className="font-prulife no-margin">
              Agent Information
            </h2>
          </div>
          {/* <AgentInfoHeader /> */}
        </div>
      </div >
    );
  }
}

export default ReviewTransaction;