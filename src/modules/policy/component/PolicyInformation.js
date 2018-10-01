import React, { Component } from 'react';

class PolicyInformation extends Component {

  render() {

    return (
      <div className="App">
        <div className="flex-container flex-wraper">
          <div className="col xl-12">
            <div className="card col xl-12 l-12 m-12 s-12 xs-12 no-padding">
              <div className="card-header bg-prulife">
                <h3 className="font-white no-margin">
                  General Information
                </h3>
              </div>
              <div className="card-body flex-container flex-wrap">
                <div className="col xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
                 <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Agent Code: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.agentCode} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Agent Name: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.agentName} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Branch: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.branch} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>NMA: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.nma} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Plan Desscription: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.planDesc} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Plan Currency: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.planCurrency} disabled />
                  </div>
                </div>

                
                <div className="col xl-6 xl-6 l-6 m-12 s-12 xs-12 flex-container flex-wrap">
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Contract Status: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.contractStatus} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Premium Status: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.premiumStatus} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                    <label>Sum Assured: </label>
                    <input className="input disabled" type="text" defaultValue={this.props.policy.sumAssured} disabled />
                  </div>
                  <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>Risk Commencement Date: </label>
                  <input className="input disabled" type="text" defaultValue={this.props.policy.rcd} disabled />
                </div>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex f-center">
                  <label>First Issue Date: </label>
                  <input className="input disabled" type="text" defaultValue={this.props.policy.firstIssueDate} disabled />
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