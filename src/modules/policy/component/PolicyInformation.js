import React, {Component} from 'react';

class PolicyInformation extends Component {
  
  formatAddress(data) {
    return data.addr1 + ', ' + data.addr2 + ',' + data.addr3;
  }
 
  render() {
    const policy = this.props.policy;

    return (
      <div className="App">
        <h1>Policy Information</h1>
        <label>Policy Number: 
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
            value={this.formatAddress(policy.presentAddress)}
            disabled /><br/>
        </label>
        <label>Permanent Address: 
          <input 
            type="text" 
            value={this.formatAddress(policy.permanentAddress)}
            disabled /><br/>
        </label>
        <label>Business Address: 
          <input 
            type="text" 
            value={this.formatAddress(policy.businessAddress)}
            disabled /><br/>
        </label>
      </div>
    );
  }
}

export default PolicyInformation;