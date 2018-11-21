import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';
import ApprovalDetails from './ApprovalDetails';
import PolicyInfoHeader from '../../../CSA/component/policy/PolicyInfoHeader';
import AgentInfoHeader from '../../../CSA/component/policy/AgentInfoHeader';
import PolicyInsuredOwnerContainer from './PolicyInsuredOwnerContainer';
import ReviewDetails from './PolicyInsuredOwnerContainer';

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
        <div className="flex-container">
          <div className="col no-padding xl-8">
            <ApprovalDetails isFatcaTagging={this.state.isFatcaTagging} />
          </div>
          <div className="col no-padding xl-4">
            <div className="">
              <h1 className="text-darkgray larger normal mb mt-0">
                For Approval
              </h1>
            </div>
            <ReviewDetails />
          </div>
        </div>
      </div >

    );
  }
}

export default ApproverContainer;