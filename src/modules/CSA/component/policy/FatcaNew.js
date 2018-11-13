import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class FatcaNew extends Component {
  constructor(props) {
    super(props);
    // this.state = this.props || {
    //   transactionCheckList: this.props.transactionCheckList };
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.props.onTransactionChange(event.target.value);
  }

  handleMultiSelectChange(i, event) {
    // const target = event.target;
    this.props.transactionCheckList[i].isChecked = !this.props.transactionCheckList[i].isChecked;
    // target.checked = true;
    console.log(this.props.transactionCheckList[i]);
  }

  render() {
    return (
      <div>
        <div class="additional-content container">
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
                  <label class="checkbox container" for="yes">Yes
                    <input type="radio" id="yes" name="Relative" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox container" for="no">No
                  <input type="radio" id="no" name="Relative" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="xl-6">
                <p className="label container">
                  FATCA Tagging:
                </p>
                <div className="xl-6">
                  <label class="checkbox container" for="yes1">Yes
                    <input type="radio" id="yes1" name="FATCA" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox container" for="no1">No
                  <input type="radio" id="no1" name="FATCA" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="xl-6">
                <p className="label container">
                  With Reinstating Agent:
                </p>
                <div className="xl-6">
                  <label class="checkbox container" for="yes2">Yes
                    <input type="radio" id="yes2" name="WithReinstating" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox container" for="no2">No
                  <input type="radio" id="no2" name="WithReinstating" />
                    <span class="checkmark"></span>
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