import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class ApprovalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFatcaTagging: null,
      isWithReinstatingAgent: null,
      isRelativeOfAgent: null,
      isSignatureVerified: null,
      isCompleteFATCARequirements: null,
      isWithCosal: null,
      isDowJones: null,
      isMid: null,
      isBeyondMpt: null,
      isWithPendingPolicies: null,
      isWithClaimRecords: null,
      isWithReinsurance: null,
      isWithSubstandardRating: null,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <h1 className="text-darkgray larger normal mb mt-0">
            For Approval
          </h1>
        </div>
        <div className="box approval">
          <div className="p">
            <div className="box-header ">
              <h5 className="text-red border-bottom border-lightgray pb-sm mb-sm"><i className="fa fa-file-signature font-black mr-sm"></i>Transaction Details</h5>
            </div>
            <div className="box-body flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-2 input-container"
              // value={}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Type:"
                inputClass="col xl-4 input-container"
              // value={}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Status:"
                inputClass="col xl-2 input-container"
              // value={}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created Date:"
                inputClass="col xl-2 input-container"
              // value={}
              />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created By:"
                inputClass="col xl-2 input-container"
              // value={}
              />
            </div>
            <div className="box-header ">
              <h5 className="text-red border-bottom border-lightgray pb-sm mb-sm"><i className="fa fa fa-inbox font-black mr-sm"></i>Prescreening Details</h5>
            </div>
            <div className="box-body flex-container flex-wrap">
              <div className="col flex-container flex-wrap no-padding">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Required Premium:"
                  inputClass="col xl-3 input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Suspense:"
                  inputClass="col xl-3 input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="OR Number:"
                  inputClass="col xl-3 input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Date of Signing:"
                  inputClass="col xl-3 input-container"
                // value={}
                />
              </div>
              <div className="col flex-container flex-wrap no-padding">
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isFatcaTagging"
                    title="FATCA Tagging"
                    isRequired={false}
                    isYesDefault={this.state.isFatcaTagging}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isWithReinstatingAgent"
                    title="With Reinstating Agent"
                    isRequired={false}
                    isYesDefault={this.state.isWithReinstatingAgent}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isRelativeOfAgent"
                    title="Relative of Agent"
                    isRequired={false}
                    isYesDefault={this.state.isRelativeOfAgent}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isSignatureVerified"
                    title="Signature Verified"
                    isRequired={false}
                    isYesDefault={this.state.isSignatureVerified}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
              </div>
              <div className="col flex-container flex-wrap no-padding">
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isCompleteFATCARequirements"
                    title="Complete FATCA Requirements?"
                    isRequired={false}
                    isYesDefault={this.state.isCompleteFATCARequirements}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3 ">
                  <YesNoRadio
                    name="isWithCosal"
                    title="With COSAL"
                    isRequired={false}
                    isYesDefault={this.state.isWithCosal}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
              </div>
            </div>
            <div className="box-header ">
              <h5 className="text-red border-bottom border-lightgray pb-sm mt mb-sm"><i className="fa fa-sync font-black mr-sm"></i>Processing Details</h5>
            </div>
            <div className="box-body flex-container flex-wrap ">
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isDowJones"
                  title="Dow Jones"
                  isRequired={false}
                  isYesDefault={this.state.isDowJones}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isMid"
                  title="MID"
                  isRequired={false}
                  isYesDefault={this.state.isMid}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="MPT:"
                inputClass="col xl-3 mb input-container"
              // value={}
              />
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isBeyondMpt"
                  title="Beyond MPT"
                  isRequired={false}
                  isYesDefault={this.state.isBeyondMpt}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isWithPendingPolicies"
                  title="With Pending Policies"
                  isRequired={false}
                  isYesDefault={this.state.isWithPendingPolicies}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isWithClaimRecords"
                  title="With Claim Records"
                  isRequired={false}
                  isYesDefault={this.state.isWithClaimRecords}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isWithReinsurance"
                  title="With Reinsurance"
                  isRequired={false}
                  isYesDefault={this.state.isWithReinsurance}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3 mb">
                <YesNoRadio
                  name="isWithSubstandardRating"
                  title="With Substandard Rating"
                  isRequired={false}
                  isYesDefault={this.state.isWithSubstandardRating}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
            </div >
          </div>
          <div className="p border-top border-lightgray">
            <div className="col no-padding flex-container">
              <textarea className="xl-12 p-xs bg-lightgray border rounded border-gray" placeholder="Remarks"></textarea>
            </div>
            <p className="text-italic font-sm text-darkgray mb-sm mt-0"><b className="text-darkgray">Note:</b> remarks is required if the resolution is declined.</p>
            <div className="flex f-end">
              <button className="btn prugray ml">
               <i className="icon fa fa-times mr-sm"></i>DECLINE
              </button>
              <button className="btn darkgreen ml">
               <i className="icon fa fa-check mr-sm"></i>APPROVE
              </button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ApprovalDetails;