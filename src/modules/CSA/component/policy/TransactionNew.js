import React, { Component } from 'react';
// import Radio from '../../../../shared/component/radio/Radio';
import YesNoRadio from '../../../../shared/component/radio/YesNoRadio';
import Input from '../../../../shared/component/input/Input';

class TransactionNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: []
    };
    this.handleSubTransactionChange = this.handleSubTransactionChange.bind(this);
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handleDocSelect = this.handleDocSelect.bind(this);
    this.handleSignatureVerifiedChange = this.handleSignatureVerifiedChange.bind(this);
  }
  
  componentDidMount() {
    const docList = this.props.docs.filter(
      docs => docs.SubTransaction_ID == this.props.subTransactionType
    );
    this.setState({ docs: docList });
  }

  handleTransactionChange(e) {
    console.log('Transaction Type:', e.target.value);
    this.props.onTransactionTypeChange(e.target.value);
  }

  handleSubTransactionChange(e) {
    this.props.onSubTransactionTypeChange(e.target.value);
    console.log(e.target.value);
  }

  handleDocSelect(e) {
    const index = e.target.attributes['index'].value;
    console.log('SELECTED DOC INDEX: ', index);
    this.props.onDocSelect(index);
  }

  handleSignatureVerifiedChange(name, val) {
    this.props.onSelectSignatureVerified(name, val);
  }

  render() {
    return (
      <div>
        <div className="box-header flex f-row f-justify-space-between tt-container">
          <div className="flex-container flex f-center">
            <h2 className="no-margin">Transaction type:</h2>
            <select
              name="transactionType"
              className="transaction-type"
              onChange={this.handleTransactionChange}
            >
              <option value={1}>Reinstatement</option>
              {/* <option value={2}>Option 2</option> */}
            </select>
          </div>
          <div className="flex f-center">
            <span className="fa fa-asterisk font-prulife" /> &nbsp;&nbsp; -
            Required field
          </div>
        </div>
        <div className="flex-container flex-wrap">
          <div className="col no-padding xl-12 flex-container flex-wrap">
            <div className="xl-9 big-container">
              {this.props.transactionType == 1 && (
                <>
                  <form className="flex f-justify-evenly container">
                    {/* <Radio rName="transaction" rId="1" rLabel="Updating"/>
                <Radio rName="transaction" rId="2" rLabel="Redating" />
                <Radio rName="transaction" rId="3" rLabel="Waiver" /> */}
                    <div className="flex f-center">
                      <label className="checkbox" htmlFor="1">
                        Updating
                        <input
                          type="radio"
                          id="1"
                          name="subTransactionType"
                          value="1"
                          defaultChecked={this.props.subTransactionType == 1 ? true : false}
                          onChange={this.handleSubTransactionChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="flex f-center">
                      <label className="checkbox" htmlFor="2">
                        Redating
                        <input
                          type="radio"
                          id="2"
                          name="subTransactionType"
                          value="2"
                          defaultChecked={this.props.subTransactionType == 2 ? true : false}
                          onChange={this.handleSubTransactionChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="flex f-center">
                      <label className="checkbox" htmlFor="3">
                        Waiver
                        <input
                          type="radio"
                          id="3"
                          name="subTransactionType"
                          value="3"
                          defaultChecked={this.props.subTransactionType == 3 ? true : false}
                          onChange={this.handleSubTransactionChange}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </form>
                  <div className="transaction-checkboxes margin-auto">
                    <table border="0" cellSpacing="0">
                      <tbody>
                        {this.props.docs.map((doc, index) => (
                          <tr key={doc.DOCS_Id}>
                            <td className="flex align-center">
                              <label htmlFor={`doc${doc.DOCS_Id}`}>
                                {doc.Description}
                              </label>
                            </td>
                            <td align="right">
                              <label className="checkbox">
                                <input
                                  id={`doc${doc.DOCS_Id}`}
                                  index={index}
                                  type="checkbox"
                                  checked={doc.value}
                                  // value={doc.value}
                                  onChange={this.handleDocSelect}
                                />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
            <div className="xl-3 container-left-border big-container">
              <Input
                inputLabel="Required Premium:"
                inputPlaceholder="(from LA)"
                txtboxClass="no-border"
                inputClass="input-container container"
                value={this.props.policy.requiredPremium}
              />
              <Input
                inputLabel="Suspense:"
                inputPlaceholder="(from LA)"
                txtboxClass="no-border"
                inputClass="input-container container"
                value={this.props.policy.pdfSuspense}
              />
              <Input
                classRequired="required"
                inputLabel="OR Number :"
                inputPlaceholder="Enter OR Number"
                txtboxClass="no-border"
                inputClass="input-container container"
                value=""
              />
              <YesNoRadio
                name="isSignatureVerified"
                title="Signature Verified"
                isRequired={true}
                isYesDefault={this.props.isSignatureVerified}
                onSelect={this.handleSignatureVerifiedChange}
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
