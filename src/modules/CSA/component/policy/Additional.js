import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class FatcaNew extends Component {
  constructor(props) {
    super(props);
    
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.props.onTransactionChange(event.target.value);
  }

  handleMultiSelectChange(i, event) {
    this.props.transactionCheckList[i].isChecked = !this.props.transactionCheckList[i].isChecked;
    console.log(this.props.transactionCheckList[i]);
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
                <p className="label container">
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
                </div>
              </div>
              <div className="xl-6">
                <p className="label container">
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
                </div>
              </div>
              <div className="xl-6">
                <p className="label container">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FatcaNew;