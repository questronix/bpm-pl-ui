import React, { Component } from 'react';

class PolicyInformation extends Component {

  formatAddress(data) {
    return data.addr1 + ', ' + data.addr2 + ',' + data.addr3;
  }

  render() {
    const policy = this.props.policy;

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
                <div className="flex-container flex-wrap col xl-6 l-6 m-6 s-12 xs-12">
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Agent Code: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.agentCode} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Agent Name: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.agentName} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Branch: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.branch} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>NMA: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.nma} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Plan Desscription: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.planDesc} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Plan Currency: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.planCurrency} disabled />
                  </div>
                </div>
                {/* Separate */}
                <div className="flex-container flex-wrap col xl-6 l-6 m-6 s-12 xs-12">
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Contract Status: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.contractStatus} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Premium Status: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.premiumStatus} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                    <label>Sum Assured: </label>
                    <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.sumAssured} disabled />
                  </div>
                  <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                  <label>Risk Commencement Date: </label>
                  <input className="input col xl-6 l-6 m-6 s-isabled" col type="text" value={policy.rcd} disabled />
                </div>
                <div className="s-f-column xs-f-column col xl-12 l-12 m-12 s-12 xs-12 f-justify-space-between flex xl-f-center l-f-center m-f-center s-f-start xs-f-start">
                  <label>First Issue Date: </label>
                  <input className="input col xl-6 l-6 m-6  disabled" type="text" value={policy.firstIssueDate} disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* <label>Policy Number: 
          <input 
            type="text" 
            value={policy.number} 
            disabled/>
        </label>
        <label>Policy Status: 
          <input 
            type="text" 
            value={policy.status} 
            disabled/><br/>
        </label>
        <label>Insured Client ID: 
          <input 
            type="text" 
            value={policy.insuredClientID} 
            disabled/>
          </label>
        <label>Insured Name:
          <input 
            type="text" 
            value={policy.insuredName}
            disabled/><br/>
        </label>
        <label>Owner Client ID: 
          <input 
            type="text" 
            value={policy.ownerClientID}
            disabled/>
        </label>
        <label>Policy Owner Name: 
          <input 
            type="text" 
            value={policy.ownerName}
            disabled/><br/>
        </label>
        <label>Risk Commencement Date (RCD): 
          <input 
            type="text"
            value={policy.rcd}
            disabled/>
        </label>
        <label>Agent Code: 
          <input 
            type="text" 
            value={policy.agentCode}
            disabled/><br/>
        </label>
        <label>Agent Name: 
          <input 
            type="text" 
            value={policy.agentName}
            disabled/>
        </label>
        <label>Agent NMA: 
          <input 
            type="text" 
            value={policy.agentNMA}
            disabled/><br/>
        </label>
        <label>Gender: 
          <input 
            type="text" 
            value={policy.gender} 
            disabled/>
        </label>
        <label>Salutation: 
          <input 
            type="text" 
            value={policy.salutation} 
            disabled/><br/>
        </label>
        <label>Civil Status: 
          <input 
            type="text" 
            value={policy.civilStatus} 
            disabled/>
        </label>
        <label>TIN/SSS Number: 
          <input 
            type="text" 
            value={policy.tinOrSSSNumber} 
            disabled/><br/>
        </label>
        <label>Nationality: 
          <input 
            type="text" 
            value={policy.nationality}
            disabled/>
        </label>
        <label>Occupation: 
          <input 
            type="text" 
            value={policy.occupation}
            disabled/><br/>
        </label>
        <label>Attained Age: 
          <input 
            type="text" 
            value={policy.attainedAge}
            disabled/>
        </label>
        <label>Mobile Number:
          <input 
            type="text" 
            disabled/><br/>
        </label>
        <label>Email Address: 
          <input 
            type="text" 
            value={policy.emailAddress}
            disabled/>
        </label>
        <label>Date Of Application: 
          <input 
            type="text" 
            value={policy.dateOfApplication}
            disabled/><br/>
        </label>
        <label>Present Address: 
          <input 
            type="text" 
            value={policy.presentAddress.addr1}
            disabled />
          <input 
            type="text" 
            value={policy.presentAddress.addr2}
            disabled />
          <input 
            type="text"   
            value={policy.presentAddress.addr3}
            disabled /><br/>
        </label>
        <label>Permanent Address: 
          <input 
            type="text" 
            value={policy.permanentAddress.addr1}
            disabled />
          <input 
            type="text" 
            value={policy.permanentAddress.addr2}
            disabled />
          <input 
            type="text"   
            value={policy.permanentAddress.addr3}
            disabled /><br/>
        </label>
        <label>Business Address: 
          <input 
            type="text" 
            value={policy.businessAddress.addr1}
            disabled />
          <input 
            type="text" 
            value={policy.businessAddress.addr2}
            disabled />
          <input 
            type="text"   
            value={policy.businessAddress.addr3}
            disabled /><br/>
        </label> */}
      </div >
    );
  }
}

export default PolicyInformation;