import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';
import InputDate from '../../../../shared/component/input/InputDate';

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
              <InputDate
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
              <div className="xl-6">
                <YesNoRadio
                  name="isBeyondAuth"
                  title="Beyond Authority"
                  isRequired={false}
                  isYesDefault={this.props.isBeyondAuth}
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