import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';

class PolicyInformation extends Component {

  render() {

    return (
      <div className="App">
        <div className="flex-container flex-wrap">
          <div className="col xl-12">
            <div className="card-alt col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header flex f-justify-space-between">
                <h3  className="no-margin font-prugray">
                  General Information
                </h3>
                <h3  className="no-margin font-prulife font-prugray">
                  {this.props.policy.number && ("Policy No:  " + this.props.policy.number)}
                </h3>
              </div>
              <div className="card-body flex-container flex-wrap">
                <div className="flex-container flex-wrap col xl-12 l-12 m-12 s-12 xs-12">
                <CheckBox label="DowJones Hit:" cName="dowJones" />
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Agent Code: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.agentCode} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Agent Name: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.agentName} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Agent Status: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.agentStatus} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Branch: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.branch} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">NMA: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.nma} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Plan Description: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.planDesc} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Plan Currency: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.planCurrency} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Contract Status: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.contractStatus} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Premium Status: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.premiumStatus} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Current Premium: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.currentPremium} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Required Premium: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.requiredPremium} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Sum Assured: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.sumAssured} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">MPT: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.mpt} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Risk Commencement Date: </label>
                    <input className="input col disabled" type="text" defaultValue={this.props.policy.rcd} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">First Issue Date: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.firstIssueDate} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Paid to Date: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.paidToDate} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                    <label className="label">Date of Signing: </label>
                    <input className="input col  disabled" type="text" defaultValue={this.props.policy.dateOfSigning} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-6 l-6 m-6 s-12 xs-12 flex f-column">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default PolicyInformation;