import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class PolicyInfoHeader extends Component {
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
        <Input inputLabel="Policy Number:" inputPlaceholder="0000001" txtboxClass="no-border" inputClass="col xl-3 input-container" value=""/>
        <Input inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-3 input-container" value=""/>
        <Input inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.planStatus}/>
        <Input inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.premiumStatus}/>

        <Input inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.planDescription}/>
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />

        <Input inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value=""/>
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value="" />
        <Input inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value="" />

        <Input inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value={this.props.policy.firstName}/>
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value=""/>
        <Input inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value="" />
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value=""/>
      </div>

    );
  }
}

export default PolicyInfoHeader;