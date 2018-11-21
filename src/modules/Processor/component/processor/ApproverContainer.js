import React, { Component } from 'react';
import ApprovalDetails from './ApprovalDetails';
import ReviewDetails from './PolicyInsuredOwnerContainer';

class ApproverContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="col no-padding xl-8">
            <ApprovalDetails
              isFatcaTagging={this.state.isFatcaTagging}
              isFatcaTagging={this.state.isFatcaTagging}
              isWithReinstatingAgent={this.state.isWithReinstatingAgent}
              isRelativeOfAgent={this.state.isRelativeOfAgent}
              isSignatureVerified={this.state.isSignatureVerified}
              isCompleteFATCARequirements={this.state.isCompleteFATCARequirements}
              isWithCosal={this.state.isWithCosal}
              isDowJones={this.state.isDowJones}
              isMid={this.state.isMid}
              isBeyondMpt={this.state.isBeyondMpt}
              isWithPendingPolicies={this.state.isWithPendingPolicies}
              isWithClaimRecords={this.state.isWithClaimRecords}
              isWithReinsurance={this.state.isWithReinsurance}
              isWithSubstandardRating={this.state.isWithSubstandardRating}
            />
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