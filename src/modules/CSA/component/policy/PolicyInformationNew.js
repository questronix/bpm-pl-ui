import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class PolicyInformationNew extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  // // "agentName":"Dan",
  // // "agentCode" : "70017148",
  // // "agentStatus": "active",
  // // "branchName":"AMBER BRANCH",
  // // "nma":"No NMA",
  // // "planDesc":"PRUlife your term",
  // // "planCurrency":"PHP",
  // // "currentPremium":"Sample",
  // // "reqPrem":"No required premium",
  // // "premStatus":"PP",
  // // "sum":"000.00",
  // // "riskCommencementDate" :"20181025",
  // // "firstIssueDate":"20181026",
  // // "paidToDate":"20181126",
  // // "dateOfSigning":"20181128"
      
  

      
  //   }
   
  // }

  render() {
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input inputLabel="Agent Code:"  inputClass="col xl-3 input-container" value={this.props.policy.agentNumber}/>
        <Input inputLabel="Agent Name:" inputPlaceholder="First name Last name" inputClass="col xl-6 input-container"value={this.props.policy.agentFirstName}/>
        <Input inputLabel="Agent Status:" inputPlaceholder="Status" inputClass="col xl-3 input-container" value={this.props.policy.status} />
        <Input inputLabel="Branch:" inputPlaceholder="Branch Name" inputClass="col xl-8 input-container" value={this.props.policy.agentBranchDesc}/>
        <Input inputLabel="NMA:" inputPlaceholder="NMA" inputClass="col xl-4 input-container" value={this.props.policy.nmaDesc}/>
        <Input inputLabel="Plan Description:" inputPlaceholder="Plan Description" inputClass="col xl-8 input-container" value={this.props.policy.planDescription}/>
        <Input inputLabel="Plan Currency:" inputPlaceholder="NMA" inputClass="col xl-4 input-container" value={this.props.policy.currency}/>
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" inputClass="col xl-4 input-container" value="" />
        <Input inputLabel="Required Premium:" inputPlaceholder="Required Premium" inputClass="col xl-4 input-container" value=""/>
        <Input inputLabel="Premium Status:" inputPlaceholder="Status" inputClass="col xl-4 input-container" value={this.props.policy.premiumStatus}/>
        <Input inputLabel="Sum Assured:" inputPlaceholder="000,000" inputClass="col xl-8 input-container" value=""/>
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input inputLabel="Paid to Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value="" />
        <Input inputLabel="Date of Signing:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value=""/>
      </div>

    );
  }
}

export default PolicyInformationNew;