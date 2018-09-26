import React, { Component } from 'react';

class PolicyInformation extends Component {

  formatAddress(data) {
    return data.addr1 + ', ' + data.addr2 + ',' + data.addr3;
  }

  render() {
    const policy = this.props.policy;

    return (
      <div className="App">
        <h1 className="font-danger">Policy Information</h1>
        <div className="flex-conatiner flex-wrap">
          <div className="col xl-12 flex-container flex-wrap">
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Policy Number:</label>
              <input className="input col xl-6"
                type="text"
                value={policy.number}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Policy Status: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.status}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Insured Client ID: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.insuredClientID}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Insured Name:</label>
              <input className="input col xl-6"
                type="text"
                value={policy.insuredName}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Owner Client ID: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.ownerClientID}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Policy Owner Name: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.ownerName}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Risk Commencement Date (RCD): </label>
              <input className="input col xl-6"
                type="text"
                value={policy.rcd}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Agent Code: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.agentCode}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Agent Name: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.agentName}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Agent NMA: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.agentNMA}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Nationality: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.nationality}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Occupation: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.occupation}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Attained Age: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.attainedAge}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Mobile Number:</label>
              <input className="input col xl-6"
                type="text"
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Email Address: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.emailAddress}
                disabled />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Date Of Application: </label>
              <input className="input col xl-6"
                type="text"
                value={policy.dateOfApplication}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Present Address: </label>
              <input className="input col xl-6"
                type="text"
                value={this.formatAddress(policy.presentAddress)}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Permanent Address: </label>
              <input className="input col xl-6"
                type="text"
                value={this.formatAddress(policy.permanentAddress)}
                disabled /><br />
            </div>
            <div className="col xl-6 l-6 m-6 s-12 xs-12 f-center f-justify-between flex">
              <label className="col xl-6">Business Address: </label>
              <input className="input col xl-6"
                type="text"
                value={this.formatAddress(policy.businessAddress)}
                disabled /><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PolicyInformation;