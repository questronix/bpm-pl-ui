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
        <div className="box-header flex f-row f-justify-space-between">
          <div className="flex-container">
            <h4 className="no-margin">Transaction type:</h4>
            <select>
              <option>Reinstatement</option>
            </select>
          </div>
          <div className="">
            <h4 className="no-margin">Transaction Number: {this.props.transactionNumber}</h4>
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
              <Input
                inputLabel="Required Premium:"
                inputPlaceholder="(from LA)"
                txtboxClass="no-border"
                inputClass="input-container"
                value=""
              />
              <Input
                inputLabel="Suspense:"
                inputPlaceholder="(from LA)"
                txtboxClass="no-border"
                inputClass="input-container"
                value=""
              />
              <Input
                inputLabel="Signature Verified:"
                inputPlaceholder="Enter OR Number"
                txtboxClass="no-border"
                inputClass="input-container"
                value=""
              />
            </div>
          </div>
        </div>
        <hr className="no-margin" />
      </div>
    );
  }
}

export default TransactionNew;
