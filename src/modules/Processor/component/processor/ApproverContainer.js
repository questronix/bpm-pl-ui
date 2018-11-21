import React, { Component } from 'react';
import ApprovalDetails from './ApprovalDetails';
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
        <ApprovalDetails isFatcaTagging={this.state.isFatcaTagging} />
        <ReviewDetails/>
      </div >

    );
  }
}

export default ApproverContainer;