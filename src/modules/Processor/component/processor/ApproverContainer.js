import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

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
      {/* <ApprovalDetails isFatcaTagging={this.state.isFatcaTagging} /> */}
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
            <YesNoRadio
              name="isFatcaTagging"
              title="FATCA Tagging:"
              isRequired={true}
              isYesDefault={this.state.isFatcaTagging}
              // onSelect={this.handleSignatureVerifiedChange}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default ApproverContainer;