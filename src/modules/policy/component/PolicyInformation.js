import React, { Component } from 'react';

class PolicyInformation extends Component {

  formatAddress(data) {
    return data.addr1 + ', ' + data.addr2 + ',' + data.addr3;
  }

  render() {
    const policy = this.props.policy;

    return (
      <div className="App">
        <h1>Policy Information</h1>
        <label>Agent Code: </label>
        <input type="text" value={policy.agentCode} disabled/>
        <label>Agent Name: </label>
        <input type="text" value={policy.agentName} disabled/>
        <label>Branch: </label>
        <input type="text" value={policy.branch} disabled/>
        <label>NMA: </label>
        <input type="text" value={policy.nma} disabled/>
        <label>Plan Desscription: </label>
        <input type="text" value={policy.planDesc} disabled/>
        <label>Plan Currency: </label>
        <input type="text" value={policy.planCurrency} disabled/>
        <label>Contract Status: </label>
        <input type="text" value={policy.contractStatus} disabled/>
        <label>Premium Status: </label>
        <input type="text" value={policy.premiumStatus} disabled/>
        <label>Sum Assured: </label>
        <input type="text" value={policy.sumAssured} disabled/>
        <label>Risk Commencement Date: </label>
        <input type="text" value={policy.rcd} disabled/>
        <label>First Issue Date: </label>
        <input type="text" value={policy.firstIssueDate} disabled/>
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
      </div>
    );
  }
}

export default PolicyInformation;