import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class ProcessorHeader extends Component {
  render() {
    return (
      <div className="App">
        <div className="processor">
          <div className="header">
            <h3 className="font-prulife">
              Transaction Details
               </h3>
            <hr />
          </div>
          <div className="xl-12 container">
            <div className="flex-container flex-wrap">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-4 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-2 input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Transaction Number:"
                inputClass="col xl-2 input-container" />
            </div>
          </div>
          <div className="header">
            <h3 className="font-prulife">
              Prescreening Details
               </h3>
            <hr />
          </div>
          <div className="xl-12 container">
            <div className="flex-container ">
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Required Premium:"
                inputClass="col input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Suspense:"
                inputClass="col input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="OR Number:"
                inputClass="col input-container" />
              <Input
                editable="false"
                txtboxClass="no-border"
                inputLabel="Date of Signing:"
                inputClass="col input-container" />
              <div className="col no-padding">
                <p className="label flex no-margin">
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
              <div className="col">
                <p className="label flex no-margin">
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
              <div className="col">
                <p className="label flex no-margin">
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
              <div className="col">
                <p className="label flex no-margin">
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
              <div className="col">
                <p className="label flex no-margin">
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
              <div className="col">
                <p className="label flex no-margin">
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
        </div>
      </div >
    );
  }
}

export default ProcessorHeader;