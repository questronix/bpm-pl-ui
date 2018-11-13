import React, { Component } from 'react';
import Radio from '../../../../shared/component/radio/Radio';
import Input from '../../../../shared/component/input/Input';

class TransactionNew extends Component {
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
        <div className="box-header flex f-row f-justify-space-between tt-container">
          <div className="flex-container flex f-center">
            <h4 className="no-margin">
              Transaction type:
                  </h4>
            <select className="transaction-type">
              <option>Reinstatement</option>
            </select>
          </div>
          <div className="flex f-center">
            <span className="fa fa-asterisk font-prulife"></span> &nbsp;&nbsp;
             - Required field
          </div>
        </div>
        <div className="flex-container flex-wrap">
          <div className="col no-padding xl-12 flex-container flex-wrap">
            <div className="xl-9 big-container">
              <form className="flex f-justify-evenly container">
                <Radio rName="transaction" rId="1" rLabel="Updating" />
                <Radio rName="transaction" rId="2" rLabel="Redating" />
                <Radio rName="transaction" rId="3" rLabel="Waiver" />
                {/* <div className="">
            <input name="transaction" id="Updating" type="radio" />
            <label for="Updating">
              Updating
                  </label>
          </div>
          <div className="">
            <input name="transaction" id="Redating" type="radio" />
            <label for="Redating">
              Redating
                </label>
          </div>
          <div className="">
            <input name="transaction" id="Waiver" type="radio" />
            <label for="Waiver">
              Waiver
                </label>
          </div> */}
              </form>
              <div class="transaction-checkboxes margin-auto">
                <table border="0" cellspacing="0">
                  <tr>
                    <td class="flex align-center"> <label for="Reinstatement">Reinstatement Form </label> </td>
                    <td align="right">
                      <label class="checkbox">
                        <input id="Reinstatement" type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td class="flex align-center"> <label for="routine">U/W routine requirements </label> </td>
                    <td align="right">
                      <label class="checkbox">
                        <input id="routine" type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </td>
                  </tr>
                  {/* <tr>
              <td><label for="health">Health Statement Form (HSF)</label></td>
              <td><input id="health" type="checkbox" /></td>
              </tr>
              <tr>
              <td><label for="routine">U/W routine requirements</label></td>
              <td><input id="routine" type="checkbox" /></td>
              </tr>
              <tr>
              <td><label for="payment">Payment of Premium Arrears</label></td>
              <td><input id="payment" type="checkbox" /></td>
              </tr>
              <tr>
              <td><label for="specimen">Specimen Signature Form (if applicable)</label></td>
              <td><input id="specimen" type="checkbox" /></td>
              </tr>
              <tr>
              <td><label for="valid">Valid Government Issued ID (if applicable)</label></td>
              <td><input id="valid" type="checkbox" /></td>
              </tr>
              <tr>
              <td><label for="non-government">Valid Non-Government Issued ID (if applicable)</label></td>
              <td><input id="non-government" type="checkbox" /></td>
            </tr> */}
                </table>
              </div>
            </div>
            <div className="xl-3 container-left-border big-container">
              <Input inputLabel="Required Premium:" inputPlaceholder="(from LA)" txtboxClass="no-border" inputClass="input-container container" value="" />
              <Input inputLabel="Suspense:" inputPlaceholder="(from LA)" txtboxClass="no-border" inputClass="input-container container" value="" />
              <Input classRequired="required" inputLabel="Signature Verified:" inputPlaceholder="Enter OR Number" txtboxClass="no-border" inputClass="input-container container" value="" />
              <div className="">
                <p className="label container required">
                  Signature Verified:
                </p>
                <div className="">
                  <label class="checkbox container" for="yes">Yes
                    <input type="radio" id="yes" name="Signature" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox container" for="no">No
                  <input type="radio" id="no" name="Signature" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="no-margin" />
      </div >
    );
  }
}

export default TransactionNew;