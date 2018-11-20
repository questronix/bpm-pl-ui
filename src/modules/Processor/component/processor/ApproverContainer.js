import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';
import ApprovalDetails from './ApprovalDetails';
import PolicyInfoHeader from '../../../CSA/component/policy/PolicyInfoHeader';
import AgentInfoHeader from '../../../CSA/component/policy/AgentInfoHeader';

class ApproverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFatcaTagging: null,
    }
  }
  render() {
    return (
      <div className="App">
        <ApprovalDetails isFatcaTagging={this.state.isFatcaTagging} />
      </div >
    );
  }
}

export default ApproverContainer;