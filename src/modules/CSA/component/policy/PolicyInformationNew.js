import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';

class PolicyInformationNew extends Component {

  render() {

    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input inputLabel="Agent Code:" inputPlaceholder="0000000000" inputClass="col xl-3 input-container" />
        <Input inputLabel="Agent Name:" inputPlaceholder="First name Last name" inputClass="col xl-6 input-container" />
        <Input inputLabel="Agent Status:" inputPlaceholder="Status" inputClass="col xl-3 input-container" />
        <Input inputLabel="Branch:" inputPlaceholder="Branch Name" inputClass="col xl-8 input-container" />
        <Input inputLabel="NMA:" inputPlaceholder="NMA" inputClass="col xl-4 input-container" />
        <Input inputLabel="Plan Description:" inputPlaceholder="Plan Description" inputClass="col xl-8 input-container" />
        <Input inputLabel="Plan Currency:" inputPlaceholder="NMA" inputClass="col xl-4 input-container" />
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" inputClass="col xl-4 input-container" />
        <Input inputLabel="Required Premium:" inputPlaceholder="Required Premium" inputClass="col xl-4 input-container" />
        <Input inputLabel="Premium Status:" inputPlaceholder="Status" inputClass="col xl-4 input-container" />
        <Input inputLabel="Sum Assured:" inputPlaceholder="000,000" inputClass="col xl-8 input-container" />
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" />
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" />
        <Input inputLabel="Paid to Date:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" />
        <Input inputLabel="Date of Signing:" inputPlaceholder="mm/dd/yyyy" inputClass="col xl-4 input-container" />
      </div>

    );
  }
}

export default PolicyInformationNew;