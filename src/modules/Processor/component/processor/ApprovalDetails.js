import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class ApprovalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFatcaTagging: null,
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
        <div className="box p">
          <div className="box-header ">
            <h5 class="text-red border-bottom border-lightgray pb-sm mb-sm"><i class="fa fa-file-signature font-black mr-sm"></i>Transaction Details</h5>
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
            <h5 class="text-red border-bottom border-lightgray pb-sm mb-sm"><i class="fa fa fa-inbox font-black mr-sm"></i>Prescreening Details</h5>
          </div>
          <div className="box-body flex-container flex-wrap">
            <div className="mb-sm">
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
            <div className="mb-sm">
              <div className="xl-3">
                <YesNoRadio
                  name="isFatcaTagging"
                  title="FATCA Tagging"
                  isRequired={false}
                  isYesDefault={this.state.isFatcaTagging}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3">
                <YesNoRadio
                  name="isWithReinstatingAgent"
                  title="With Reinstating Agent"
                  isRequired={false}
                  isYesDefault={this.state.isWithReinstatingAgent}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3">
                <YesNoRadio
                  name="isRelativeOfAgent"
                  title="Relative of Agent"
                  isRequired={false}
                  isYesDefault={this.state.isRelativeOfAgent}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3">
                <YesNoRadio
                  name="isSignatureVerified"
                  title="Signature Verified"
                  isRequired={false}
                  isYesDefault={this.state.isSignatureVerified}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
            </div>
            <div className="mb-sm">
              <div className="xl-3">
                <YesNoRadio
                  name="isCompleteFATCARequirements"
                  title="Complete FATCA Requirements?"
                  isRequired={false}
                  isYesDefault={this.state.isCompleteFATCARequirements}
                // onSelect={this.handleSignatureVerifiedChange}
                />
              </div>
              <div className="xl-3">
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
            <h5 class="text-red border-bottom border-lightgray pb-sm mb-sm"><i class="fa fa fa-inbox font-black mr-sm"></i>Prescreening Details</h5>
          </div>
          <div className="box-body flex-container flex-wrap">

          </div>
        </div>
      </div >
    );
  }
}

export default ApprovalDetails;