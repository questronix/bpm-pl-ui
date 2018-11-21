import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class ProcessorHeader extends Component {
  render() {
    return (
      <div className="App">
        <div className="processor p">
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i class="font-black fa fa-file-signature mr-sm font-xl"></i>
              Transaction Details
               </h5>
          </div>
          <div className="xl-12 mb">
            <div className="flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col no-padding mr xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Type:                "
                inputClass="col no-padding mr xl-4 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Status:"
                inputClass="col no-padding mr xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created Date:"
                inputClass="col no-padding mr xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Created By:"
                inputClass="col no-padding xl-2 input-container" />
            </div>
          </div>
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i class="font-black fa fa-inbox mr-sm font-xl"></i>
              Prescreening Details
            </h5>
          </div>
          <div className="xl-12">
            <div className="flex-container ">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Required Premium:"
                inputClass="col no-padding mr input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Suspense:"
                inputClass="col no-padding mr input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="OR Number:"
                inputClass="col no-padding mr input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Date of Signing:"
                inputClass="col no-padding mr input-container" />
              <div className="col no-padding">
                <p className="bold font-sm flex no-margin">
                  Signature Verified:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes">Yes
                        <input type="radio" id="yes" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no">No
                        <input type="radio" id="no" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex-container ">
              <div className="col no-padding mr">
                <p className="bold font-sm flex no-margin">
                  Relative of Agent:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes1">Yes
                        <input type="radio" id="yes1" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no1">No
                        <input type="radio" id="no1" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col no-padding mr">
                <p className="bold font-sm flex no-margin">
                  FATCA Tagging:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes2">Yes
                        <input type="radio" id="yes2" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no2">No
                        <input type="radio" id="no2" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col no-padding mr">
                <p className="bold font-sm flex no-margin">
                  Complete FATCA Requirements?:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes3">Yes
                        <input type="radio" id="yes3" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no3">No
                        <input type="radio" id="no3" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col no-padding mr">
                <p className="bold font-sm flex no-margin">
                  With Reinstating Agent:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes4">Yes
                        <input type="radio" id="yes4" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no4">No
                        <input type="radio" id="no4" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="col no-padding">
                <p className="bold font-sm flex no-margin">
                  With COSAL?:
                    </p>
                <div className="col xl-12">
                  <label className="checkbox container" htmlFor="yes5">Yes
                        <input type="radio" id="yes5" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no5">No
                        <input type="radio" id="no5" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="text-red border-bottom border-lightgray pb-sm mb-sm ml-0 mt-0 mr-0">
            <h5 className="font-prulife">
            <i class="font-black fa fa-file-alt mr-sm font-xl"></i>
              Document Details
            </h5>
          </div>
          <div className="xl-12 container flex-container flex-wrap">
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container">
              <div className="xl-6 margin-auto">
                <a href="/DocumentViewer" className="btn prulife flex f-justify-space-between col" target="_blank">
                  Insured Documment
                <span className="fa fa-file font-white"></span>
                </a>
              </div>
            </div>
            <div className="xl-6 container"></div>
          </div>
        </div>
      </div >
    );
  }
}

export default ProcessorHeader;