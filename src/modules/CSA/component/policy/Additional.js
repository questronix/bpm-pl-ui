import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';

class FatcaNew extends Component {
  constructor(props) {
    super(props);
    
    this.handleYesNoChange = this.handleYesNoChange.bind(this);
  }

  handleYesNoChange(name, value) {
    this.props.onYesNoSelect(name, value);
  }

  render() {
    return (
      <div>
        <div className="additional-content container">
          <h2>Additional Details</h2>
          <div className="flex-container flex-wrap">
            <div className="xl-7 margin-auto flex-container flex-wrap">
              <Input
                inputPlaceholder="mm/dd/yyyy"
                inputClass="input-container xl-6"
                inputLabel="Date of Signing:"
                txtboxClass="bg-lightgray" />
              <div className="xl-6">
                <YesNoRadio
                  name="isRelativeOfAgent"
                  title="Relative Of Agent"
                  isRequired={false}
                  isYesDefault={this.props.isRelativeOfAgent}
                  onSelect={this.handleYesNoChange}
                />
                {/* <p className="label container">
                  Relative of Agent:
                </p>
                <div className="xl-6">
                  <label className="checkbox container" htmlFor="yes">Yes
                    <input type="radio" id="yes" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no">No
                  <input type="radio" id="no" name="Relative" />
                    <span className="checkmark"></span>
                  </label>
                </div> */}
              </div>
              <div className="xl-6">
                <YesNoRadio
                  name="isFatcaTagging"
                  title="FATCA Tagging"
                  isRequired={false}
                  isYesDefault={this.props.isFatcaTagging}
                  onSelect={this.handleYesNoChange}
                />
                {/* <p className="label container">
                  FATCA Tagging:
                </p>
                <div className="xl-6">
                  <label className="checkbox container" htmlFor="yes1">Yes
                    <input type="radio" id="yes1" name="FATCA" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no1">No
                  <input type="radio" id="no1" name="FATCA" />
                    <span className="checkmark"></span>
                  </label>
                </div> */}
              </div>
              <div className="xl-6">
              <YesNoRadio
                  name="withReinstatementAgent"
                  title="With Reinstating Agent"
                  isRequired={false}
                  isYesDefault={this.props.withReinstatementAgent}
                  onSelect={this.handleYesNoChange}
                />
                {/* <p className="label container">
                  With Reinstating Agent:
                </p>
                <div className="xl-6">
                  <label className="checkbox container" htmlFor="yes2">Yes
                    <input type="radio" id="yes2" name="WithReinstating" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no2">No
                  <input type="radio" id="no2" name="WithReinstating" />
                    <span className="checkmark"></span>
                  </label>
                </div> */}
              </div>
              <div className="xl-6">
              <YesNoRadio
                  name="completeFatca"
                  title="Complete FATCA Requirements?"
                  isRequired={false}
                  isYesDefault={this.props.completeFatca}
                  onSelect={this.handleYesNoChange}
                />
                {/* <p className="label container">
                Complete FATCA Requirements?:
                </p>
                <div className="xl-6">
                  <label className="checkbox container" htmlFor="yes3">Yes
                    <input type="radio" id="yes3" name="completeFATCA" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no3">No
                  <input type="radio" id="no3" name="completeFATCA" />
                    <span className="checkmark"></span>
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FatcaNew;