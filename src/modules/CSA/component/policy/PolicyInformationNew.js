import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class PolicyInformationNew extends Component {
  render() {
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input inputLabel="Plan Description:" inputPlaceholder="Plan Name" inputClass="col xl-6 input-container" value={this.props.policy.planDescription}/>
        <Input inputLabel="Plan Status:" inputPlaceholder="Lapsed" inputClass="col xl-3 input-container" value={this.props.policy.planStatus}/>
        <Input inputLabel="Premium Status:" inputPlaceholder="Premium Paying" inputClass="col xl-3 input-container" value={this.props.policy.premiumStatus}/>
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />
        <Input inputLabel="Sum Assured:" inputPlaceholder="100,000" inputClass="col xl-4 input-container" value=""/>
        <Input inputLabel="Currency:" inputPlaceholder="PHP" inputClass="col xl-4 input-container" value=""/>
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" inputClass="col xl-4 input-container" value="" />
        <Input inputLabel="Mode of Payment:" inputPlaceholder="Monthly" inputClass="col xl-4 input-container" value="" />
        <Input inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" inputClass="col xl-8 input-container" value={this.props.policy.insuredName}/>
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value=""/>
        <Input inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" inputClass="col xl-8 input-container" value="" />
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" value=""/>
      </div>

    );
  }
}

export default PolicyInformationNew;