import React, { Component } from 'react';
import Input from '../../../../shared/component/input/Input';

class AgentInfoHeader extends Component {
 
  render() {
    const agentFullName = this.props.policy.agentLastName + ", " + this.props.policy.agentFirstName + " " + this.props.policy.agentMiddleName;
    return (
      <div className="xl-12 flex-container flex-wrap">
        <Input editable="false" inputLabel="Agent Code:" inputPlaceholder="000000000" txtboxClass="no-border" inputClass="col xl-3 input-container"value={this.props.policy.agentNumber}/>
        <Input editable="false" inputLabel="Agent Name:" inputPlaceholder="First name Last name" txtboxClass="no-border" inputClass="col xl-7 input-container"value={agentFullName}/>
        <Input editable="false" inputLabel="Agent Status:" inputPlaceholder="Active" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.agentStatus} />
        <Input editable="false" inputLabel="Branch Name:" inputPlaceholder="Complete Branch Name" txtboxClass="no-border" inputClass="col xl-10 input-container" value={this.props.policy.agentBranchDesc}/>
        <Input editable="false" inputLabel="NMA:" inputPlaceholder="General" txtboxClass="no-border" inputClass="col xl-2 input-container" value={this.props.policy.nmaDesc}/>
      </div>
    );
  }
}

export default AgentInfoHeader;