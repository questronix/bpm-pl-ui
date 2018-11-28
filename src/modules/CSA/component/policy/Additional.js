import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';
import InputDate from '../../../../shared/component/input/InputDate';

class FatcaNew extends Component {
  constructor(props) {
    super(props);
    
    this.handleYesNoChange = this.handleYesNoChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleYesNoChange(name, value) {
    this.props.onYesNoSelect(name, value);
  }

  handleDateChange(e) {
    this.props.onDateChange(e.target.name, e.target.value);
  }

  handleInputChange(name, value) {
    this.props.onTextChange(name, value);
  }

  render() {
    return (
      <div>
        <div className="additional-content container">
          <h2>Additional Details</h2>
          <div className="flex-container flex-wrap">
            <div className="xl-7 margin-auto flex-container flex-wrap">
            <div className="input-container xl-6 mr">
              <label className="">
                Date of Signing:
              </label>
              <input
                type="date" 
                name="dateOfSigning"
                value={this.props.dateOfSigning}
                onChange={this.handleDateChange}
                className="bg-lightgray" />
            </div>
              {/* <InputDate
                inputPlaceholder="mm/dd/yyyy"
                inputClass="input-container xl-6 mr"
                inputLabel="Date of Signing:"
                txtboxClass="bg-lightgray" /> */}
              <Input
                name="orNum"
                value={this.props.orNum}
                inputPlaceholder="OR Number"
                inputClass="input-container xl-6 "
                inputLabel="OR Number:"
                txtboxClass="bg-lightgray"
                onInputChange={this.handleInputChange} 
              />
              <div className="xl-6">
                <YesNoRadio
                  name="isRelativeOfAgent"
                  title="Relative Of Agent"
                  isRequired={false}
                  isYesDefault={this.props.isRelativeOfAgent}
                  onSelect={this.handleYesNoChange}
                />
              </div>
              <div className="xl-6">
                <YesNoRadio
                  name="isFatcaTagging"
                  title="FATCA Tagging"
                  isRequired={false}
                  isYesDefault={this.props.isFatcaTagging}
                  onSelect={this.handleYesNoChange}
                />
              </div>
              <div className="xl-6">
                <YesNoRadio
                    name="withReinstatementAgent"
                    title="With Reinstating Agent"
                    isRequired={false}
                    isYesDefault={this.props.withReinstatementAgent}
                    onSelect={this.handleYesNoChange}
                  />
              </div>
              {(this.props.isAgentStatusActive && this.props.withReinstatementAgent) && (
                <>
                <div className="xl-6 invisible">
                 </div>
                <div className="xl-6">
                  <YesNoRadio
                      name="withCosal"
                      title="With COSAL"
                      isRequired={false}
                      isYesDefault={this.props.withCosal}
                      onSelect={this.handleYesNoChange}
                    />
                </div>
                </>
              )}
              <div className="xl-6">
                <YesNoRadio
                  name="isBeyondLimit"
                  title="Beyond Limit"
                  isRequired={false}
                  isYesDefault={this.props.isBeyondLimit}
                  onSelect={this.handleYesNoChange}
                />
              </div>
              
              {/* Business logic in progress */}
              {/* <div className="xl-6">
              <YesNoRadio
                  name="completeFatca"
                  title="Complete FATCA Requirements?"
                  isRequired={false}
                  isYesDefault={this.props.completeFatca}
                  onSelect={this.handleYesNoChange}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FatcaNew;