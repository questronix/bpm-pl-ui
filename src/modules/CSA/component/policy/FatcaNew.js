import React, { Component } from 'react';

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
        <div className="additional-content">
          <h2>Additional Policy Information</h2>
          <table border="0" cellspacing="0" >
            <tbody><tr>
              <td>
                <div className="display-flex flex-column">
                  <span>Sum Assured: </span>
                  <input type="text" className="textbox" />
                </div>
              </td>
              <td>
                <div className="display-flex flex-column">
                  <span>MPT: </span>
                  <input type="text" className="textbox" />
                </div>
              </td>
            </tr><tr>
              </tr></tbody></table>
          <table border="0" cellspacing="0">

            <tbody><tr><td>Beyond MPT: </td>
              <td>
                <span className="icon fa fa-square add-1"></span> Yes
              </td>
              <td>
                <span className="icon fa fa-square add-1"></span> No
              </td>
            </tr>
              <tr>
                <td>FATCA Tagging: </td>
                <td>
                  <span className="icon fa fa-square add-2"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-2"></span> No
              </td>
              </tr><tr>
              </tr>
              <tr><td>With Pending Policies: </td>
                <td>
                  <span className="icon fa fa-square add-3"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-3"></span> No
              </td>
              </tr>
              <tr>
                <td>With Reinstating Agent: </td>
                <td>
                  <span className="icon fa fa-square add-4"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-4"></span> No
              </td>
              </tr>
              <tr>
                <td>With Reinsurance: </td>
                <td>
                  <span className="icon fa fa-square add-5"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-5"></span> No
              </td>
              </tr>
              <tr>
                <td>Relative of Agent: </td>
                <td>
                  <span className="icon fa fa-square add-6"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-6"></span> No
              </td>
              </tr>
              <tr>
                <td>Statement of Insurability Declarations: </td>
                <td>
                  <span className="icon fa fa-square add-7"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-7"></span> No
              </td>
              </tr>
              <tr>
                <td>With Existing Policies: </td>
                <td>
                  <span className="icon fa fa-square add-8"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-8"></span> No
              </td>
              </tr>
              <tr>
                <td>Signature verified: </td>
                <td>
                  <span className="icon fa fa-square add-9"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-9"></span> No
              </td>
              </tr>
              <tr>
                <td>With claim records: </td>
                <td>
                  <span className="icon fa fa-square add-10"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-10"></span> No
              </td>
              </tr>
              <tr>
                <td>With substandard rating: </td>
                <td>
                  <span className="icon fa fa-square add-11"></span> Yes
              </td>
                <td>
                  <span className="icon fa fa-square add-11"></span> No
              </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    );
  }
}

export default FatcaNew;