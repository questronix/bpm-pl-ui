import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class PolicyInfoHeader extends Component {
  render() {
    

    const { policy, clients } = this.props;
    let owner;
    let insured;
    
    if (clients.length > 0) {
      console.log('from', clients);
      owner = clients.find(client => client.role === 'OW');
      insured = clients.find(client => client.role === 'LF');
      console.log(owner, insured);
    }
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input editable="false" inputLabel="Policy Number:" inputPlaceholder="0000001" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.policyNo}/>
        <Input editable="false" inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.sumInsured}/>
        <Input editable="false" inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.premiumStatus}/>
        <Input editable="false" inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.premiumStatus}/>

        <Input editable="false" inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.planDescription}/>
        <Input editable="false" inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.firstIssueDate}/>
        <Input editable="false" inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.riskCommencementDate} />

        <Input editable="false" inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.currency}/>
        <Input editable="false" inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.currentPremium} />
        <Input editable="false" inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value="" />

        <Input editable="false" inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value={insured && `${insured.clientLastName}, ${insured.clientFirstName}, ${insured.clientMiddleName}`}/>
        <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value={insured && insured.dateOfBirth}/>
        <Input editable="false" inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value={owner && `${owner.clientLastName}, ${owner.clientFirstName}, ${owner.clientMiddleName}`}/>
        <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value={owner && owner.dateOfBirth}/>
      </div>

    );
  }
}

export default PolicyInfoHeader;