import React, { Component } from 'react';
import Radio from '../../../../shared/component/radio/Radio';
import Input from '../../../../shared/component/input/Input';

class TransactionNew extends Component {
  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.props.onTransactionChange(event.target.value);
  }

  handleMultiSelectChange(i) {
    this.props.transactionCheckList[i].isChecked = !this.props
      .transactionCheckList[i].isChecked;
    console.log(this.props.transactionCheckList[i]);
  }

  render() {
    return (
      <div>
        <div className="box-header flex f-row f-justify-space-between tt-container">
          <div className="flex-container flex f-center">
            <h2 className="no-margin">
              Transaction type:
                  </h2>
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
              </form>
              <div className="transaction-checkboxes margin-auto">
                <table border="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="flex align-center">
                        {' '}
                        <label htmlFor="Reinstatement">
                          Reinstatement Form{' '}
                        </label>{' '}
                      </td>
                      <td align="right">
                        <label className="checkbox">
                          <input id="Reinstatement" type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="flex align-center">
                        {' '}
                        <label htmlFor="routine">
                          U/W routine requirements{' '}
                        </label>{' '}
                      </td>
                      <td align="right">
                        <label className="checkbox">
                          <input id="routine" type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                  </tbody>
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
                  <label className="checkbox container" htmlFor="yes">Yes
                    <input type="radio" id="yes" name="Signature" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkbox container" htmlFor="no">No
                  <input type="radio" id="no" name="Signature" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="no-margin" />
      </div>
    );
  }
}

export default TransactionNew;
