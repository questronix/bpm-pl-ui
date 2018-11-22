import React, { Component } from 'react';
import ApprovalDetails from './ApprovalDetails';
import ReviewDetails from './PolicyInsuredOwnerContainer';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class UnderwriterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <div className="">
          <h1 className="text-darkgray larger normal mb">
            For Underwriter
          </h1>
          <div className="box col no-padding">
            <div className="p">
              <h5 className="text-red border-bottom border-lightgray pb-sm mb-sm">
                <i className="fa fa-file-signature mr-sm font-xl font-black"></i>
                Transaction Details
                </h5>
              <div className="flex-container flex-wrap mb-sm">
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Policy Number:"
                  inputClass="xl-3 mr input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Reinsurance:"
                  inputClass="xl-3 mr input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Premium Aggregation:"
                  inputClass="xl-3 mr input-container"
                // value={}
                />
                <Input
                  editable="false"
                  txtboxClass="no-border"
                  inputLabel="Sum Assured:"
                  inputClass="xl-3 mr input-container"
                // value={}
                />
              </div>
              <div className="flex-container flex-wrap mb-sm">
                <div className="xl-3">
                  <YesNoRadio
                    name="isWithClaimRecords"
                    title="With Claim Records"
                    isRequired={false}
                    isYesDefault={this.state.isWithClaimRecords}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3">
                  <YesNoRadio
                    name="isWithClaimRecords"
                    title="With Claim Records"
                    isRequired={false}
                    isYesDefault={this.state.isWithClaimRecords}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3">
                  <YesNoRadio
                    name="isWithClaimRecords"
                    title="With Claim Records"
                    isRequired={false}
                    isYesDefault={this.state.isWithClaimRecords}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
                <div className="xl-3">
                  <YesNoRadio
                    name="isWithClaimRecords"
                    title="With Claim Records"
                    isRequired={false}
                    isYesDefault={this.state.isWithClaimRecords}
                  // onSelect={this.handleSignatureVerifiedChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex-container border-bottom flex-wrap border-top border-lightgray">
              <div className="xl-6 border-right border-lightgray p">
                <h5 className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mr-0 mt-0">
                  <i className="fa fa-user-shield mr-sm font-xl font-black"></i>
                  Insured Details
                </h5>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="Name:"
                    inputLabel="Policy Number:"
                    inputClass="xl-8 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Attained Age:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-location-arrow"></span>
                  <p className="font-lg bold">Present Address</p>
                </div>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-map-marker-alt"></span>
                  <p className="font-lg bold">Permanent Address</p>
                </div>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-map-marked-alt"></span>
                  <p className="font-lg bold">Business Address</p>
                </div>
                <div className="flex-container flex-wrap">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
              </div>
              <div className="xl-6 border-right border-lightgray p">
                <h5 className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mr-0 mt-0">
                  <i className="fa fa-user-tag mr-sm font-xl font-black"></i>
                  Insured Details
                </h5>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="Name:"
                    inputLabel="Policy Number:"
                    inputClass="xl-8 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Attained Age:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-location-arrow"></span>
                  <p className="font-lg bold">Present Address</p>
                </div>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-map-marker-alt"></span>
                  <p className="font-lg bold">Permanent Address</p>
                </div>
                <div className="flex-container flex-wrap mb">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
                <div className="flex xl-12 mb-sm">
                  <span className="text-red stroke mr-xs fa fa-map-marked-alt"></span>
                  <p className="font-lg bold">Business Address</p>
                </div>
                <div className="flex-container flex-wrap">
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Street/Municipality:"
                    inputClass="xl-6 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Country:"
                    inputClass="xl-4 mr input-container"
                  // value={}
                  />
                  <Input
                    editable="false"
                    txtboxClass="no-border"
                    inputLabel="Zip Code:"
                    inputClass="xl-2 mr input-container"
                  // value={}
                  />
                </div>
              </div>
            </div>
            <div className="p">
              <textarea className="bg-lightgray border rounded border-gray no-padding col" placeholder="Remarks"></textarea>
              <p className="text-italic font-sm text-darkgray mb-sm"><b className="text-darkgray">Note:</b> remarks is required if the resolution is declined.</p>

              <div className="flex-container f-end flex f-center">
                <div className="">
                  <label className="checkbox container" htmlFor="thisid">
                    Postponed
                    <input
                      type="radio"
                      id="thisid"
                      name="namename"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="">
                  <label className="checkbox container" htmlFor="this2">
                    Declined
                    <input
                      type="radio"
                      id="this2"
                      name="namename"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="">
                  <label className="checkbox container" htmlFor="this3">
                    Awaiting Requirements
                    <input
                      type="radio"
                      id="this3"
                      name="namename"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <button className="ml-0 btn prugray mr">
                  <i className="fa fa-times mr-sm"></i>
                  DISSAPROVE
                </button>
                <button className="ml-0 btn darkgreen">
                  <i className="fa fa-check mr-sm"></i>
                  APPROVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >

    );
  }
}

export default UnderwriterContainer;