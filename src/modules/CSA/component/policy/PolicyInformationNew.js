import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class PolicyInformationNew extends Component {
  render() {
    const { clients } = this.props;
    let insured;
    let owner;
    // const owner = [...clients].find(client => client.role === 'OW');
    // const insured = [...clients].find(client => client.role === 'LF');
    if (clients) {
      owner = clients.forEach(client => {
        return client.role === 'OW';
      });
      insured = clients.forEach(client => {
        return client.role === 'LF';
      });
    }
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input editable="false" inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-6 input-container" value={this.props.policy.planDescription}/>
        <Input editable="false" inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.planStatus}/>
        <Input editable="false" inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.premiumStatus}/>
        <Input editable="false" inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input editable="false" inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />
        <Input editable="false" inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.sumInsured}/>
        <Input editable="false" inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currency}/>
        <Input editable="false" inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currentPremium} />
        <Input editable="false" inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value="" />
        <Input editable="false" inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={this.props.policy.clients[1].clientLastName + " " + this.props.policy.clients[1].clientFirstName + " " + this.props.policy.clients[1].clientMiddleName}/>
        <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.clients[1].dateOfBirth}/>
        <Input editable="false" inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={this.props.policy.clients[0].clientLastName + " " + this.props.policy.clients[0].clientFirstName + " " + this.props.policy.clients[0].clientMiddleName}  />
        <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.clients[0].dateOfBirth}/>
      </div>

    );
  }
}

export default PolicyInformationNew;