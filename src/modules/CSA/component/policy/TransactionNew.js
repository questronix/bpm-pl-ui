import React, { Component } from 'react';
import Radio from '../../../../shared/component/radio/Radio';
import Input from '../../../../shared/component/input/Input';

class TransactionNew extends Component {
  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.state = {
      docs: []
    }
  }

  componentDidMount() {
    // const docList = this.props.docs.filter(docs => docs.SubTransaction_ID == 1);
    // this.setState({ docs: docList });
  }

  handleRadioChange(event) {
    const docList = this.props.docs.filter(docs => docs.SubTransaction_ID == event.target.value);
    this.setState({ docs: docList });
    console.log(event.target.value);
    console.log(docList);
    // this.props.onTransactionChange(event.target.value);
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
                {/* <Radio rName="transaction" rId="1" rLabel="Updating"/>
                <Radio rName="transaction" rId="2" rLabel="Redating" />
                <Radio rName="transaction" rId="3" rLabel="Waiver" /> */}
                <div className="flex f-center">
                  <label className="checkbox" htmlFor="1" >Updating
                    <input type="radio" id="1" name="transaction" value="1" onChange={this.handleRadioChange}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="flex f-center">
                  <label className="checkbox" htmlFor="2" >Redating
                    <input type="radio" id="2" name="transaction"  value="2" onChange={this.handleRadioChange}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="flex f-center">
                  <label className="checkbox" htmlFor="3" >Waiver
                    <input type="radio" id="3" name="transaction" value="3" onChange={this.handleRadioChange}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </form>
              <div className="transaction-checkboxes margin-auto">
                <table border="0" cellSpacing="0">
                  <tbody>
                    {this.state.docs.map(doc => (
                      <tr key={doc.Docs_ID}>
                      <td className="flex align-center">
                        <label htmlFor={`doc${doc.Docs_ID}`}>
                          {doc.Description}
                        </label>
                      </td>
                      <td align="right">
                        <label className="checkbox">
                          <input id={`doc${doc.Docs_ID}`} type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="xl-3 container-left-border big-container">
              <Input editable="false" inputLabel="Required Premium:" inputPlaceholder="(from LA)" txtboxClass="no-border" inputClass="input-container container" value="" />
              <Input editable="false" inputLabel="Suspense:" inputPlaceholder="(from LA)" txtboxClass="no-border" inputClass="input-container container" value="" />
              <Input classRequired="required" inputLabel="Signature Verified:" inputPlaceholder="Enter OR Number" txtboxClass="bg-lightgray" inputClass="input-container container" value="" />
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
